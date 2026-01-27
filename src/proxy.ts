import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const authPages = ["/auth/login", "/auth/register", "/auth/forget"];
const publicPages = ["/en", ...authPages.map((path) => `/en${path}`)];

export default async function proxy(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const pathname = req.nextUrl.pathname;

  // 1️⃣ Redirect root "/" → "/en"
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  // 2️⃣ صفحات عامة
  if (publicPages.some((p) => pathname.startsWith(p))) {
    if (!token) return NextResponse.next();

    // لو المستخدم مسجل دخول ويحاول يفتح login/register/forget
    if (authPages.some((p) => pathname.endsWith(p))) {
      const redirectUrl = new URL("/en", req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  }

  // 3️⃣ صفحات خاصة
  if (token) return NextResponse.next();

  // 4️⃣ غير مسجل دخول → redirect لل login
  const redirectUrl = new URL("/en/auth/login", req.nextUrl.origin);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };

// import { getToken } from "next-auth/jwt";

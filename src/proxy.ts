import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const authPages = ["/auth/login", "/auth/register", "/auth/forget"];
const locales = ["en", "ar"];
const publicPages = locales.flatMap((locale) => [
  `/${locale}`,
  ...authPages.map((p) => `/${locale}${p}`),
]);

export default async function proxy(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const pathname = req.nextUrl.pathname;

  // Get locale from path
  const locale = locales.includes(pathname.split("/")[1])
    ? pathname.split("/")[1]
    : "en";

  // Redirect root "/" → default locale
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Check if current path is an auth page
  const isAuthPage = authPages.some((p) => pathname === `/${locale}${p}`);

  // Check if current path is a public page
  const isPublicPage = publicPages.includes(pathname);

  // If it's an auth page and user is logged in → redirect to homepage
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL(`/${locale}`, req.nextUrl.origin));
  }

  // If it's a protected page and user is NOT logged in → redirect to login
  const isProtectedPage = !isPublicPage;
  if (isProtectedPage && !token) {
    return NextResponse.redirect(
      new URL(`/${locale}/auth/login`, req.nextUrl.origin),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

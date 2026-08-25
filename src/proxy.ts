import { cookies } from "next/headers";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";

import { NextRequest, NextResponse } from "next/server";
const intlMiddleware = createMiddleware(routing);

const authPages = ["/login", "/register", "/forgot", "/products"];
const locales = ["en", "ar"];
const publicPages = locales.flatMap((locale) => [
  `/${locale}`,
  // "/products",
  "/categories",
  "/occasions",
  "/contact",
  "/about",
  ...authPages.map((p) => `/${locale}${p}`),
]);
export default async function proxy(req: NextRequest) {
  const response = intlMiddleware(req);

  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const pathname = req.nextUrl.pathname;

  // Get locale from path
  const locale = locales.includes(pathname.split("/")[1])
    ? pathname.split("/")[1]
    : "en";

  if (pathname.startsWith(`/${locale}/products`)) {
    return NextResponse.next();
  }
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
      new URL(`/${locale}/login`, req.nextUrl.origin),
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

//yarn add jwt-decode
// import { cookies } from "next/headers";
// import createMiddleware from "next-intl/middleware";
// import { routing } from "@/src/i18n/routing";
// import { NextRequest, NextResponse } from "next/server";
// import { jwtDecode } from "jwt-decode";

// const intlMiddleware = createMiddleware(routing);

// const authPages = ["/login", "/register", "/forgot", "/products"];
// const locales = ["en", "ar"];

// // صفحات الأدمن
// const adminPages = ["/dashboard"];

// const publicPages = locales.flatMap((locale) => [
//   `/${locale}`,
//   "/categories",
//   "/occasions",
//   "/contact",
//   "/about",
//   ...authPages.map((p) => `/${locale}${p}`),
// ]);

// type JwtPayload = {
//   role: string;
// };

// export default async function proxy(req: NextRequest) {
//   const response = intlMiddleware(req);

//   const cookieStore = await cookies();
//   const token = cookieStore.get("accessToken")?.value;

//   const pathname = req.nextUrl.pathname;

//   const locale = locales.includes(pathname.split("/")[1])
//     ? pathname.split("/")[1]
//     : "en";

//   if (pathname.startsWith(`/${locale}/products`)) {
//     return NextResponse.next();
//   }

//   if (pathname === "/") {
//     const url = req.nextUrl.clone();
//     url.pathname = `/${locale}`;
//     return NextResponse.redirect(url);
//   }

//   const isAuthPage = authPages.some(
//     (p) => pathname === `/${locale}${p}`
//   );

//   const isPublicPage = publicPages.includes(pathname);

//   // منع الدخول لصفحات الأدمن
//   const isAdminPage = adminPages.some(
//     (page) =>
//       pathname === `/${locale}${page}` ||
//       pathname.startsWith(`/${locale}${page}/`)
//   );

//   if (isAdminPage) {
//     if (!token) {
//       return NextResponse.redirect(
//         new URL(`/${locale}/login`, req.nextUrl.origin)
//       );
//     }

//     try {
//       const decoded = jwtDecode<JwtPayload>(token);

//       if (decoded.role !== "admin") {
//         return NextResponse.redirect(
//           new URL(`/${locale}`, req.nextUrl.origin)
//         );
//       }
//     } catch {
//       return NextResponse.redirect(
//         new URL(`/${locale}/login`, req.nextUrl.origin)
//       );
//     }
//   }

//   if (isAuthPage && token) {
//     return NextResponse.redirect(
//       new URL(`/${locale}`, req.nextUrl.origin)
//     );
//   }

//   const isProtectedPage = !isPublicPage;

//   if (isProtectedPage && !token) {
//     return NextResponse.redirect(
//       new URL(`/${locale}/login`, req.nextUrl.origin)
//     );
//   }

//   return response;
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

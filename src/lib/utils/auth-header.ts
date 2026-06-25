import { cookies } from "next/headers";

export async function getAuthHeader() {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated - token missing");
  }

  return { token };
}
// import "server-only";

// import { decode, JWT } from "next-auth/jwt";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE } from "../constants/auth.constant";

// export async function getAuthHeader() {
//   const cookieStore = await cookies();
//   const tokenCookie = cookieStore.get(AUTH_COOKIE)?.value;

//   let jwt: JWT | null = null;

//   try {
//     jwt = await decode({
//       token: tokenCookie,
//       secret: process.env.NEXTAUTH_SECRET!,
//     });

//     console.log("jwt", jwt);
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     token: jwt?.token || "",
//   };
// }

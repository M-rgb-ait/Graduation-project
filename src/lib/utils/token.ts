import "server-only";
import { cookies } from "next/headers";

/**
 * @param token
 */
export async function handleAccessTokenCookie(token?: string) {
  const cookieStore = await cookies();

  if (token) {
    const ONE_DAY = 60 * 60 * 24;
    // save
    cookieStore.set("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // https
      path: "/",
      sameSite: "lax", //  CSRF
      maxAge: ONE_DAY * 7, // 7 Day
    });
    console.log("Access token set");
  } else {
    // delete
    cookieStore.set("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      expires: new Date(0), // expire
    });
    console.log("Access token cleared");
  }

  return true;
}

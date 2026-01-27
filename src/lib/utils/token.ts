import "server-only";
import { cookies } from "next/headers";

/**
 * Function لحفظ أو مسح accessToken على السيرفر
 * @param token - لو موجود يحفظه، لو مش موجود يمسح الكوكي
 */
export async function handleAccessTokenCookie(token?: string) {
  const cookieStore = await cookies();

  if (token) {
    // حفظ الكوكي
    cookieStore.set("accessToken", token, {
      httpOnly: true, // مش قابل للقراءة من الكلاينت
      secure: process.env.NODE_ENV === "production", // https فقط في الإنتاج
      path: "/", // متاح لكل صفحات الدومين
      sameSite: "lax", // حماية CSRF أساسية
    });
    console.log("Access token set");
  } else {
    // مسح الكوكي
    cookieStore.set("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      expires: new Date(0), // expire فوراً
    });
    console.log("Access token cleared");
  }

  return true;
}

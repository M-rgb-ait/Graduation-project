"use server";

import { JSON_HEADER } from "@/src/lib/constant/api.constant";
import { handleAccessTokenCookie } from "@/src/lib/utils/token";
import { cookies } from "next/headers";

export async function DeleteMeAction() {
  const cookieStore = await cookies(); // 👈 await
  const token = cookieStore.get("accessToken")?.value;
  if (!token || token === "") {
    throw new Error("Not authenticated - token missing");
  }

  const response = await fetch(`${process.env.API}/auth/deleteMe`, {
    method: "DELETE",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token}`,
    },
  });

  const payload = await response.json();
  handleAccessTokenCookie();
  console.log("delete payload", payload);
  return payload;
}

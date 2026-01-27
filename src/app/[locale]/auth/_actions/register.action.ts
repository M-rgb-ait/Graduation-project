"use server";

import { JSON_HEADER } from "@/src/lib/constant/api.constant";
import { registerFields } from "@/src/lib/schemes/auth.schemes";

export default async function RegisterAction(values: registerFields) {
  try {
    const respons = await fetch(`${process.env.API}/auth/signup`, {
      method: "POST",
      headers: { ...JSON_HEADER },
      body: JSON.stringify(values),
    });
    const payload: APIResponse<registerResponse> = await respons.json();
    if (!respons.ok || (payload as ErrorResponse).error) {
      throw Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later",
      );
    }
    console.log("register payload", payload);
    return payload;
  } catch (err) {
    throw err;
  }
}

"use server";

import { JSON_HEADER } from "@/src/lib/constant/api.constant";
import { verifyOtpValues } from "@/src/lib/schemes/auth.schemes";

export const verifyOtp = async (values: verifyOtpValues) => {
  try {
    const res = await fetch(`${process.env.API}/auth/verifyResetCode`, {
      method: "POST",
      headers: JSON_HEADER,
      body: JSON.stringify(values),
    });

    const payload: APIResponse<verifyOtpResponse> = await res.json();

    if (!res.ok || (payload as ErrorResponse).error) {
      throw new Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later",
      );
    }

    return payload;
  } catch (err) {
    throw err;
  }
};

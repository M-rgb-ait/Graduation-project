"use server";

import { JSON_HEADER } from "@/src/lib/constant/api.constant";
import { ForgotPasswordFields } from "@/src/lib/schemes/auth.schemes";

export async function forgotPasswordAction(values: ForgotPasswordFields) {
  try {
    const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: JSON_HEADER,
    });

    const payload: APIResponse<ForgotPasswordRespons> = await response.json();

    if (!response.ok || (payload as ErrorResponse).error) {
      throw Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later",
      );
    }
    return payload as SuccessfullResponse<ForgotPasswordRespons>;
  } catch (error) {
    throw error;
  }
}

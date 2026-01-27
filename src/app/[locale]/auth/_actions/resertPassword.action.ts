"use server";

import { JSON_HEADER } from "@/src/lib/constant/api.constant";
import { resetPasswordFields } from "@/src/lib/schemes/auth.schemes";

export async function resetPasswordAction(
  values: Omit<resetPasswordFields, "confirmNewPassword">,
) {
  try {
    const response = await fetch(`${process.env.API}/auth/resetPassword`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: JSON_HEADER,
    });

    const payload: APIResponse<ResetPasswordValues> = await response.json();

    if (!response.ok || (payload as ErrorResponse).error) {
      throw Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later",
      );
    }
    return payload as SuccessfullResponse<ResetPasswordValues>;
  } catch (error) {
    throw error;
  }
}

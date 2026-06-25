"use server";
import { JSON_HEADER } from "@/src/lib/constants/api.constant";
import { getAuthHeader } from "@/src/lib/utils/auth-header";

export async function checkWishlist(id: string) {
  try {
    const { token } = await getAuthHeader();
    const response = await fetch(`${process.env.API}/wishlist/check/${id}`, {
      method: "GET",
      headers: {
        ...JSON_HEADER,
        Authorization: `Bearer ${token}`,
      },
    });
    const payload: APIResponse<CheckWishlist> = await response.json();
    // if (!response.ok || (payload as ErrorResponse).error) {
    //   throw Error(
    //     (payload as ErrorResponse).error ||
    //       "Something went wrong, try again later",
    //   );
    // }
    if ("error" in payload) {
      throw new Error(payload.error);
    }

    return payload;
  } catch (error) {
    throw error;
  }
}

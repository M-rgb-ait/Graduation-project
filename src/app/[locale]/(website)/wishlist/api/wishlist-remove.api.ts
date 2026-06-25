"use server";
import { JSON_HEADER } from "@/src/lib/constants/api.constant";
import { getAuthHeader } from "@/src/lib/utils/auth-header";

export async function removeWishlist(id: string) {
  try {
    const { token } = await getAuthHeader();
    const response = await fetch(`${process.env.API}/wishlist/${id}`, {
      method: "DELETE",
      headers: {
        ...JSON_HEADER,
        Authorization: `Bearer ${token}`,
      },
    });
    const payload: APIResponse<RemoveWishlist> = await response.json();
    if (!response.ok || (payload as ErrorResponse).error) {
      throw Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later",
      );
    }
    return payload;
  } catch (error) {
    throw error;
  }
}

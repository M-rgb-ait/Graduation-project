"use server";
import { JSON_HEADER } from "@/src/lib/constants/api.constant";
import { getAuthHeader } from "@/src/lib/utils/auth-header";

export async function addWhishlist(value: AddWishlist) {
  const { token } = await getAuthHeader();
  try {
    const response = await fetch(`${process.env.API}/wishlist`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        ...JSON_HEADER,
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("response:", response);
    const payload: APIResponse<WishlistProduct> = await response.json();
    // console.log("status:", response.status);
    // console.log("payload:", payload);

    if (!response.ok) {
      throw new Error(JSON.stringify(payload));
    }
    return payload;
  } catch (error) {
    throw error;
  }
}

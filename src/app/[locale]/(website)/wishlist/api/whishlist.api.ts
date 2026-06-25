export async function getWhishlist() {
  try {
    const response = await fetch("/api/wishlist");
    const payload: APIResponse<WishlistResponse> = await response.json();
    if ("error" in payload) {
      throw new Error(payload.error);
    } // this is error spacifc page wishlist get all
    return payload;
  } catch (error) {
    throw error;
  }
}

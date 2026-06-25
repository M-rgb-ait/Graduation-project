import { useQuery } from "@tanstack/react-query";
import { checkWishlist } from "../api/wishlist-check.api";

export const useCheckWishlist = (id: string) => {
  return useQuery({
    queryKey: ["wishlist", id],
    queryFn: () => checkWishlist(id),
    enabled: !!id,
  });
};

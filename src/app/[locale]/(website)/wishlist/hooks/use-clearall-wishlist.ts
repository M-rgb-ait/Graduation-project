import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearAllWishlist } from "../api/wishlist-clearall.api";
import { toast } from "sonner";

export const useClearAllWishlist = () => {
  const queryClient = useQueryClient();

  const { mutate: ClearAllWishlist, isPending: ClearAllisPending } =
    useMutation({
      mutationKey: ["wishlist"],
      mutationFn: clearAllWishlist,
      onSuccess: () => {
        toast.success("Clear all successfully");
        queryClient.invalidateQueries({
          queryKey: ["wishlist"],
        });
      },
      onError: () => {
        toast.error("error clear all");
      },
    });
  return { ClearAllWishlist, ClearAllisPending };
};

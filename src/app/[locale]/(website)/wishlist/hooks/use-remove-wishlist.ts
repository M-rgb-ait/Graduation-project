import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeWishlist } from "../api/wishlist-remove.api";
import { toast } from "sonner";

export const useRemoveWishlist = () => {
  const queryClient = useQueryClient();

  const {
    mutate: RemoveWishlist,
    isPending: isRemoving,
    variables,
  } = useMutation({
    mutationFn: removeWishlist,

    onSuccess: () => {
      toast.success("Delete successfully");

      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },

    onError: () => {
      toast.error("Error delete");
    },
  });

  return { RemoveWishlist, isRemoving, variables };
};

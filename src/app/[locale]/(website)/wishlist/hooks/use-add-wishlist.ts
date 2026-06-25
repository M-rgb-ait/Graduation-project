import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addWhishlist } from "../api/wishlist-add.api";
import { toast } from "sonner";

export const useAddWishlist = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: AddWishlist } = useMutation({
    mutationKey: ["wishlist"],
    mutationFn: addWhishlist,
    onSuccess: () => {
      toast.success("Added to wishlist ❤️");
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
    onError: () => {
      toast.error("Error Add");
    },
  });

  return { isPending, AddWishlist };
};

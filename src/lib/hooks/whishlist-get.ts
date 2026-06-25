import { useQuery } from "@tanstack/react-query";
import { getWhishlist } from "../../app/[locale]/(website)/wishlist/api/whishlist.api";

export const useWhishlist = () => {
  const { data: Allwhishlist, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWhishlist,
  });
  return { Allwhishlist, isLoading };
};

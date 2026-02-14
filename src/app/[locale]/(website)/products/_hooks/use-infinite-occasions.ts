import { useInfiniteQuery } from "@tanstack/react-query";
import { getOccasions } from "../_api/get-occasions.api";

export const useInfiniteOccasions = () => {
  const {
    data: payload,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["Occasions"],
    queryFn: getOccasions,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        lastPage.metadata?.currentPage >= lastPage.metadata?.totalPages;

      return isLastPage ? undefined : lastPage.metadata?.currentPage + 1;
    },
  });

  const occasions =
    payload?.pages.flatMap((page) => page.occasions || []) ?? [];

  return {
    occasions,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  };
};

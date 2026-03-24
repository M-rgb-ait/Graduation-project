import { useInfiniteQuery } from "@tanstack/react-query";
import { getcategories } from "../_api/get-categories.api";

export const useInfiniteCategories = () => {
  const {
    data: payload,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["categories"],
    queryFn: getcategories,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        lastPage.metadata?.currentPage >= lastPage.metadata?.totalPages;

      return isLastPage ? undefined : lastPage.metadata?.currentPage + 1;
    },
  });

  const categories =
    payload?.pages.flatMap((page) => page.categories || []) ?? [];

  return {
    categories,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  };
};

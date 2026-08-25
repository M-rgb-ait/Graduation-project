import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllNotifications } from "../actions/get-all-notifications";

export default function useInfiniteNotifications() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["notifications"],
    queryFn: getAllNotifications,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const isLastPage = lastPage.metadata.page >= lastPage.metadata.totalPages;

      return isLastPage ? undefined : lastPage.metadata.page + 1;
    },
  });

  const notifications = data?.pages.flatMap((page) => page.data) ?? [];

  return {
    notifications,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  };
}

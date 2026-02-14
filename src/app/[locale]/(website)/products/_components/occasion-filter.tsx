"use client";
import InfiniteScroll from "react-infinite-scroll-component";

import OccasionSkeleton from "@/src/components/skeletons/features/occasion/occasion.skeleton";
import { useInfiniteOccasions } from "../_hooks/use-infinite-occasions";
import FilterHeader from "./filter-header";
import OccasionItem from "./occasion-item";

export default function OccasionFilter() {
  const { occasions, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteOccasions();

  return (
    <div>
      <FilterHeader title="occasions" query={["occasion"]} />

      <div id="occasions" className="h-64 overflow-auto scrollbar-hide">
        {isLoading && <OccasionSkeleton />}
        {occasions.length !== 0 && (
          <InfiniteScroll
            next={fetchNextPage}
            loader={
              <div className="pt-2.5">
                <OccasionSkeleton blocks={4} />
              </div>
            }
            hasMore={!!hasNextPage}
            dataLength={occasions.length}
            scrollableTarget="occasions"
          >
            <ul className="grid grid-cols-2 gap-2.5">
              {occasions.map((occasion) => (
                <OccasionItem key={occasion._id} occasion={occasion} />
              ))}
            </ul>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}

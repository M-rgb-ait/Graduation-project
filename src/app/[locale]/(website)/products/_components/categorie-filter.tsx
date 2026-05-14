"use client";

import StatisticsCategorySkeleton from "@/src/components/skeletons/features/categories/statistics-category.skeleton";
import { useInfiniteCategories } from "../_hooks/use-infinite-categorie";
import FilterHeader from "./filter-header";
import InfiniteScroll from "react-infinite-scroll-component";
import CategorieItem from "./categorie-item";

export default function CategoriesFilter() {
  const { categories, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteCategories();

  return (
    <div>
      <FilterHeader title="categories" query={["categoryId"]} />

      <div id="categories" className="h-64 overflow-auto scrollbar-hide">
        {isLoading && <StatisticsCategorySkeleton />}
        {categories.length !== 0 && (
          <InfiniteScroll
            next={fetchNextPage}
            loader={
              <div className="pt-2.5">
                <StatisticsCategorySkeleton blocks={4} />
              </div>
            }
            hasMore={!!hasNextPage}
            dataLength={categories.length}
            scrollableTarget="categories"
          >
            <ul className="grid grid-cols-2 gap-2.5">
              <CategorieItem />
            </ul>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}

"use client";
// import CategoriesFilter from "./categorie-filter";
import CategorieItem from "./categorie-item";
import FilterRating from "./filter-rating";
import OccasionFilter from "./occasion-filter";

export default function Sidebar() {
  return (
    <aside className="space-y-4 divide-y-2 divide-zinc-100 dark:divide-zinc-700 [&>*]:pt-4">
      {/* Categories filter */}
      {/* <CategoriesFilter confilet /> */}
      <CategorieItem />

      {/* Occasion filter */}
      <OccasionFilter />

      {/* Rating filter */}
      <FilterRating />

      {/* Price filter */}
      {/* <PriceFilter /> */}

      {/* Reset all filters */}
      {/* <ResetAll /> */}
    </aside>
  );
}

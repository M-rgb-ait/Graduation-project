"use client";
import { useState } from "react";
// import CategoriesFilter from "./categorie-filter";
import CategorieItem from "./categorie-item";
import FilterButton from "./Filter-button";
import FilterRating from "./filter-rating";
import OccasionFilter from "./occasion-filter";
import CheckBox from "./check-box";

export default function Sidebar() {
  const [categoryId, setCategoryId] = useState("");

  return (
    <aside className="space-y-4 divide-y-2 divide-zinc-100 dark:divide-zinc-700 [&>*]:pt-4">
      {/* Categories filter */}
      {/* <CategoriesFilter confilet /> */}
      <CategorieItem selected={categoryId} setSelected={setCategoryId} />

      {/* Occasion filter */}
      <OccasionFilter />

      {/* Rating filter */}
      <FilterRating />

      {/* Price filter */}
      {/* <PriceFilter /> */}

      {/* Reset all filters */}
      {/* <ResetAll /> */}
      <FilterButton selected={categoryId} />
      <CheckBox />
    </aside>
  );
}

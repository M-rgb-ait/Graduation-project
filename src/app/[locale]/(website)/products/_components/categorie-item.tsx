"use client";

import Image from "next/image";
import { cn } from "@/src/lib/utils/cn";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useInfiniteCategories } from "../_hooks/use-infinite-categorie";
import FilterHeader from "./filter-header";

export default function CategorieItem() {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("categoryId");
  const { categories } = useInfiniteCategories();
  // Functions
  const handleClick = (id: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (id === selectedCategory) {
      newParams.delete("categoryId");
    } else {
      newParams.set("categoryId", id);
    }
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <ul className="h-64 space-y-1 overflow-y-auto border-b-zinc-100 pb-5 pt-2.5 scrollbar-hide">
      <FilterHeader title="categories" query={["categoryId"]} />
      {categories.map((category: Categories) => (
        <li
          key={category._id}
          onClick={() => handleClick(category._id)}
          className={cn(
            "group flex cursor-pointer items-center gap-1 rounded-md pr-2.5 text-sm transition-colors hover:bg-maroon-50 rtl:pr-0",
            selectedCategory === category._id
              ? "bg-maroon-50 dark:bg-softpink-100 dark:text-zinc-800"
              : "bg-zinc-200 hover:bg-maroon-50 dark:bg-zinc-700 dark:hover:text-zinc-800",
          )}
        >
          {/* Image inside wrapper for styling */}
          <div
            className={cn(
              "rounded-s-md p-2 transition-colors",
              selectedCategory === category._id
                ? "bg-maroon-600 dark:bg-softpink-300"
                : "bg-zinc-500 group-hover:bg-maroon-600 dark:group-hover:bg-softpink-300",
            )}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={24}
              height={24}
              className="shrink-0"
            />
          </div>

          <span className="ms-2.5 truncate font-medium">{category.name}</span>
        </li>
      ))}
    </ul>
  );
}

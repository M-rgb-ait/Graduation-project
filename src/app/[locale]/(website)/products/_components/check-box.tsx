"use client";

import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useInfiniteCategories } from "../_hooks/use-infinite-categorie";
import FilterHeader from "./filter-header";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/src/components/ui/label";

export default function CheckBox() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { categories, isLoading } = useInfiniteCategories();

  // source of applied filters
  // const selectedCategory = searchParams.getAll("category");
  // console.log("selectedCategory", selectedCategory);
  //  local state for UI (before apply)
  const [search, setSearch] = useState<string[]>(
    searchParams.getAll("category"),
  );
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");

    search.forEach((id) => {
      params.append("category", id);
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <FilterHeader
        title="categories"
        query={["category"]}
        onClear={() => {
          setSearch([]);
        }}
      />

      {search.map((id) => {
        const category = categories.find((item) => item._id === id);
        return (
          <div
            key={id}
            onClick={() => {
              setSearch((prev) => prev.filter((item) => item !== id));
              const params = new URLSearchParams(searchParams);
              const current = params.getAll("category");
              params.delete("category");
              current
                .filter((item) => item !== id)
                .forEach((item) => {
                  params.append("category", item);
                }); //becouse no array or data collection ["h","j"] becoues nesensy forEach collection data

              router.push(`${pathname}?${params.toString()}`);
            }}
          >
            {category?.name}
          </div>
        );
      })}
      <div className="space-y-2">
        {categories.map((category: Categories) => (
          <div key={category._id} className="flex items-center gap-2">
            <Checkbox
              id={category._id}
              key={category._id}
              checked={search.includes(category._id)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSearch(
                    (
                      prev, //["1","2"]
                    ) =>
                      prev.includes(category._id)
                        ? prev //found "2"
                        : [...prev, category._id], // not found "3"
                  );
                } else {
                  setSearch((prev) => prev.filter((id) => id !== category._id));
                  // no collection data becouse spret opretor he have array
                }
              }}
            />

            <Label htmlFor={category._id}>{category.name}</Label>
          </div>
        ))}
      </div>
      <Button spinner={isLoading} onClick={handleClick} className="w-full">
        Filter ({search.length})
      </Button>
    </div>
  );
}
// if (checked) {
//   setSearch((prev) =>
//     prev.includes(category._id) ? prev : [...prev, category._id],
//   );
//===============================================================//
// const selectedCategory = searchParams.getAll("category");
// // Functions
// const handleClick = () => {
//   const params = new URLSearchParams(searchParams);

//   params.delete("category");

//   selectedCategory.forEach((id) => {
//     params.append("category", id);
//   });

//   router.push(`${pathname}?${params.toString()}`);
// };

// <Checkbox
//   id={category._id}
//   checked={selectedCategory.includes(category._id)}
//   onCheckedChange={(checked) => {
//     const params = new URLSearchParams(searchParams);

//     const current = params.getAll("category");

//     if (checked) {
//       if (!current.includes(category._id)) {
//         params.append("category", category._id);
//       }
//     } else {
//       params.delete("category");

//       current
//         .filter((id) => id !== category._id)
//         .forEach((id) => {
//           params.append("category", id);
//         });
//     }

//     router.push(`${pathname}?${params.toString()}`);
//   }}

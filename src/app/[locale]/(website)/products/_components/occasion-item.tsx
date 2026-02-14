"use client";

import Image from "next/image";
import { useQueryParams } from "../_hooks/use-query-params";
import { cn } from "@/src/lib/utils/cn";

export default function OccasionItem({ occasion }: { occasion: Occasion }) {
  // Hooks
  const { navigate, getSearchParam, setSearchParam, deleteSearchParam } =
    useQueryParams();

  // Variables
  const selectedOccasion = getSearchParam("occasion");

  // Handle search params
  function toggleSelectOccasion(id: string) {
    if (id === selectedOccasion) deleteSearchParam("occasion");
    else setSearchParam("occasion", id);

    navigate();
  }

  return (
    <li
      onClick={() => toggleSelectOccasion(occasion._id)}
      className="relative h-20 w-full cursor-pointer overflow-hidden rounded-lg"
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_API_UPLOADS}/${occasion.image}`}
        fill
        alt="occasion image"
        className="object-cover"
        sizes="33vw"
      />
      <h3
        className={cn(
          "bg-occasion-pattern absolute inset-0 flex items-center justify-center font-medium text-zinc-50",
          selectedOccasion === occasion._id &&
            "bg-occasion-pattern-active dark:bg-occasion-pattern-active-dark",
        )}
      >
        {occasion.name}
      </h3>
    </li>
  );
}

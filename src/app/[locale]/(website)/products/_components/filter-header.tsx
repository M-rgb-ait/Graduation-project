"use client";

import { useTranslations } from "next-intl";
import { useQueryParams } from "../_hooks/use-query-params";
import { Button } from "@/src/components/ui/button";
import { X } from "lucide-react";

// types
type FilterHeaderProps = {
  title: string;
  query: string[];
};

export default function FilterHeader({ title, query }: FilterHeaderProps) {
  // Hooks
  const { deleteSearchParam, navigate } = useQueryParams();

  // Translations
  const t = useTranslations();

  // Handle search params
  function resetSearchQuery() {
    // Reset all given Queries
    query.forEach((q) => deleteSearchParam(q));

    // Apply the changed by Navigation
    navigate();
  }

  return (
    <header className="mb-3 flex items-center justify-between ">
      {/* Filter title */}
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-50">
        {title}
      </h2>

      {/* Reset button */}
      <Button
        onClick={resetSearchQuery}
        variant="empty"
        size="empty"
        className="gap gap-1 text-sm text-red-600 rtl:flex-row-reverse"
      >
        <X className="size-4" />
        {t("reset")}
      </Button>
    </header>
  );
}

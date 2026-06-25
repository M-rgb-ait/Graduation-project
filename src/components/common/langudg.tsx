"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { routing } from "@/src/i18n/routing";
import { Locale, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function ToggleLocale() {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const locale = useLocale();
  const language = {
    en: "English",
    ar: "العربية",
  };

  //   Function
  const handleToggle = (locale: Locale) => {
    router.push(`${pathname}?${searchParams.toString()}`, {
      locale,
    });
  };

  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center rounded-md px-3 py-2 dark:bg-zinc-700 dark:text-zinc-50">
          {locale === "ar" ? "العربية" : "English"}
        </button>
      </DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent>
        {routing.locales.map((locale) => (
          <DropdownMenuItem onClick={() => handleToggle(locale)} key={locale}>
            {language[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

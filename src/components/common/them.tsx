"use client";

import { Moon, Sun } from "lucide-react";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

export default function ThemeToggle() {
  // hooks
  const { setTheme } = useTheme();

  // Translations
  const locale = useLocale();
  //   const t = useTranslations();

  return (
    <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger className="ps-4 focus-visible:outline-none" asChild>
        <Button variant="empty" size="empty">
          {/* Light icon */}
          <Sun className="size-6 rotate-0 scale-100 transition-all! dark:-rotate-90 dark:scale-0" />

          {/* Dark icon */}
          <Moon className="absolute size-6 rotate-90 scale-0 transition-all! dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          system
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

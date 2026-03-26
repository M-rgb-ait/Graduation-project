"use client";

import { HEADER_NAV_LINKS } from "@/src/lib/constants/navlinks.constant";
import { cn } from "@/src/lib/utils/cn";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/src/i18n/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const t = useTranslations();

  const localeRemovedPath = pathName.replace(/^\/(en|ar)/, "") || "/";

  return (
    <nav className="bg-maroon-700 text-zinc-50 dark:bg-softpink-200 dark:text-maroon-800">
      <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 p-2">
        {HEADER_NAV_LINKS.map((link) => {
          const isActive =
            (link.path === "/" && localeRemovedPath === "/") ||
            (link.path !== "/" && localeRemovedPath.startsWith(link.path));

          return (
            <li
              key={link.name}
              className={cn(
                "flex flex-col items-center sm:flex-row gap-1 border-b-2 border-transparent p-2 sm:p-3 rounded-sm transition-colors",
                isActive &&
                  "border-pink-400 text-pink-400 dark:border-pink-500 dark:text-pink-300 hover:text-pink-300 dark:hover:text-pink-200",
              )}
            >
              {link.icon && (
                <link.icon className="w-5 h-5 mb-1 sm:mb-0 sm:me-1" />
              )}
              <Link href={link.path} className="text-sm sm:text-base">
                {t(link.name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

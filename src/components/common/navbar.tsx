"use client";

import { HEADER_NAV_LINKS } from "@/src/lib/constants/navlinks.constant";
import { cn } from "@/src/lib/utils/cn";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/src/i18n/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const t = useTranslations(); // Translation hook

  return (
    <nav className="bg-maroon-700 text-zinc-50 dark:bg-softpink-200 dark:text-maroon-800">
      <ul className="flex items-center justify-center gap-4">
        {HEADER_NAV_LINKS.map((link) => (
          <li
            key={link.name}
            className={cn(
              "flex items-center gap-1 border-b-2 border-transparent p-3",
              pathName === link.path &&
                "border-b-softpink-200 text-softpink-200 dark:border-b-maroon-800 dark:text-maroon-800",
            )}
          >
            {/* Nav icon */}
            <link.icon className="size-5" />

            {/* Nav name (translated) */}
            <Link href={link.path}>{t(link.name)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

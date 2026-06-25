"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  ChevronDown,
  MapPinHouse,
  ScrollText,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/src/components/providers/components/get-user-name";
import { Link } from "@/src/i18n/navigation";
import { cn } from "@/src/lib/utils/cn";
import { Button } from "@/src/components/ui/button";
import { useDeieteMyAccount } from "../../../(auth)/_hook/use-delete";

export default function UserDropdown() {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  const { user } = useUser();
  const { mutate } = useDeieteMyAccount();

  return (
    <div>
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger className="border-none outline-none dark:bg-zinc-700">
          <span className="flex max:sm:flex-col gap-1 text-slate-500 dark:text-zinc-500">
            {t("hello")},
            <span className="text-maroon-700 dark:text-pink-200">
              {user?.firstName}
            </span>
            {/* Icon */}
            <ChevronDown />
          </span>
        </DropdownMenuTrigger>

        {/* Content */}
        <DropdownMenuContent className="w-56">
          {/* Label */}
          <DropdownMenuLabel>
            <span className="text-maroon-700 dark:text-pink-200">
              {user?.firstName}
              {""} {user?.lastName}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Item */}
          <DropdownMenuGroup>
            <Link href="/">
              <DropdownMenuItem
                className={`${locale === "ar" ? "flex-row-reverse" : ""} dark:text-zinc-100`}
              >
                {/* Icon */}
                <User />
                <span>{t("my-profile")}</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          {/* Item */}
          <DropdownMenuGroup>
            <Link href="">
              <DropdownMenuItem
                className={`${locale === "ar" ? "flex-row-reverse" : ""} dark:text-zinc-100`}
              >
                {/* Icon */}
                <MapPinHouse />
                <span>{t("my-addresses")}</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          {/* Item */}
          <DropdownMenuGroup>
            <Link href="/orders">
              <DropdownMenuItem
                className={cn(
                  "dark:text-zinc-100",
                  locale === "ar" && "flex-row-reverse",
                )}
              >
                {/* Icon */}
                <ScrollText />
                <span>{t("my-orders")}</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          {/* Item */}
          <DropdownMenuGroup>
            <Link href="/dashboard">
              <DropdownMenuItem
                className={`${locale === "ar" ? "flex-row-reverse" : ""} dark:text-zinc-100`}
              >
                {/* Icon */}
                <Settings />
                <span>{t("dashboard")}</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          {/* Item */}
          <DropdownMenuItem
            className={`${locale === "ar" ? "flex-row-reverse" : ""} dark:text-zinc-100`}
          >
            {/* Icon */}
            <Button
              className="text-red-800 text-lg font-semibold mt-2"
              onClick={() => mutate()}
            >
              {t("delete-my-account")}
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

"use client";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { Input } from "../ui/input";
import { Heart, ShoppingCart, User } from "lucide-react";
import ToggleLocale from "./langudg";
import ThemeToggle from "./them";
import Navbar from "./navbar";
import { useTranslations } from "next-intl";
import homeSectionImg from "@/public/assets/app-logo1.png";
import UserDropdown from "@/src/app/[locale]/(website)/products/_components/user-dropdown";
import { useUser } from "../providers/components/get-user-name";

export default function Header() {
  // tarsnlation
  const t = useTranslations();
  const { user } = useUser();

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white py-1 dark:bg-zinc-800">
      {/* Applicatino header */}
      <header className="container flex flex-col gap-3 px-4 py-2 md:flex-row md:items-center md:gap-4">
        {/* Logo */}
        <div className="relative flex items-center justify-center md:justify-between">
          {" "}
          <Link href="/">
            <div className="relative h-14 w-14 md:h-20 md:w-20">
              <Image
                src={homeSectionImg}
                alt="red presents"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>
          {/* icons تظهر جنب اللوجو في الموبايل */}
          <div className="absolute end-0 hidden sm:flex items-center gap-3">
            {" "}
            <Heart size={20} />
            <Link href="/cart">
              <ShoppingCart size={20} />
            </Link>
            <ToggleLocale />
            <ThemeToggle />
          </div>
        </div>

        {/* Search */}
        <div className="w-full md:flex-1">
          <Input placeholder={t("gift-looking-for")} type="search" />
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4 divide-x-2 rtl:divide-x-reverse">
          {/* User */}
          <div className="flex items-center gap-1.5">
            {user ? (
              <UserDropdown />
            ) : (
              <div className="flex gap-2 p-2 align-middle text-zinc-700 dark:text-zinc-50">
                <User size={20} strokeWidth={1.75} />
                <Link href="/login">{t("Login")}</Link>
              </div>
            )}
          </div>

          {/* Wishlist / cart */}
          <div className="flex items-center gap-2.5 ps-4">
            <Heart />
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </div>

          {/* Locale */}
          <div className="ps-4">
            <ToggleLocale />
          </div>

          {/* Theme */}
          <ThemeToggle />
        </div>
      </header>

      {/* Application nav links / pages */}
      <Navbar />
    </div>
  );
}

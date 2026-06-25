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
import { useWhishlist } from "@/src/lib/hooks/whishlist-get";

export default function Header() {
  const t = useTranslations();
  const { user } = useUser();
  const { Allwhishlist } = useWhishlist();
  const productslngth = Allwhishlist?.count ?? 0;

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white py-1 dark:bg-zinc-800">
      <header className="container flex flex-col gap-3 px-4 py-2 md:flex-row md:items-center md:gap-4">
        {/* Logo */}
        <div className="relative flex items-center justify-between w-full md:w-auto">
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

          {/* Mobile Icons */}
          <div className="absolute end-0 flex sm:hidden items-center gap-3">
            <Heart size={20} />
            <Link href="/cart">
              <ShoppingCart size={20} />
            </Link>
            <ToggleLocale />
            <ThemeToggle />
          </div>
        </div>

        {/* Search */}
        <div className="w-full md:flex-1 md:mx-4">
          <Input
            placeholder={t("gift-looking-for")}
            type="search"
            className="w-full"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
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

          {/* Right group */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-3">
              <Link href="/wishlist" className="relative">
                {productslngth > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                    {productslngth > 99 ? "99+" : productslngth}
                  </span>
                )}

                <Heart className="h-6 w-6" />
              </Link>

              <Link href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </div>

            <ToggleLocale />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Navigation links */}
      <Navbar />
    </div>
  );
}

"use client";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { Input } from "../ui/input";
import { Heart, ShoppingCart } from "lucide-react";
import ToggleLocale from "./langudg";
import ThemeToggle from "./them";
import Navbar from "./navbar";
import { useTranslations } from "next-intl";
import homeSectionImg from "@/public/assets/app-logo1.png";

export default function Header() {
  // Variables
  //   const session = await getServerSession(authOptions);

  // tarsnlation
  const t = useTranslations();

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white py-1 dark:bg-zinc-800">
      {/* Applicatino header */}
      <header className="container flex items-center gap-4 px-4">
        {/* Application logo */}
        <Link href="/">
          <div className="relative w-20 h-20">
            <Image
              src={homeSectionImg}
              alt="red presents"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* use addres */}
        {/* <UseAddres /> */}

        {/* Search */}
        <div className="flex-1">
          <Input placeholder={t("gift-looking-for")} type="search" />
        </div>

        <div className="flex items-center gap-4 divide-x-2 rtl:divide-x-reverse">
          {/* User Shopping Status wishlist / cart / notifications */}
          <div className="flex items-center gap-2.5 ps-4">
            <Heart />
            <Link href="/cart">
              <ShoppingCart />
            </Link>
            {/* Display Notifications */}
            {/* <Notification /> */}
          </div>

          {/* Language Toggle */}
          <div className="ps-4">
            <ToggleLocale />
          </div>

          {/* Mode Toggle */}
          <ThemeToggle />
        </div>
      </header>

      {/* Application nav links / pages */}
      <Navbar />
    </div>
  );
}

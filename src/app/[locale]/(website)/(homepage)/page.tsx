"use client";

import { useTranslations } from "next-intl";
import { useDeieteMyAccount } from "../../auth/_hook/use-delete";
import { Button } from "@/src/components/ui/button";
// import ToggleLocale from "@/src/components/common/langudg";
// import ThemeToggle from "@/src/components/common/them";
import { useUser } from "@/src/components/providers/components/get-user-name";
import AboutSection from "./_components/about-section";
import GallerySection from "./_components/gallery-section";
import ImagesSection from "./_components/images-section";
import CarouselSection from "./_components/carousel-section";
import OccasionsSection from "./_components/occasions-section";
import FeaturesSection from "./_components/features-section";
// import NewsletterSubscribe from "@/src/components/common/newsletter-subscibe";

export default function Home() {
  const { mutate } = useDeieteMyAccount();
  const t = useTranslations();
  const { user } = useUser();

  return (
    <div>
      {/* <header className="flex w-full items-center justify-end gap-2 px-4 py-3">
        <ToggleLocale />
        <ThemeToggle />
      </header> */}
      <h1 className="text-xl font-bold">
        مرحباً، {user ? `${user.firstName} ${user.lastName}` : "ضيف"}
      </h1>
      <div>{t("hhggghgh")}</div>
      <Button
        className="text-red-800 text-lg font-semibold mt-2"
        onClick={() => mutate()}
      >
        {t("delete-my-account")}
      </Button>
      <CarouselSection />
      <OccasionsSection />
      <FeaturesSection />

      <AboutSection />
      <GallerySection />
      <ImagesSection />
    </div>
  );
}

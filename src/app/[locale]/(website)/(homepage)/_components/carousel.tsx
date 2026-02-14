"use client";

import { EmblaCarouselType } from "embla-carousel";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useDotButton } from "../_hooks/use-dots";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CAROUSEL_IMAGES } from "@/src/lib/constants/carousel.constant";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";

export default function HomeCarousel() {
  // Translation
  const t = useTranslations();
  const locale = useLocale();

  // Variables
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | undefined>(
    undefined,
  );
  const { onDotButtonClick, scrollSnaps, selectedIndex } =
    useDotButton(emblaApi);

  return (
    <Carousel
      opts={locale === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      className="h-full w-full overflow-hidden rounded-b-3xl"
      setApi={setEmblaApi}
    >
      <CarouselContent>
        {CAROUSEL_IMAGES.map((item, index) => {
          return (
            <CarouselItem key={index} className="relative h-[440px]">
              {/* Carousel image */}
              <Image
                src={item.image}
                alt={t(item.alt)}
                fill
                className="object-cover object-center"
              />

              {/* Dark gradient overlay */}
              <div className="pointer-events-none absolute inset-0 z-[1] from-black/80 to-transparent ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

              {/* Title and description */}
              <div className="absolute bottom-9 z-[2] flex flex-col flex-wrap ltr:left-11 rtl:right-11">
                <h4 className="text-4xl font-semibold">{t(item.title)}</h4>
                <p className="mb-5 text-base font-normal">
                  {t(item.description)}
                </p>
                <Button
                  asChild
                  variant={"secondary"}
                  className="w-[129px] rounded-[10px] px-4 py-[10px]"
                >
                  <Link href="/products">{t("home-carousel-button")}</Link>
                </Button>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      {/* Carousel navigation buttons */}
      <div className="absolute bottom-[30.5px] w-20 ltr:right-8 rtl:left-8">
        <div className="flex h-[35px] w-[74px] justify-between rounded-full bg-maroon-50 rtl:flex-row-reverse">
          {locale === "en" ? (
            <>
              <CarouselPrevious className="text-[30px] text-maroon-600" />
              <CarouselNext className="text-[30px] text-maroon-600" />
            </>
          ) : (
            <>
              <CarouselNext className="text-[30px] text-maroon-600 rtl:rotate-180" />
              <CarouselPrevious className="text-[30px] text-maroon-600 rtl:rotate-180" />
            </>
          )}
        </div>
      </div>

      {/* Carousel pagination */}
      <div className="absolute top-[27.5px] flex flex-wrap justify-between gap-2 ltr:right-8 ltr:flex-row rtl:left-8">
        {scrollSnaps.map((_, index) => {
          return (
            <Button
              key={index}
              size={"icon"}
              onClick={() => {
                onDotButtonClick(index);
              }}
              className={
                selectedIndex === index
                  ? "h-2.5 w-9 rounded-[46.6px] bg-maroon-600 transition-all duration-300 hover:bg-maroon-600"
                  : "size-2.5 rounded-full bg-maroon-50 transition-all duration-300 hover:bg-maroon-50"
              }
            ></Button>
          );
        })}
      </div>
    </Carousel>
  );
}

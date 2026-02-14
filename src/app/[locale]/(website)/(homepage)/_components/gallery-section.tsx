"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/src/lib/utils/cn";
import {
  img2,
  img3,
  img8,
  frame78,
  frame76,
  frame80,
} from "./index-gallery-images";

export default function GallerySection() {
  const t = useTranslations();

  const ImagesGallery = [
    {
      src: img2,
      value: true,
      alt: t("imgs-gift-boxes"),
    },
    {
      src: img3,
      value: false,
      alt: t("imgs-gift-boxes"),
    },
    {
      src: img8,
      value: false,
      alt: t("imgs-gift-boxes"),
    },
    {
      src: frame78,
      value: true,
      alt: t("imgs-gift-boxes"),
    },
    {
      src: frame76,
      value: false,
      alt: t("imgs-gift-boxes"),
    },
    {
      src: frame80,
      value: true,
      alt: t("imgs-gift-boxes"),
    },
  ];

  return (
    <>
      {/* Gallery */}
      <main className="mb-10 mt-10 px-4 py-6">
        <div className="relative mb-7 text-center">
          <h2 className="align-middle text-base font-bold uppercase tracking-[4px] text-softpink-500 dark:text-maroon-400">
            {t("gallery")}
          </h2>
          <div className="relative">
            <p className="relative mb-3 mt-3 inline-block text-4xl font-bold text-maroon-700 dark:text-softpink-200 max-sm:text-base ltr:before:absolute ltr:before:bottom-0 ltr:before:left-0 ltr:before:-z-10 ltr:before:h-1/2 ltr:before:w-[76%] ltr:before:rounded-full ltr:before:bg-softpink-100 ltr:before:content-[''] ltr:after:absolute ltr:after:bottom-0 ltr:after:left-0 ltr:after:h-[3px] ltr:after:w-[30%] ltr:after:bg-softpink-600 ltr:after:content-[''] ltr:before:dark:bg-zinc-700 ltr:after:dark:bg-softpink-500 rtl:before:absolute rtl:before:bottom-0 rtl:before:right-0 rtl:before:-z-10 rtl:before:h-1/2 rtl:before:w-[76%] rtl:before:rounded-full rtl:before:bg-softpink-100 rtl:before:content-[''] rtl:after:absolute rtl:after:bottom-0 rtl:after:right-0 rtl:after:h-[3px] rtl:after:w-[30%] rtl:after:bg-softpink-500 rtl:after:content-[''] rtl:before:dark:bg-zinc-700 rtl:after:dark:bg-softpink-600">
              {t("check-out-gallery")}
            </p>
          </div>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
          {ImagesGallery.map(({ src, value, alt }, i) => (
            <div
              key={i}
              className={cn(
                "relative mb-4 w-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 max-sm:h-[250px]",
                value ? "h-[611px]" : "h-[250px]",
              )}
            >
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

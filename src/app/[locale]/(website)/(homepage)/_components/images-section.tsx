"use client";

import { useFormatter, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  img36,
  img40,
  img41,
  img38,
  img39,
  img37,
} from "./index-gallery-images";

export default function ImagesSection() {
  const t = useTranslations();
  const format = useFormatter();
  const local = useLocale();

  const ImagesTrusted = [
    { src: img36, alt: t("trusted-img-1") },
    { src: img40, alt: t("trusted-img-2") },
    { src: img41, alt: t("trusted-img-3") },
    { src: img38, alt: t("trusted-img-4") },
    { src: img39, alt: t("trusted-img-5") },
    { src: img37, alt: t("trusted-img-6") },
  ];

  return (
    <>
      <main className="mt-28">
        {/* Footer */}
        <div className="mt-10 gap-10 rounded-xl bg-maroon-50 pb-10 pe-6 ps-6 pt-10 dark:bg-zinc-700">
          <h3 className="mb-10 text-center align-middle text-4xl font-bold text-maroon-700 dark:text-softpink-200 max-sm:text-base">
            {t.rich("trusted-by-number", {
              strong: () => (
                <strong className="text-softpink-500 dark:text-maroon-400">
                  {format.number(4500, {
                    style: "decimal",
                    notation: "compact",
                    numberingSystem: local === "ar" ? "arab" : "latn",
                  })}
                </strong>
              ),
            })}
          </h3>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-6">
              {ImagesTrusted.map(({ src, alt }, i) => (
                <div key={i}>
                  <Image
                    src={src}
                    alt={alt}
                    width={146}
                    height={51}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

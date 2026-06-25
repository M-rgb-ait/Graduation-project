"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import boxRibbonImg from "@/public/assets/images/951.png";
import carousel11 from "@/public/assets/all_prend/mobiles.png";
import balloonsImg from "@/public/assets/images/953.png";

export default function AboutSection() {
  const t = useTranslations();
  const local = useLocale();

  return (
    <>
      {/* about */}
      <main className="mt-10">
        <div>
          {/* images */}
          <div className="grid md:grid-cols-2">
            {/* img */}
            <div className="flex items-center justify-center gap-5 max-sm:flex-col">
              <div className="p-3">
                <div className="rotate-[5deg] outline-4 outline-maroon-600 outline-maroon-600 dark:outline-softpink-400 ltr:rounded-bl-[120px] ltr:rounded-br-[120px] ltr:rounded-tl-[50px] ltr:rounded-tr-[120px] rtl:-rotate-[5deg] rtl:rounded-bl-[120px] rtl:rounded-br-[120px] rtl:rounded-tl-[120px] rtl:rounded-tr-[50px]">
                  <Image
                    src={boxRibbonImg}
                    alt={t("img-box-ribbon")}
                    width={302}
                    height={344}
                    className="transform ltr:translate-x-4 ltr:rotate-[-4deg] ltr:rounded-bl-[120px] ltr:rounded-br-[120px] ltr:rounded-tl-[50px] ltr:rounded-tr-[120px] rtl:-translate-x-4 rtl:-rotate-[-5deg] rtl:rounded-bl-[120px] rtl:rounded-br-[120px] rtl:rounded-tl-[120px] rtl:rounded-tr-[50px]"
                  />
                </div>
              </div>
              {/* imgs */}
              <div className="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:gap-4">
                <Image
                  src={carousel11}
                  alt={t("img-red-heard")}
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full"
                />
                <Image
                  src={balloonsImg}
                  alt={t("img-balloons")}
                  width={192}
                  height={144}
                  className="mt-2 h-36 w-48 ltr:rounded-bl-[50px] ltr:rounded-br-[100px] ltr:rounded-tl-[50px] ltr:rounded-tr-[100px] rtl:rounded-bl-[100px] rtl:rounded-br-[50px] rtl:rounded-tl-[100px] rtl:rounded-tr-[50px]"
                />
              </div>
            </div>

            {/* About */}
            <div className="mb-20 mt-20">
              <h2 className="align-middle text-base font-bold uppercase tracking-[4px] text-softpink-500 dark:text-maroon-400 max-md:mt-3 max-md:text-center">
                {t("about")}
              </h2>
              <div>
                <div className="mb-3 mt-6">
                  <h2 className="mb-2 align-middle text-3xl font-bold text-maroon-700 dark:text-softpink-200">
                    {t.rich("delivering-moments", {
                      strong: (value) => (
                        <strong className="text-softpink-500 dark:text-maroon-400">
                          {value}
                        </strong>
                      ),
                    })}
                  </h2>
                  <p className="text-base font-normal text-zinc-500 dark:text-zinc-400">
                    {t("make-message")}
                  </p>
                </div>

                {/* <p>
                  <Link href="/products">
                    <Button
                      asChild
                      className="bg-maroon-600 text-white hover:bg-maroon-500 dark:bg-softpink-200 dark:text-zinc-800"
                    >
                      <p>{t("discover")}</p>
                      {local === "ar" ? (
                        <ArrowLeft
                          width={16}
                          height={16}
                          className="text-maroon-50 dark:text-zinc-800"
                        />
                      ) : (
                        <ArrowRight
                          width={16}
                          height={16}
                          className="text-maroon-50 dark:text-zinc-800"
                        />
                      )}
                    </Button>
                  </Link>
                </p> */}
                <Button
                  // asChild
                  className="bg-maroon-600 text-white hover:bg-maroon-500 dark:bg-softpink-200 dark:text-zinc-800"
                >
                  <Link href="/products">
                    <span className="flex items-center gap-2">
                      {t("discover")}

                      {local === "ar" ? (
                        <ArrowLeft
                          width={16}
                          height={16}
                          className="text-maroon-50 dark:text-zinc-800"
                        />
                      ) : (
                        <ArrowRight
                          width={16}
                          height={16}
                          className="text-maroon-50 dark:text-zinc-800"
                        />
                      )}
                    </span>
                  </Link>
                </Button>

                <div className="mt-2 grid gap-6 md:grid-cols-2">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center text-maroon-700 dark:text-softpink-400">
                      <Check />
                    </div>
                    <div className="text-base font-normal text-zinc-800 dark:text-zinc-50">
                      {t("competitive-shopping")}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center text-maroon-700 dark:text-softpink-400">
                      <Check />
                    </div>
                    <div className="text-base font-normal text-zinc-800 dark:text-zinc-50">
                      {t("premium-quality")}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center text-maroon-700 dark:text-softpink-400">
                      <Check />
                    </div>
                    <div className="text-base font-normal text-zinc-800 dark:text-zinc-50">
                      {t("perfect-occasion")}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center text-maroon-700 dark:text-softpink-400">
                      <Check />
                    </div>
                    <div className="text-base font-normal text-zinc-800 dark:text-zinc-50">
                      {t("fast-delivery")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

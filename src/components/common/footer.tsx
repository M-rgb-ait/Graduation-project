"use client";

import { useFormatter, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import NewsletterSubscribe from "./newsletter-subscibe";
import { FOOTER_NAV_LINKS } from "@/src/lib/constants/navlinks.constant";
import { Link } from "@/src/i18n/navigation";
import homeSectionImg from "@/public/assets/app-logo1.png";

export default function Footer() {
  const t = useTranslations();
  const format = useFormatter();
  const locale = useLocale();

  return (
    <div className="bg-zinc-800 py-10 text-zinc-100 dark:bg-zinc-900">
      <footer className="container flex flex-col md:flex-row gap-10 px-4 md:px-10">
        {/* Logo & App Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative w-40 h-40 md:w-60 md:h-60">
            <Image
              src={homeSectionImg}
              alt="red presents"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-softpink-300">
            {t("rose-ecommerce")}
          </h2>
          <p className="text-sm mt-1">
            {t("copy-rights", {
              year: format.dateTime(new Date(), {
                numberingSystem: locale === "ar" ? "arab" : "latn",
                year: "numeric",
              }),
            })}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1">
          <h3 className="mb-2 text-lg text-softpink-300 text-center md:text-left">
            {t("discover-website")}
          </h3>
          <ul className="flex flex-col items-center md:items-start space-y-1.5 font-medium">
            {FOOTER_NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>{t(link.name)}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Promo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg text-softpink-300 mb-2">
            {t.rich("promo-discount", {
              strong: (chunks) => (
                <span className="text-zinc-100">{chunks}</span>
              ),
              discount: 0.2,
            })}
          </h3>
          <p className="mb-5 text-sm text-zinc-400">
            {t("newsletter-subscribe")}
          </p>
          <NewsletterSubscribe />
        </div>
      </footer>
    </div>
  );
}

// {
//   "version": "0.2.0",
//   "configurations": [
//     {
//       "name": "Next.js: debug server",
//       "type": "node",
//       "request": "launch",
//       "runtimeExecutable": "yarn",
//       "runtimeArgs": ["dev"],
//       "console": "integratedTerminal"
//     },
//     {
//       "name": "Next.js: debug client",
//       "type": "chrome",
//       "request": "launch",
//       "url": "http://localhost:3000",
//       "webRoot": "${workspaceFolder}"
//     }
//   ]
// }
// .vscode/launch.json

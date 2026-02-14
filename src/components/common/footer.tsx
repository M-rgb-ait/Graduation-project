import { useFormatter, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import NewsletterSubscribe from "./newsletter-subscibe";
import { FOOTER_NAV_LINKS } from "@/src/lib/constants/navlinks.constant";
import { Link } from "@/src/i18n/navigation";
import homeSectionImg from "@/public/assets/app-logo1.png";

export default function Footer() {
  // Translations
  const t = useTranslations();
  const format = useFormatter();
  const locale = useLocale();

  return (
    <div className="bg-zinc-800 py-10 text-zinc-100 dark:bg-zinc-900">
      <footer className="container flex gap-8 px-10">
        <div className="text-center">
          {/* App Logo */}
          <div className="relative w-60 h-60">
            <Image
              src={homeSectionImg}
              alt="red presents"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* App Name */}
          <h2 className="mt-4 text-lg font-semibold text-softpink-300">
            {t("rose-ecommerce")}
          </h2>
          {/* Copyrights */}
          <p className="text-sm">
            {" "}
            {t("copy-rights", {
              year: format.dateTime(new Date(), {
                numberingSystem: locale === "ar" ? "arab" : "latn",
                year: "numeric",
              }),
            })}
          </p>
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-lg text-softpink-300">
            {t("discover-website")}
          </h3>
          <ul className="flex-1 space-y-1.5 font-medium">
            {/* Navigation */}
            {FOOTER_NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>{t(link.name)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Discount  */}
          <h3 className="text-lg text-softpink-300">
            {t.rich("promo-discount", {
              strong: (chunks) => (
                <span className="text-zinc-100">{chunks}</span>
              ),
              discount: 0.2,
            })}
          </h3>

          {/* News letter subscribing  */}
          <p className="mb-5 text-sm text-zinc-400">
            {t("newsletter-subscribe")}
          </p>
          <NewsletterSubscribe />
        </div>
      </footer>
    </div>
  );
}

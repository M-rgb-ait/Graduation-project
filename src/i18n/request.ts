import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Static for now, we'll change this later
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    formats: {
      number: {
        // Currency using EGP
        "currency-base": {
          style: "currency",
          currency: "EGP",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        // Currncy using USD and with no fraction digits
        "currency-dollar": {
          style: "currency",
          currency: "USD",
          numberingSystem: locale === "ar" ? "arab" : "latn",
          maximumFractionDigits: 0,
        },
        // Currency using EGP with no fraction digits
        "currency-no-digits": {
          style: "currency",
          currency: "EGP",
          numberingSystem: locale === "ar" ? "arab" : "latn",
          maximumFractionDigits: 0,
        },
        "percentage-base": {
          style: "percent",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        "number-base": {
          style: "decimal",
          maximumFractionDigits: 0,
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
      },
      dateTime: {
        // Date short version-only 2 digits except for the year.
        "date-base-hours": {
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "long",
          year: "numeric",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        // Date longer version
        "date-long": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          dayPeriod: "long",
        },
        // Timer layout
        "timer-min-sec": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          minute: "2-digit",
          second: "2-digit",
        },
      },
      list: {
        "list-base": {
          style: "long",
          type: "conjunction",
        },
      },
    },
  };
});

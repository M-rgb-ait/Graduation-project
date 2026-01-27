"use client";

import { useTranslations } from "next-intl";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Translation
  const t = useTranslations();
  return (
    // Please add styles according to the main "error.tsx" file.
    <main>
      {/* Headline */}
      <h2>{t("error-message")}</h2>

      {/* Description */}
      <p>{error.message}</p>

      {/* Action */}
      <button onClick={() => reset()}>{t("try-again")}</button>
    </main>
  );
}

import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();
  return (
    // Please change styles according to the main "not-found.tsx" page
    <main>
      <h2>{t("not-found")}</h2>
      <p>{t("could-not-find-requested-resource")}</p>
      <Link href="/">{t("return-home")}</Link>
    </main>
  );
}

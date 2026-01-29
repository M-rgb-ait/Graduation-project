"use client";

import { useTranslations } from "next-intl";
import { useDeieteMyAccount } from "../../auth/_hook/use-delete";
import { Button } from "@/src/components/ui/button";
import ToggleLocale from "@/src/components/common/langudg";
import ThemeToggle from "@/src/components/common/them";
import { useUser } from "@/src/components/providers/components/get-user-name";

export default function Home() {
  const { mutate } = useDeieteMyAccount();
  const t = useTranslations();
  const { user } = useUser();

  return (
    <div>
      <header className="flex w-full items-center justify-end gap-2 px-4 py-3">
        <ToggleLocale />
        <ThemeToggle />
      </header>
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
    </div>
  );
}

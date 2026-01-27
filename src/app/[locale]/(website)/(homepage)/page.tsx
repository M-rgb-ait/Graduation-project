"use client";

// import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useDeieteMyAccount } from "../../auth/_hook/use-delete";
import { Button } from "@/src/components/ui/button";

export default function Home() {
  const { mutate } = useDeieteMyAccount();
  // const {} = useQuery({})
  const t = useTranslations();
  return (
    <div>
      <div>{t("hhggghgh")}</div>
      <Button
        className="text-red-800 text-lg font-semibold mt-2"
        onClick={() => mutate()}
      >
        delete my account
      </Button>
    </div>
  );
}

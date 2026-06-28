"use client";

import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FormAddUserAddres from "./form-add-user";

export default function AddUserAddres() {
  const t = useTranslations();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>{t("add-address")}</button>
      </DialogTrigger>

      <DialogContent>
        <FormAddUserAddres />
      </DialogContent>
    </Dialog>
  );
}

"use client";
import { Trash, Trash2 } from "lucide-react";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useRemoveUserAddres from "../hooks/remove-user-addres";
import { useTranslations } from "next-intl";
type props = {
  data: string;
};
export default function DeleteUser({ data }: props) {
  const t = useTranslations();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useRemoveUserAddres();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white dark:bg-softpink-400">
          <Trash2 />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <h2 className="text-xl font-semibold">{t("delete-address")}</h2>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#2E2E300D]">
            <button
              className="rounded-full bg-[#2E2E3026] p-6 shadow-sm"
              aria-label="Delete"
            >
              <Trash className="h-6 w-6 text-black" />
            </button>
          </div>
          <p className="text-lg font-semibold text-[#2E2E30]">
            {t("are-you-sure-you-want-to-delete-this-address")}
          </p>
        </div>
        <DialogDescription>
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button variant="outline" className="w-full">
                {t("cancel")}
              </Button>
            </DialogClose>
            <Button
              onClick={() =>
                mutate(data, {
                  onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ["addresses"] });
                    setOpen(false);
                  },
                })
              }
              disabled={isPending}
              className="flex w-full items-center justify-center gap-2 bg-red-600"
            >
              {isPending ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              ) : (
                t("confirm")
              )}
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

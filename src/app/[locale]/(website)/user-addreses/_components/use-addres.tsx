"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import AddUserAddres from "./add-user-addres";
import GetAllAddressUser from "./get-all-address-user";
import { useQuery } from "@tanstack/react-query";
import { LocationEdit } from "lucide-react";
import { useTranslations } from "next-intl";
import { useUser } from "@/src/components/providers/components/get-user-name";

export default function UseAddres() {
  const t = useTranslations();
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: ["addresses"],
    queryFn: async () => {
      const res = await fetch("/api/user-addresses");

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      return res.json();
    },
    // React Query normally runs queryFn when the component mounts.
    // enabled controls whether the query is allowed to run.
    // If the user is logged in, enabled = true → fetch addresses.
    // If the user is a guest, enabled = false → no request is sent.
    enabled: !!user,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer flex-col items-center">
          <div>
            <h2>{t("deliver-to")}:</h2>

            <div className="mt-2 flex items-center gap-2 text-maroon-700 dark:text-softpink-200">
              <LocationEdit />

              <div>
                {!user ? (
                  <p className="text-base text-zinc-400 dark:text-softpink-300">
                    {t("no-address")}
                  </p>
                ) : isLoading ? (
                  <p>{t("loading")}</p>
                ) : error ? (
                  <p className="text-base text-red-500">
                    {t("something-went-wrong")}
                  </p>
                ) : data?.addresses?.[0]?.city ? (
                  <p className="text-base font-bold">
                    {data.addresses[0].city}
                  </p>
                ) : (
                  <p className="text-base text-zinc-400 dark:text-softpink-300">
                    {t("no-address")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-zinc-800 dark:text-softpink-300">
            {t("my-addresse")}
          </div>

          {user && (
            <div className="rounded-xl bg-maroon-50 p-3 text-base font-medium text-maroon-600">
              <AddUserAddres />
            </div>
          )}
        </div>

        <GetAllAddressUser addresses={data?.addresses || []} />
      </DialogContent>
    </Dialog>
  );
}

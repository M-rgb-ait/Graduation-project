"use client";
import { MapPin, Phone } from "lucide-react";
import { DialogHeader, DialogDescription } from "@/components/ui/dialog";

import DeleteUser from "./delete-user";

import EditButton from "./updata-user-addres";
import { useTranslations } from "next-intl";

type Props = {
  addresses: address[];
};

export default function GetAllAddressUser({ addresses }: Props) {
  const t = useTranslations();
  if (!addresses.length) {
    return (
      <div className="rounded-lg border border-dashed border-zinc-300 p-4 text-center text-sm text-zinc-500">
        {t("no-addresses")}
      </div>
    );
  }
  return (
    <div className="dark:border-softpink-400">
      {addresses.map((address: address) => (
        <DialogHeader key={address._id}>
          <fieldset className="relative rounded-lg border border-gray-300 p-4 dark:border-softpink-400">
            <legend
              dir="rtl"
              className="text-end text-base font-bold text-maroon-600 dark:text-softpink-300"
            >
              {address.username}
            </legend>
            <div className="relative">
              <div className="relatives">
                <div className="absolute end-[-6%] top-[calc(50%-10px)] flex flex-col items-start gap-2">
                  {/* Dialog Delete */}
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-solid border-zinc-400 bg-white text-black dark:border-softpink-400 dark:bg-softpink-400 dark:text-white">
                      <EditButton address={address} />
                    </div>
                  </div>
                  {/* Delete */}
                  <div>
                    <DeleteUser data={address._id} />
                  </div>
                </div>
              </div>
            </div>

            <DialogDescription>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-softpink-400">
                      <MapPin />
                    </div>
                    <p className="text-base font-bold text-zinc-600 dark:text-softpink-300">
                      {address.city}
                    </p>
                  </div>
                  <div className="ml-7">
                    <div className="flex items-center text-sm font-medium text-zinc-600 dark:text-softpink-400 rtl:flex-row-reverse">
                      <Phone className="text-xs" />
                      <h3>
                        <p className="me-6 text-sm font-medium text-zinc-600 dark:text-softpink-400">
                          {address.phone}
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="mt-3 w-fit rounded-full bg-zinc-100 px-3 py-1 dark:bg-softpink-100">
                  <p className="text-xs font-medium text-zinc-800 dark:text-softpink-700">
                    {address.street}
                  </p>
                </div>
              </div>
            </DialogDescription>
          </fieldset>
        </DialogHeader>
      ))}
    </div>
  );
}

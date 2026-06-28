"use client";

import { useUser } from "@/src/components/providers/components/get-user-name";
import { useQueryClient } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import useAddUser from "../hooks/use-add-user";
import useUpdataUser from "../hooks/use-updata-user";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  createUserAddressSchema,
  UserAddressFields,
} from "@/src/lib/schemes/user-addres-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogHeader } from "@/components/ui/dialog";
import StepperProgress from "./slider";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/src/components/ui/button";
import GoogleMapComponent from "./add-map-gogel";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  datas?: address;
  onClose?: () => void;
}
export type Location = {
  lat: number;
  lng: number;
};
export default function FormAddUserAddres({ datas, onClose }: Props) {
  const t = useTranslations();
  const local = useLocale();

  const queryClient = useQueryClient();
  const [step, setStep] = useState<"form" | "map" | "success">("form");
  const { error, isPending, mutate } = useAddUser();
  // Check token
  const { user } = useUser();
  const { Updata, isPending: isUpdating } = useUpdataUser(datas?._id || "");

  const [location, setLocation] = useState<Location | null>(null);

  const form = useForm<UserAddressFields>({
    defaultValues: {
      street: "",
      city: "",
      phone: "",
      lat: "",
      long: "",
      username: user?.firstName ?? "",
    },
    resolver: zodResolver(createUserAddressSchema(t)),
  });

  useEffect(() => {
    if (!datas) return;

    form.reset({
      street: datas.street,
      city: datas.city,
      phone: datas.phone,
      lat: datas.lat,
      long: datas.long,
      username: datas.username,
    });
  }, [datas?._id]);

  useEffect(() => {
    if (datas) {
      const loc = {
        lat: Number(datas.lat),
        lng: Number(datas.long),
      };

      setLocation(loc);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };

        setLocation(loc);
      },
      () => {
        // fallback = cairo
        setLocation({
          lat: 30.0444,
          lng: 31.2357,
        });
      },
    );
  }, [datas]);
  const onSubmit: SubmitHandler<UserAddressFields> = async (values) => {
    const action = datas ? Updata : mutate;

    action(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["addresses"] });
        form.reset({
          street: "",
          city: "",
          phone: "",
          lat: "",
          long: "",
          username: user?.firstName ?? "",
        });
        setStep("success");

        setTimeout(() => {
          onClose?.();
          setStep("form");
        }, 1500);
      },
    });
  };
  const loading = datas ? isUpdating : isPending;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DialogHeader>
          <h3 className="mb-5 mt-1 text-2xl font-bold text-zinc-800 dark:text-softpink-400">
            {" "}
            {datas ? t("update-address") : t("add-address")}
          </h3>
        </DialogHeader>
        {/* Stepper */}
        <StepperProgress step={step === "form" ? 1 : step === "map" ? 2 : 3} />

        <div className="space-y-4">
          {step === "form" ? (
            <>
              <FormLabel className="text-2xl font-medium text-maroon-600 dark:text-softpink-400">
                {t("enter-address-details")}
              </FormLabel>
              <div>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-1 mt-2 text-sm font-semibold text-zinc-800 dark:text-softpink-400">
                        {t("city")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("enter-city-name")}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-1 mt-2 text-sm font-semibold text-zinc-800 dark:text-softpink-400">
                        {t("address")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("enter-your-full-address")}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* phone */}
              <div className="mt-3">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-softpink-400">
                        {t("phone-input")}
                      </FormLabel>
                      <FormControl className="w-full">
                        <PhoneInput
                          placeholder="1012345678"
                          {...field}
                          defaultCountry="EG"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="w-full bg-maroon-700 dark:bg-softpink-400 dark:text-white"
                onClick={async () => {
                  const isValid = await form.trigger([
                    "city",
                    "phone",
                    "street",
                  ]); // run validation manually
                  if (isValid) {
                    setStep("map");
                  }
                }}
              >
                {t("next")}
              </Button>
            </>
          ) : (
            <>
              <Button
                className="border-none"
                variant="outline"
                onClick={() => {
                  setStep("form");
                }}
              >
                <div className="flex items-center gap-3 text-lg">
                  {local === "en" ? (
                    <div className="rounded-full bg-maroon-600 p-2 text-white dark:bg-softpink-400">
                      <CircleArrowLeft width={35} height={35} />
                    </div>
                  ) : (
                    <div className="rounded-full bg-maroon-600 p-2 text-white dark:bg-softpink-400">
                      <CircleArrowRight width={35} height={35} />
                    </div>
                  )}
                  <p className="text-2xl font-medium text-maroon-600 dark:text-softpink-400">
                    {t("find-your-location")}
                  </p>
                </div>
              </Button>
              {/* Map placeholder */}
              <div className="h-100 w-full overflow-hidden rounded-md">
                {location && (
                  <GoogleMapComponent
                    value={location}
                    onChange={(loc) => {
                      setLocation(loc);
                      form.setValue("lat", String(loc.lat));
                      form.setValue("long", String(loc.lng));
                    }}
                  />
                )}
              </div>

              {error && (
                <p className="p-2 text-center text-xl text-red-800">
                  {error.message}
                </p>
              )}
              <div className="flex justify-between">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 bg-red-600 dark:bg-softpink-400"
                >
                  {datas ? t("update-address") : t("add-address")}

                  {loading && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

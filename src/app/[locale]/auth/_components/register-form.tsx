import { useTranslations } from "next-intl";
import { useRegister } from "../_hook/use-register";
import {
  registerFields,
  useRegisterSchema,
} from "@/src/lib/schemes/auth.schemes";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { PhoneInput } from "@/components/ui/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";

import flags from "react-phone-number-input/flags";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Registerform() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  //Translations
  const t = useTranslations();

  //Mutation
  const { mutate, error, isPending } = useRegister();

  //Form & Schema
  const registerSchema = useRegisterSchema();

  const form = useForm<registerFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: undefined,
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<registerFields> = async (values) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col justify-center px-6 py-5 lg:px-8"
      >
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <FormLabel className="mt-3 text-5xl tracking-tight text-maroon-700 dark:text-softpink-300 ltr:font-edwardian rtl:font-diwany">
            {t("become-family")}
          </FormLabel>
        </div>

        <div className="mt-5 border-y border-solid border-zinc-200 dark:border-zinc-600 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-5 flex w-full items-center gap-6 max-sm:flex-col">
            {/* firstName */}
            <div className="w-full max-sm:w-full">
              <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
                {t("first-name")}
              </FormLabel>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder={t("mohamed")}
                        autoComplete="firstName"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/*lastName*/}
            <div className="w-full max-sm:w-full">
              <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
                {t("last-name")}
              </FormLabel>

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder={t("atta")}
                        autoComplete="lastName"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* email */}
          <div className="mt-3">
            <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
              {t("email")}
            </FormLabel>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="Email"
                      {...field}
                      placeholder={t("user-example")}
                      autoComplete="email"
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
                  <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
                    {t("phone-number")}
                  </FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="1012345678"
                      {...field}
                      defaultCountry="EG"
                      flags={flags}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Gender */}
          <div className="mt-3">
            <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
              {t("gender")}
            </FormLabel>

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t("select-gender")} />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="male">{t("male")}</SelectItem>
                      <SelectItem value="female">{t("female")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
                    {t("password")}
                  </FormLabel>

                  <FormControl>
                    <div className="relative w-full">
                      {/* Icon */}
                      {showPassword ? (
                        <EyeOff
                          onClick={() => setShowPassword(false)}
                          className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-400 hover:text-zinc-600"
                          size={20}
                        />
                      ) : (
                        <Eye
                          onClick={() => setShowPassword(true)}
                          className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-600 hover:text-zinc-800"
                          size={20}
                        />
                      )}

                      {/* Input */}
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        autoComplete="new-password"
                        className="pe-12" // padding علشان الأيقونة
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 mt-3">
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
                    {t("confirm-password")}
                  </FormLabel>

                  <FormControl>
                    <div className="relative w-full">
                      {/* Icon */}
                      {showRePassword ? (
                        <EyeOff
                          onClick={() => setShowRePassword(false)}
                          className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-400 hover:text-zinc-600"
                          size={20}
                        />
                      ) : (
                        <Eye
                          onClick={() => setShowRePassword(true)}
                          className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-600 hover:text-zinc-800"
                          size={20}
                        />
                      )}

                      {/* Input */}
                      <Input
                        {...field}
                        type={showRePassword ? "text" : "password"}
                        placeholder="********"
                        autoComplete="new-password"
                        className="pe-12"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* error */}
          {error && (
            <p className="p-2 text-center text-xl text-rose-700">
              {error.message}
            </p>
          )}

          {/* submit */}
          <Button
            className="mb-9 mt-7 w-full"
            // variant="primary"
            type="submit"
            spinner={isPending}
            disabled={
              isPending ||
              (form.formState.isSubmitted && !form.formState.isValid)
            }
          >
            {t("create-account")}
          </Button>
        </div>
        {/* Go to login */}
        <p className="mt-4 text-center text-sm font-bold">
          {t.rich("alreaduy-account", {
            Link: (valus) => (
              <Link
                href="/auth/login"
                className="text-red-700 underline dark:text-pink-300"
              >
                {valus}
              </Link>
            ),
          })}
        </p>
      </form>
    </Form>
  );
}

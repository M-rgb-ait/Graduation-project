"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { EyeOff, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useResetPasswordFlow } from "../_providers/reset-password-flow.provider";
import {
  resetPasswordFields,
  useResetSchema,
} from "@/src/lib/schemes/auth.schemes";
import { useResetPassword } from "../_hook/use-reset-password";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

export default function ResetPasswordForm() {
  // Navigation
  const router = useRouter();

  // Translation
  const t = useTranslations();

  // Context
  const { email } = useResetPasswordFlow();

  // Form functionality
  const form = useForm<resetPasswordFields>({
    defaultValues: {
      email: email!,
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: zodResolver(useResetSchema()),
  });

  // Mutation Hook
  const { resetPasswordMutate, isPending } = useResetPassword();

  // Submit function
  function onSubmit(values: resetPasswordFields) {
    resetPasswordMutate(
      {
        newPassword: values.newPassword,
        email: values.email,
      },
      {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    );
  }

  return (
    <section className="mx-auto flex w-[470px] items-center justify-center">
      {/* Card Component */}
      <Card className="mx-auto w-full max-w-lg border-none bg-transparent shadow-none">
        {/* Header */}
        <CardHeader>
          {/* Title */}
          <CardTitle>
            <h2 className="text-2xl font-semibold dark:text-zinc-50">
              {t("create-a-new-password")}
            </h2>
          </CardTitle>
          <p className="dark:text-zinc-50">
            {t("set-a-strong-password-to-secure-your-account")}
          </p>
        </CardHeader>

        {/* Content */}
        <CardContent>
          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto w-fit space-y-6 border-y border-zinc-200 pb-9 pt-4 dark:border-zinc-600">
                {/* New Password input */}

                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      {/* Label */}
                      <FormLabel className="text-sm font-semibold dark:text-zinc-50">
                        {t("password")}
                      </FormLabel>

                      {/* Field */}
                      <FormControl>
                        <div className="relative">
                          {/* Icon */}
                          <EyeOff
                            className="absolute end-4 top-4 text-zinc-400"
                            size={20}
                          />

                          <Input
                            {...field}
                            type="password"
                            placeholder="******"
                          />
                        </div>
                      </FormControl>

                      {/* Error message */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmNewPassword"
                  render={({ field }) => (
                    <FormItem>
                      {/* Label */}
                      <FormLabel className="text-sm font-semibold dark:text-zinc-50">
                        {t("confirm-password")}
                      </FormLabel>

                      {/* Field */}
                      <FormControl>
                        <div className="relative">
                          {/* Icon */}
                          <EyeOff
                            className="absolute end-4 top-4 text-zinc-400"
                            size={20}
                          />

                          <Input
                            {...field}
                            type="password"
                            placeholder="******"
                          />
                        </div>
                      </FormControl>

                      {/* Error message */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Reset button */}
                <Button
                  spinner={isPending}
                  disabled={isPending}
                  //   type="submit"
                  //   variant={"primary"}
                  className="h-10 w-[406px] rounded-lg py-3"
                >
                  {t("reset-password")}
                </Button>
              </div>
            </form>
          </Form>
          {/* Footer */}
          <CardFooter className="flex items-center justify-center pt-4">
            <p className="text-sm font-medium dark:text-zinc-50">
              {t.rich("need-help-contact", {
                link: (chunk) => (
                  <Link
                    href="/contact-us"
                    className="font-bold text-maroon-700 dark:text-softpink-300"
                  >
                    {chunk}
                  </Link>
                ),
              })}
            </p>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}

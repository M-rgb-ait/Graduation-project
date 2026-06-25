"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Eye, EyeOff, Link } from "lucide-react";
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
import { useState } from "react";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
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

                {/* Password */}
                <div className="mt-3">
                  <FormField
                    control={form.control}
                    name="newPassword"
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
                    name="confirmNewPassword"
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

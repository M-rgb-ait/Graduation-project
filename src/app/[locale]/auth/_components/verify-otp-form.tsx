"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPasswordFlow } from "../_providers/reset-password-flow.provider";
import { useVerifyOtp } from "../_hook/use-verify-otp";
import {
  useVerifyOtpSchema,
  verifyOtpValues,
} from "@/src/lib/schemes/auth.schemes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/ui/input-otp";
import SendNewCode from "./send-new-code";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";

export default function VerifyOtpForm() {
  // Hooks
  const { email, toForgotPassword, toResetPassword } = useResetPasswordFlow();
  const { verifyOtpMutate, isPending } = useVerifyOtp();

  // Translation
  const t = useTranslations();

  // Form Setup
  const form = useForm<verifyOtpValues>({
    resolver: zodResolver(useVerifyOtpSchema()),
    defaultValues: {
      resetCode: "",
    },
  });

  // Form submit
  function onSubmit(values: verifyOtpValues) {
    verifyOtpMutate(values, {
      onSuccess: () => toResetPassword(),
    });
  }

  return (
    <div className="mx-auto flex w-[450px] flex-col items-center text-zinc-800 dark:text-zinc-50">
      {/* Form heading */}
      <header className="self-start">
        <h1 className="mb-1 text-2xl font-semibold">{t("enter-otp")}</h1>

        <p>
          {t.rich("otp-sent-message", {
            email,
            digits: 6,
            edit: (chunk) => (
              <button
                className="font-medium text-blue-700 underline underline-offset-2 dark:text-blue-400"
                onClick={toForgotPassword}
              >
                {chunk}
              </button>
            ),
          })}
        </p>
      </header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-5 flex w-full flex-col items-center gap-6 border-y border-zinc-200 pb-9 pt-11 dark:border-zinc-600"
        >
          {/* OTP Form input */}
          <FormField
            control={form.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem dir="ltr">
                <FormLabel className="sr-only">One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="space-x-[10px]">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <InputOTPSlot key={i} index={i} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Send new code */}
          <SendNewCode />

          {/* Form Submit */}
          <Button spinner={isPending} disabled={isPending} className="w-full">
            {t("verify-otp")}
          </Button>
        </form>
      </Form>

      {/* Contact us */}
      <p className="font-medium">
        {t.rich("need-help-contact", {
          link: (chunk) => (
            <Link
              href="/contact-us"
              className="font-bold text-maroon-700 underline underline-offset-2 dark:text-softpink-300"
            >
              {chunk}
            </Link>
          ),
        })}
      </p>
    </div>
  );
}

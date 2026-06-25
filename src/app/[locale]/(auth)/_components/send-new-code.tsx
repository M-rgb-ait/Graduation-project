"use client";

import { useTranslations } from "next-intl";

import { useResetPasswordFlow } from "../_providers/reset-password-flow.provider";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils/cn";

export default function SendNewCode() {
  // Hooks
  const { timer, resendCode } = useResetPasswordFlow();

  // Translation
  const t = useTranslations();

  return (
    <Button
      type="button"
      disabled={timer !== 0}
      className="mb-4 self-end pe-5 disabled:text-zinc-400 dark:disabled:text-zinc-600"
      variant="empty"
      size="empty"
      onClick={resendCode}
    >
      {t.rich("send-new-code", {
        timer: new Date(timer),
        span: (chunk) => (
          <span className={cn(timer === 0 && "hidden")}>{chunk}</span>
        ),
      })}
    </Button>
  );
}

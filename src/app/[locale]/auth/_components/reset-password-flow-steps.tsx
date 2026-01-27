"use client";

import { useResetPasswordFlow } from "../_providers/reset-password-flow.provider";
import ForgotPasswordForm from "./forgot-password";
import ResetPasswordForm from "./reset-password-form";
import VerifyOtpForm from "./verify-otp-form";

export default function ResetPasswordFlowSteps() {
  // Context
  const { step } = useResetPasswordFlow();

  return (
    <section>
      {step === 1 && <ForgotPasswordForm />}
      {step === 2 && <VerifyOtpForm />}
      {step === 3 && <ResetPasswordForm />}
    </section>
  );
}

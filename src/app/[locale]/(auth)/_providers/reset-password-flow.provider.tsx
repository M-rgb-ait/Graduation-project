"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForgotPassword } from "../_hook/use-forgot-pssword";

// Context Type
type ContextState = {
  email: string;
  setEmail: Dispatch<SetStateAction<ContextState["email"]>>;
  step: number;
  timer: number;
  resendCode: () => void;
  toForgotPassword: () => void;
  toResetPassword: () => void;
  toVerifyOtp: () => void;
};

// Context initial state
const initialState = {
  email: "",
  setEmail: () => {},
  step: 1,
  timer: new Date(0).setMinutes(1),
  resendCode: () => {},
  toForgotPassword: () => {},
  toResetPassword: () => {},
  toVerifyOtp: () => {},
};

const ResetPasswordFlowCtx = createContext<ContextState>(initialState);

export default function ResetPasswordFlowProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hooks
  const [email, setEmail] = useState<ContextState["email"]>(initialState.email);
  const [step, setStep] = useState<ContextState["step"]>(initialState.step);
  const [timer, setTimer] = useState(initialState.timer);

  // Reset the timer to 1 minut
  const resetTimer = useCallback(() => {
    setTimer(new Date(0).setMinutes(1));
  }, []);

  // go to forgot password step
  function toForgotPassword() {
    setStep(1);
    resetTimer();
  }

  // go to verify OTP
  function toVerifyOtp() {
    setStep(2);
  }

  // got to reset password step
  function toResetPassword() {
    setStep(3);
  }
  const { forgotPasswordMutate } = useForgotPassword();
  // Resend the code to use email
  const resendCode = useCallback(() => {
    // Here will be the mutation hook that sends OTP to email
    forgotPasswordMutate({ email });
    resetTimer();
  }, [resetTimer, email, forgotPasswordMutate]);

  // Timer logic
  useEffect(() => {
    let timerInterval: NodeJS.Timeout;

    // Interval only works in on OTP Screen
    if (step === 2) {
      timerInterval = setInterval(() => {
        setTimer((prev) => {
          const currentDate = new Date(prev);

          if (
            currentDate.getMinutes() === 0 &&
            currentDate.getSeconds() === 0
          ) {
            window.clearInterval(timerInterval);
            return 0;
          }

          // update the timer value each second
          return currentDate.setSeconds(currentDate.getSeconds() - 1);
        });
      }, 1000);
    }

    // Clear interval
    return () => window.clearInterval(timerInterval);
  }, [step, resendCode]);

  // Context Value
  const ctxValue = {
    email,
    setEmail,
    step,
    timer,
    resendCode,
    toForgotPassword,
    toResetPassword,
    toVerifyOtp,
  };

  return (
    <ResetPasswordFlowCtx.Provider value={ctxValue}>
      {children}
    </ResetPasswordFlowCtx.Provider>
  );
}

export const useResetPasswordFlow = () => {
  const ctx = useContext(ResetPasswordFlowCtx);

  if (!ctx)
    throw new Error(
      "Reset password flow context was used outside of its provider.",
    );

  return ctx;
};

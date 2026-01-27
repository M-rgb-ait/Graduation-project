import { useTranslations } from "next-intl";
import z from "zod";

export const useRegisterSchema = () => {
  //translations
  const t = useTranslations();

  const REGISTER_SCHEMA = z
    .object({
      firstName: z
        .string()
        .min(1, t("firstname-is-required"))
        .regex(/^(?!\s*$).{2,}$/, t("must-characters")),

      lastName: z
        .string()
        .min(1, t("last-name-is-required"))
        .regex(/^(?!\s*$).{2,}$/, t("must-ar-characters")),

      email: z
        .string()
        .min(1, t("email-is-required"))
        .regex(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, t("email-required")),

      password: z
        .string()
        .min(1, t("password-is-required"))
        .regex(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          t("password-enter"),
        ),

      rePassword: z.string().min(1, t("confirm-password-is-required")),

      gender: z.enum(["male", "female"]).refine(Boolean, {
        message: t("gender-is-required"),
      }),

      phone: z
        .string()
        .min(1, t("phone-number-is-required"))
        .regex(/^\+?[1-9]\d{9,14}$/, t("enter-a-valid-phone-number")),
    })
    .refine((data) => data.password === data.rePassword, {
      message: t("password-is-noy-match"),
      path: ["rePassword"],
    });
  return REGISTER_SCHEMA;
};
export type registerFields = z.infer<ReturnType<typeof useRegisterSchema>>;

export const useLoginSchema = () => {
  //translations
  const t = useTranslations();

  const LOGIN_SCHEMA = z.object({
    email: z
      .string()
      .min(1, t("email-is-required"))
      .regex(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, t("email-required")),

    password: z
      .string()
      .min(1, t("password-is-required"))
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        t("password-enter"),
      ),
  });
  return LOGIN_SCHEMA;
};
export type loginFields = z.infer<ReturnType<typeof useLoginSchema>>;
// Forgot Password Schema
export const useForgotSchema = () => {
  //translations
  const t = useTranslations();

  const FORGET_SCHEMA = z.object({
    email: z
      .string()
      .min(1, t("email-is-required"))
      .regex(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, t("email-required")),
  });
  return FORGET_SCHEMA;
};
export type ForgotPasswordFields = z.infer<ReturnType<typeof useForgotSchema>>;
export const useResetSchema = () => {
  //translations
  const t = useTranslations();

  const RESET_SCHEMA = z
    .object({
      email: z
        .string()
        .min(1, t("email-is-required"))
        .regex(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, t("email-required")),
      newPassword: z
        .string()
        .min(1, t("password-is-required"))
        .regex(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          t("password-enter"),
        ),
      confirmNewPassword: z.string(),
    })
    .refine((values) => values.newPassword === values.confirmNewPassword, {
      message: t("password-is-noy-match"),
      path: ["rePassword"],
    });
  return RESET_SCHEMA;
};
export type resetPasswordFields = z.infer<ReturnType<typeof useResetSchema>>;
// Verify OTP Schema
export const useVerifyOtpSchema = () => {
  //translations
  const t = useTranslations();

  const OTP_SCHEMA = z.object({
    resetCode: z.string().min(
      6,
      t("reset-code-six-digits", {
        digits: 6,
      }),
    ),
  });
  return OTP_SCHEMA;
};
export type verifyOtpValues = z.infer<ReturnType<typeof useVerifyOtpSchema>>;

import { useTranslations } from "next-intl";
import { z } from "zod";

export const createUserAddressSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z.object({
    street: z
      .string()
      .min(1, { message: t("street-must-be-at-least-1-characters") }),

    city: z
      .string()
      .min(1, { message: t("street-must-be-at-least-1-characters") }),

    phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, t("enter-phone-number")),

    lat: z.string().min(1, {
      message: t("you-would-like-to-inform-your-geographical-location"),
    }),

    long: z.string().min(1, {
      message: t("you-would-like-to-inform-your-geographical-location"),
    }),

    username: z
      .string()
      .min(1, { message: t("street-must-be-at-least-1-characters") }),
  });

export type UserAddressFields = z.infer<
  ReturnType<typeof createUserAddressSchema>
>;

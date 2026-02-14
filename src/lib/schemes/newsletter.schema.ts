import z from "zod";
import { useTranslations } from "next-intl";

export const LetterSchema = () => {
  //translations
  const t = useTranslations();

  const LETTER_SCHEMA = z.object({
    email: z
      .string()
      .min(1, t("email-is-required"))
      .regex(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, t("email-required")),
  });
  return LETTER_SCHEMA;
};
export type NewsLetterFormValues = z.infer<ReturnType<typeof LetterSchema>>;

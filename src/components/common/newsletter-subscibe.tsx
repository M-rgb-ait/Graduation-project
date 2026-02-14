"use client";

import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  LetterSchema,
  NewsLetterFormValues,
} from "@/src/lib/schemes/newsletter.schema";
import { useSubscription } from "../hooks/use-subscription";

export default function NewsletterSubscribe() {
  // Translations
  const t = useTranslations();

  // Hooks
  const form = useForm<NewsLetterFormValues>({
    resolver: zodResolver(LetterSchema()),
    defaultValues: {
      email: "",
    },
  });

  // Mutation hook
  const { subscriptionMutate, isSubscribing } = useSubscription();

  // Submit handler
  const onSubmit = async (values: NewsLetterFormValues) => {
    subscriptionMutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="relative w-80">
                {/* Form control email input */}
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="rounded-full border-none bg-zinc-600 py-3 dark:bg-zinc-800"
                    placeholder={t("email-required")}
                    disabled={isSubscribing}
                  />
                </FormControl>

                {/* Submit subscription */}
                <Button
                  spinner={isSubscribing}
                  icon={() => <ArrowRight className="rtl:rotate-180" />}
                  disabled={isSubscribing}
                  variant="brand"
                  className="absolute end-0 top-0 rounded-full"
                >
                  {t("subscribe")}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

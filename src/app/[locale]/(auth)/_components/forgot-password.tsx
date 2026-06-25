import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import {
  ForgotPasswordFields,
  useForgotSchema,
} from "@/src/lib/schemes/auth.schemes";
import { useForgotPassword } from "../_hook/use-forgot-pssword";
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
import { Link } from "@/src/i18n/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useResetPasswordFlow } from "../_providers/reset-password-flow.provider";

export default function ForgotPasswordForm() {
  // Translation
  const t = useTranslations();

  // Form functionality
  const form = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(useForgotSchema()),
  });

  // Mutation Hook
  const { forgotPasswordMutate, isPending } = useForgotPassword();

  // Context
  const { toVerifyOtp, setEmail } = useResetPasswordFlow();

  // Submit function
  function onSubmit(values: ForgotPasswordFields) {
    forgotPasswordMutate(values, {
      onSuccess: () => {
        setEmail(values.email);
        toVerifyOtp();
      },
    });
  }

  return (
    <section className="mx-auto flex w-[470px] items-center justify-center">
      {/* Card Component */}
      <Card className="mx-auto w-full max-w-lg border-none bg-transparent shadow-none">
        {/* Header */}
        <CardHeader>
          {/* Title */}
          <CardTitle>
            <h2 className="text-2xl text-maroon-700 font-semibold dark:text-zinc-50">
              {t("forgot-password")}
            </h2>
          </CardTitle>
          <p className="dark:text-zinc-50 text-softpink-500">
            {t("worry-not")}
          </p>
        </CardHeader>

        {/* Content */}
        <CardContent>
          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto w-fit space-y-6 border-y border-zinc-200 pb-9 pt-4 dark:border-zinc-600">
                {/* Email input */}

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      {/* Label */}
                      <FormLabel className="text-sm font-semibold dark:text-zinc-50">
                        {t("email")}
                      </FormLabel>

                      {/* Field */}
                      <FormControl>
                        <Input {...field} placeholder="user@example.com" />
                      </FormControl>

                      {/* Error message */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Continue button */}
                <Button
                  spinner={isPending}
                  disabled={isPending}
                  //   type="submit"
                  //   variant={"primary"}
                  className="h-10 w-[300px] rounded-lg py-3"
                >
                  {t("continue")}
                </Button>
              </div>
            </form>
          </Form>
          {/* Footer */}
          <CardFooter className="flex items-center justify-center">
            <p className="pt-4 text-sm font-medium dark:text-zinc-50">
              {t("do-not-have-an-account-yet")}{" "}
              <span className="font-bold text-maroon-700 dark:text-pink-300">
                <Link href="/auth/register">{t("create-one-now")}</Link>
              </span>
            </p>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}

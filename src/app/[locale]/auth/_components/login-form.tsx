import { useTranslations } from "next-intl";
import { loginFields, useLoginSchema } from "@/src/lib/schemes/auth.schemes";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import useLogin from "../_hook/use-login";
import { Link } from "@/src/i18n/navigation";

export default function Loginform() {
  const [showNewPassword, setShowNewPassword] = useState(true);

  //Translations
  const t = useTranslations();

  //Mutation
  const { mutate, error, isPending } = useLogin();

  //Form & Schema
  const loginSchema = useLoginSchema();

  const form = useForm<loginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<loginFields> = async (values) => {
    mutate(values);
  };
  //     const onSubmit: SubmitHandler<loginFields> = async ({email,password}) => {
  //     mutate({email,password});
  //   };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col justify-center px-6 py-5 lg:px-8"
      >
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <FormLabel className="mt-3 text-5xl tracking-tight text-maroon-700 dark:text-softpink-300 ltr:font-edwardian rtl:font-diwany">
            {t("become-family")}
          </FormLabel>
        </div>

        <div className="mt-5 border-y border-solid border-zinc-200 dark:border-zinc-600 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* email */}
          <div className="mt-3">
            <FormLabel className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
              {t("email")}
            </FormLabel>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="Email"
                      {...field}
                      placeholder={t("user-example")}
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            {/* New Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="my-6">
                  {/* Label */}
                  <FormLabel className="mt-6 text-sm font-medium text-zinc-800 dark:text-zinc-50">
                    {t("password")}
                  </FormLabel>
                  {/* Field */}
                  <FormControl className="">
                    <div className="relative w-full">
                      {showNewPassword ? (
                        <EyeOff
                          onClick={() => setShowNewPassword(false)}
                          className="absolute end-4 top-4 text-zinc-400"
                          size={20}
                        />
                      ) : (
                        <Eye
                          onClick={() => setShowNewPassword(true)}
                          className="absolute end-4 top-4 text-zinc-700"
                          size={20}
                        />
                      )}
                      <Input
                        className="col-span-9 w-full text-zinc-800"
                        {...field}
                        type={showNewPassword ? "text" : "password"}
                        placeholder="********"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {/* Forgot password */}
          <div className="mt-2 text-end">
            <Link
              href="/auth/forgot"
              className="text-rose-700 dark:text-pink-300"
            >
              {t("forgot-password")}
            </Link>
          </div>

          {/* error */}
          {error && (
            <p className="p-2 text-center text-xl text-rose-700">
              {error.message}
            </p>
          )}

          {/* submit */}
          <Button
            className="mb-9 mt-7 w-full"
            // variant="primary"
            type="submit"
            spinner={isPending}
            disabled={
              isPending ||
              (form.formState.isSubmitted && !form.formState.isValid)
            }
          >
            {t("login-in")}
          </Button>
        </div>
      </form>
    </Form>
  );
}

import { useMutation } from "@tanstack/react-query";
import LoginAction from "../_actions/login.action";
import { toast } from "sonner";
// import { useRouter } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

export default function useLogin() {
  //Translations
  const t = useTranslations();
  // const router = useRouter();
  const { error, isPending, mutate } = useMutation({
    mutationFn: LoginAction,
    onSuccess: () => {
      toast.success(t("success-login"));
      setTimeout(() => {
        window.location.href = "/en";
        // router.refresh(); // مهم جدًا لتحديث Session / Cookies
        // router.push("/"); // window.location.href = "/";
      }, 3000);
    },
  });
  return { error, isPending, mutate };
}

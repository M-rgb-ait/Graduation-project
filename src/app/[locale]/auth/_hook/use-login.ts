import { useMutation } from "@tanstack/react-query";
import LoginAction from "../_actions/login.action";
import { toast } from "sonner";
// import { useRouter } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { useUser } from "@/src/components/providers/components/get-user-name";

export default function useLogin() {
  const { setUser } = useUser();

  //Translations
  const t = useTranslations();
  // const router = useRouter();
  const { error, isPending, mutate } = useMutation({
    mutationFn: LoginAction,
    onSuccess: (data) => {
      if ("user" in data && data.user) setUser(data.user);

      toast.success(t("success-login"));
      setTimeout(() => {
        window.location.href = "/en";
        // router.refresh();
        // router.push("/");
      }, 3000);
    },
  });
  return { error, isPending, mutate };
}

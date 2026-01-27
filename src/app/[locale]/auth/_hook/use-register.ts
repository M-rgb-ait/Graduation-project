import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import RegisterAction from "../_actions/register.action";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const useRegister = () => {
  //Translations
  const t = useTranslations();

  //navigation
  const router = useRouter();
  const { mutate, isPending, error } = useMutation({
    mutationFn: RegisterAction,
    onSuccess: () => {
      toast.success(t("success-create-account"));
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    },
  });

  return { mutate, error, isPending };
};

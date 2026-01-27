import { useMutation } from "@tanstack/react-query";
import { DeleteMeAction } from "../_actions/delete.action";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export const useDeieteMyAccount = () => {
  const t = useTranslations();

  const { mutate, isPending } = useMutation({
    mutationFn: DeleteMeAction,
    onSuccess: () => {
      setTimeout(() => {
        window.location.href = "/en/auth/login";
      }, 3000);
      toast.success(t("delelt-success"));
    },
  });

  return { mutate, isPending };
};

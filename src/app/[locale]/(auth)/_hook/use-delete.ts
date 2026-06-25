import { useMutation } from "@tanstack/react-query";
import { DeleteMeAction } from "../_actions/delete.action";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useUser } from "@/src/components/providers/components/get-user-name";
export const useDeieteMyAccount = () => {
  const { setUser } = useUser();
  const t = useTranslations();

  const { mutate, isPending } = useMutation({
    mutationFn: DeleteMeAction,
    onSuccess: () => {
      setUser(null);
      setTimeout(() => {
        window.location.href = "/en/login";
      }, 3000);
      toast.success(t("delelt-success"));
    },
  });

  return { mutate, isPending };
};

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import RemoveUserAddres from "../actions/remove-user.action";

export default function useRemoveUserAddres() {
  const t = useTranslations();
  const { mutate, isPending } = useMutation({
    mutationFn: RemoveUserAddres,
    onSuccess: () => {
      toast.success(t("success-remove"));
    },
    onError: () => {
      toast.error(t("error-remove"));
    },
  });
  return { mutate, isPending };
}

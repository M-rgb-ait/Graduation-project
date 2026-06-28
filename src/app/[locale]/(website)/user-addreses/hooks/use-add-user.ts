import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { useTranslations } from "next-intl";
import AddUser from "../actions/add-user.action";
import { UserAddressFields } from "@/src/lib/schemes/user-addres-schema";

export default function useAddUser() {
  const t = useTranslations();

  const { error, mutate, isPending } = useMutation({
    mutationFn: async (values: UserAddressFields) => {
      const payload = await AddUser(values);
      return payload;
    },
    onSuccess: () => {
      toast.success(t("success-add"));
    },
    onError: () => {
      toast.error(t("error-add"));
    },
  });
  return { error, mutate, isPending };
}

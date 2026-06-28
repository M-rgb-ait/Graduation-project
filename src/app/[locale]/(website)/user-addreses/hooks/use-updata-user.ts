import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import UpdataUser from "../actions/updtat-user-addres";
import { useTranslations } from "next-intl";
import { UserAddressFields } from "@/src/lib/schemes/user-addres-schema";

export default function useUpdataUser(id: string) {
  const t = useTranslations();

  const { error, mutate, isPending } = useMutation({
    mutationFn: async (values: UserAddressFields) => {
      const payload = await UpdataUser(values, id);
      return payload;
    },
    onSuccess: () => {
      toast.success("t('success-updata')");
    },
    onError: () => {
      toast.error(t("error-updata"));
    },
  });
  return { error, isPending, Updata: mutate };
}

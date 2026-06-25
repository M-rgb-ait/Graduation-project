import { toast } from "sonner";
import { resetPasswordAction } from "../_actions/resertPassword.action";
import { useMutation } from "@tanstack/react-query";

export const useResetPassword = () => {
  const { mutate: resetPasswordMutate, isPending } = useMutation({
    mutationFn: resetPasswordAction,
    onSuccess: (payload) => {
      toast.success(payload.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { resetPasswordMutate, isPending };
};

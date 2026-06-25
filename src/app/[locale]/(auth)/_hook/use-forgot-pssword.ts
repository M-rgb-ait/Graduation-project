import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordAction } from "../_actions/forgot-password";

export const useForgotPassword = () => {
  const { mutate: forgotPasswordMutate, isPending } = useMutation({
    mutationFn: forgotPasswordAction,
    onSuccess: (payload) => {
      toast.success(payload.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { forgotPasswordMutate, isPending };
};

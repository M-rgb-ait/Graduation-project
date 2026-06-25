import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { verifyOtp } from "../_actions/verify-otp.action";

export const useVerifyOtp = () => {
  const { mutate: verifyOtpMutate, isPending } = useMutation({
    mutationFn: verifyOtp,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { verifyOtpMutate, isPending };
};

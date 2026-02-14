"use client";

import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { subscription } from "@/src/lib/actions/subscription.actions";

export const useSubscription = () => {
  const { mutate: subscriptionMutate, isPending: isSubscribing } = useMutation({
    mutationFn: subscription,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { subscriptionMutate, isSubscribing };
};

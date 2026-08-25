import { useMutation, useQueryClient } from "@tanstack/react-query";
import removeNotificatinId from "../actions/remove-notification";
import { toast } from "sonner";

export const useRemoveNotification = () => {
  const queryClient = useQueryClient();

  const {
    mutate: RemoveNotification,
    isPending: isRemove,
    variables,
  } = useMutation({
    mutationFn: removeNotificatinId,

    onSuccess: () => {
      toast.success("Delete successfully");

      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });
    },

    onError: () => {
      toast.error("Error delete");
    },
  });

  return { RemoveNotification, isRemove, variables };
};
// variables prived in spacefc id in looding

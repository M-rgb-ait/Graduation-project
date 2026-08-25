import { useMutation, useQueryClient } from "@tanstack/react-query";
import readNotificatinId from "../actions/read-notification";

export default function useReadNotification() {
  const queryClient = useQueryClient();

  const { mutate: readNotification } = useMutation({
    mutationFn: ({ id, value }: { id: string; value: { isRead: boolean } }) =>
      readNotificatinId(id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });
    },
  });

  return { readNotification };
}
// mutationFn:readNotificatinId(),

import { useMutation } from "@tanstack/react-query";
import ApiPhoto from "../action/photo";

export default function usePhoto() {
  const { isPending, mutate } = useMutation({
    mutationKey: ["photo"],
    mutationFn: ApiPhoto,
  });

  return {
    isPending,
    PhotoMutation: mutate,
  };
}

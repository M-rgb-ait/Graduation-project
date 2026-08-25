// hooks/use-update-profile.ts

import { useMutation } from "@tanstack/react-query";
import updateProfile from "../action/profile";

export default function useUpdateProfile() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: updateProfile,
  });

  return {
    updateProfile: mutate,
    isPending,
  };
}

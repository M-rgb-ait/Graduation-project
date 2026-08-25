"use client";

import Image from "next/image";
import { useUser } from "@/src/components/providers/components/get-user-name";
import usePhoto from "../hook/use-photo";
import useUpdateProfile from "../hook/use-profile";

export default function UploadPhoto() {
  const { PhotoMutation } = usePhoto();
  const { updateProfile } = useUpdateProfile();
  const { user, setUser } = useUser();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    PhotoMutation(formData, {
      onSuccess: (uploadData) => {
        const photoUrl = uploadData.payload.url;

        updateProfile(
          { photo: photoUrl },
          {
            onSuccess: (profileData) => {
              console.log("UPDATED USER", profileData.payload.user);

              setUser(profileData.payload.user);
            },
          },
        );
      },
    });
  };
  return (
    <div className="relative inline-block">
      {user?.photo && (
        <div className="relative h-24 w-24">
          <Image
            src={user.photo}
            alt="Profile"
            fill
            className="rounded-full border-4 border-white object-cover"
          />
        </div>
      )}

      <label
        htmlFor="photo"
        className="absolute bottom-1 right-1 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-green-600 text-white shadow-lg ring-2 ring-white"
      >
        +
      </label>

      <input
        id="photo"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
}

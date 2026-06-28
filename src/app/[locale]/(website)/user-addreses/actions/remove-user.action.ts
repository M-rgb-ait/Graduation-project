"use server";

import { JSON_HEADER } from "@/src/lib/constants/api.constant";
import { getAuthHeader } from "@/src/lib/utils/auth-header";

export default async function RemoveUserAddres(id: string) {
  const { token } = await getAuthHeader();

  try {
    const respons = await fetch(
      `https://flower.elevateegy.com/api/v1/addresses/${id}`,
      {
        method: "DELETE",
        headers: {
          ...JSON_HEADER,
          Authorization: `Bearer ${token} `,
        },
      },
    );
    const payload = respons.json();
    return payload;
  } catch (error) {
    throw error;
  }
}

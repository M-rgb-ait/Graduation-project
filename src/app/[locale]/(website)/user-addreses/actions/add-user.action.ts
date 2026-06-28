"use server";

import { JSON_HEADER } from "@/src/lib/constants/api.constant";
import { UserAddressFields } from "@/src/lib/schemes/user-addres-schema";
import { getAuthHeader } from "@/src/lib/utils/auth-header";

export default async function AddUser(values: UserAddressFields) {
  const { token } = await getAuthHeader();

  try {
    const respons = await fetch(`${process.env.API}/addresses`, {
      method: "PATCH",
      body: JSON.stringify(values),
      headers: {
        ...JSON_HEADER,
        Authorization: `Bearer ${token} `,
      },
    });
    const payload: APIResponse<address> = await respons.json();

    return payload;
  } catch (error) {
    throw error;
  }
}

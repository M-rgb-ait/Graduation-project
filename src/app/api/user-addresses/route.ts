import { JSON_HEADER } from "@/src/lib/constants/api.constant";
import { getAuthHeader } from "@/src/lib/utils/auth-header";
import { NextResponse } from "next/server";

export async function GET() {
  const { token } = await getAuthHeader();
  const res = await fetch(`${process.env.API}/addresses`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}

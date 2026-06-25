import { NextResponse } from "next/server";
import { JSON_HEADER } from "@/src/lib/constants/api.constant";
import { getAuthHeader } from "@/src/lib/utils/auth-header";

export async function GET() {
  try {
    const { token } = await getAuthHeader();

    const res = await fetch(`${process.env.API}/wishlist`, {
      headers: {
        ...JSON_HEADER,
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    return NextResponse.json(data, {
      status: res.status,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

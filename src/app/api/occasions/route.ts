import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  const res = await fetch(`${process.env.API}/occasions?limit=6&page=${page}`);

  const payload = await res.json();

  return NextResponse.json(payload);
}

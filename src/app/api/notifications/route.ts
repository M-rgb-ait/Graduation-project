import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page") ?? "1";

  const response = await fetch(
    `https://rose-app.elevate-bootcamp.cloud/api/notifications?page=${page}&limit=20`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3YzYxMmNkMS01MjI2LTQwMzUtYjI0MS1hMWNjNGQ1MzhhZmQiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc4NzY1NDYxNiwiZXhwIjoxNzg4MjU5NDE2fQ.FHpAq6SfTpnOVV3PR_Ny3HdPaOUOqRsr8X4o0Sz3ajE`,
      },
    },
  );

  const data = await response.json();

  return NextResponse.json(data.payload);
}

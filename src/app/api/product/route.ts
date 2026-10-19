// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const response = await fetch(`${process.env.API}/products?limit=9`);

//     if (!response.ok) {
//       return NextResponse.json(
//         { error: "Failed to fetch products" },
//         { status: response.status },
//       );
//     }

//     const data = await response.json();

//     return NextResponse.json(data);
//   } catch {
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 },
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const search = searchParams.get("search")?.trim() ?? "";
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const limit = Math.min(
      50,
      Math.max(1, Number(searchParams.get("limit")) || 5),
    );

    if (!search) {
      return NextResponse.json({ products: [] });
    }

    const params = new URLSearchParams({
      search,
      page: String(page),
      limit: String(limit),
    });

    const response = await fetch(
      `${process.env.API}/products?${params.toString()}`,
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch products" },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

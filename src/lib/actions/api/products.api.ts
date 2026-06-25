import { searchParamsToString } from "../../utils/handle-search-params";

/**
 * Fetches a list of products according to the given search parameters
 * @param {SearchParams} searchParams
 * @returns {Promise<{ products: Product[], metadata: ProductsMetadata }>} Products and metadata
 * @throws {Error} If the request fails
 */
export async function getProducts(searchParams: SearchParams) {
  const response = await fetch(
    `${process.env.API}/products?${searchParamsToString(searchParams)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const data: APIResponse<PaginatedResponse<ProductsResponse>> =
    await response.json();

  if ("error" in data) {
    throw new Error(data.error);
  }

  return {
    products: data.products,
    metadata: data.metadata,
  };
}
export async function fetchProductById(id: string) {
  const response = await fetch(`${process.env.API}/products/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch product");
  const data = await response.json();
  return data.product;
}
// export async function getProducts(searchParams: SearchParams) {
//   const response = await fetch(
//     `${process.env.API}/products?${searchParamsToString(searchParams)}`,
//     { cache: "no-store" },
//   );

//   if (!response.ok) {
//     throw new Error(`Failed to fetch products: ${response.statusText}`);
//   }

//   const data: {
//     status: boolean;
//     code: number;
//     payload: {
//       data: Product[];
//       metadata: {
//         page: number;
//         limit: number;
//         total: number;
//         totalPages: number;
//       };
//     };
//   } = await response.json();

//   if (!data.status) {
//     throw new Error("Failed to fetch products");
//   }

//   return {
//     products: data.payload.data ?? [],
//     metadata: data.payload.metadata ?? {},
//   };
// }

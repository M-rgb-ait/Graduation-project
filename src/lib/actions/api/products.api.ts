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

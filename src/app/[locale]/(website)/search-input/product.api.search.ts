// export async function getProductsSearch() {
//   const response = await fetch("/api/product");

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return response.json();
// }

export async function getProductsSearch(search: string, page = 1, limit = 5) {
  const params = new URLSearchParams({
    search,
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(`/api/product?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();

  return data;
}

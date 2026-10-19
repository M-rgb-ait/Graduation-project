// import { useQuery } from "@tanstack/react-query";
// import { getProductsSearch } from "./product.api.search";

// export const useProduct = () => {
//   const {
//     data: Allproducts,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["products"],
//     queryFn: getProductsSearch,
//   });

//   return { Allproducts, isLoading, error };
// };

import { useQuery } from "@tanstack/react-query";
import { getProductsSearch } from "./product.api.search";

export const useProduct = (search: string, page = 1, limit = 5) => {
  const {
    data: Allproducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products-search", search, page, limit],
    queryFn: () => getProductsSearch(search, page, limit),
    enabled: search.trim().length > 0,
    staleTime: 60_000,
  });

  return { Allproducts, isLoading, error };
};

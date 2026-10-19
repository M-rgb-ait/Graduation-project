"use client";

import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import { useProduct } from "@/src/app/[locale]/(website)/search-input/product-get";
import { useSearchParams } from "next/navigation";
import PaginationComponent from "@/src/components/common/pagination";

type SearchResultsProps = {
  search: string;
};

export default function SearchResults({ search }: SearchResultsProps) {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 5;

  const { Allproducts, isLoading, error } = useProduct(
    search.trim(),
    currentPage,
    limit,
  );

  const products = Allproducts?.products ?? [];
  const metadata = Allproducts?.metadata;

  if (!search.trim()) {
    return <p>Enter a product name to search.</p>;
  }

  if (isLoading) return <p>Loading products...</p>;

  if (error) return <p>Failed to load products.</p>;

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Search results for: {search}</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <Link
              key={product._id}
              href={`/products/${product._id}`}
              className="rounded-lg border p-4 transition hover:shadow-md"
            >
              <Image
                src={product.imgCover}
                alt={product.title}
                width={300}
                height={200}
                className="h-40 w-full rounded-md object-cover"
              />

              <h2 className="mt-3 font-semibold">{product.title}</h2>
              <p className="mt-1">{product.price}</p>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {metadata?.totalPages > 1 && <PaginationComponent metaData={metadata} />}
    </div>
  );
}

// ("use client");

// import Image from "next/image";
// import { Link } from "@/src/i18n/navigation";
// import { useProduct } from "@/src/app/[locale]/(website)/search-input/product-get";

// type SearchResultsProps = {
//   search: string;
// };

// export default function SearchResults({ search }: SearchResultsProps) {
//   const { Allproducts, isLoading, error } = useProduct();

//   const query = search.trim().toLowerCase();

//   const products = (Allproducts?.products ?? []).filter((product: Product) =>
//     product.title.toLowerCase().includes(query),
//   );

//   if (isLoading) return <p>Loading products...</p>;

//   if (error) return <p>Failed to load products.</p>;

//   return (
//     <div>
//       <h1 className="mb-4 text-xl font-semibold">
//         Search results for: {search}
//       </h1>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {products.length > 0 ? (
//           products.map((product: Product) => (
//             <Link
//               key={product._id}
//               href={`/products/${product._id}`}
//               className="rounded-lg border p-4 transition hover:shadow-md"
//             >
//               <Image
//                 src={product.imgCover}
//                 alt={product.title}
//                 width={300}
//                 height={200}
//                 className="h-40 w-full rounded-md object-cover"
//               />

//               <h2 className="mt-3 font-semibold">{product.title}</h2>
//               <p className="mt-1">{product.price}</p>
//             </Link>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

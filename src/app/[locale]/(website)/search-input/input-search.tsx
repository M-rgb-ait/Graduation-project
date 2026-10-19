// "use client";

// import { useTranslations } from "next-intl";
// import { Input } from "../../../../components/ui/input";
// import { useProduct } from "@/src/app/[locale]/(website)/search-input/product-get";
// import Image from "next/image";
// import { useState } from "react";
// import HighlightText from "./HighlightText";
// import { Link, useRouter } from "@/src/i18n/navigation";

// export default function InputSearch() {
//   const router = useRouter();
//   const t = useTranslations();
//   const [search, setSearch] = useState("");

//   const { Allproducts, isLoading } = useProduct();

//   const productsAll = (Allproducts?.products ?? []).filter((product: Product) =>
//     product.title.toLowerCase().includes(search.toLowerCase()),
//   );
//   // console.log("productsAll", productsAll); // 7 products
//   return (
//     <div className="relative w-full">
//       <Input
//         placeholder={t("gift-looking-for")}
//         type="search"
//         className="w-full"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {search.trim() !== "" && (
//         <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white shadow-lg">
//           {isLoading ? (
//             <li className="p-3">Loading...</li>
//           ) : productsAll.length > 0 ? (
//             <>
//               {productsAll.slice(0, 3).map((product: Product) => (
//                 <li key={product._id}>
//                   <Link
//                     href={`/products/${product._id}`}
//                     className="flex items-center gap-3 p-3 hover:bg-gray-100"
//                   >
//                     <Image
//                       src={product.imgCover}
//                       alt={product.title}
//                       width={40}
//                       height={40}
//                       className="rounded object-cover"
//                     />

//                     <div>
//                       <p>
//                         <HighlightText text={product.title} search={search} />
//                       </p>
//                       <p>{product.price}</p>
//                     </div>
//                   </Link>
//                 </li>
//               ))}

//               {productsAll.length > 3 && (
//                 <li className="border-t p-3 text-center">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       router.push(
//                         `/search-input?query=${encodeURIComponent(search.trim())}`,
//                       )
//                     }
//                     className="font-medium text-blue-600 hover:underline"
//                   >
//                     View all results ({productsAll.length})
//                   </button>
//                 </li>
//               )}
//             </>
//           ) : (
//             <li className="p-3">No products found</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }

"use client";

import { useTranslations } from "next-intl";
import { Input } from "../../../../components/ui/input";
import { useProduct } from "@/src/app/[locale]/(website)/search-input/product-get";
import Image from "next/image";
import { useState } from "react";
import HighlightText from "./HighlightText";
import { Link, useRouter } from "@/src/i18n/navigation";
import { useDebounce } from "./useDebounce";

export default function InputSearch() {
  const router = useRouter();
  const t = useTranslations();
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search.trim(), 500);

  const { Allproducts, isLoading, error } = useProduct(debouncedSearch);

  const productsAll = Allproducts?.products ?? [];

  return (
    <div className="relative w-full">
      <Input
        placeholder={t("gift-looking-for")}
        type="search"
        className="w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {debouncedSearch !== "" && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white shadow-lg">
          {isLoading ? (
            <li className="p-3">Loading...</li>
          ) : error ? (
            <li className="p-3">Failed to load products</li>
          ) : productsAll.length > 0 ? (
            <>
              {productsAll.slice(0, 3).map((product: Product) => (
                <li key={product._id}>
                  <Link
                    href={`/products/${product._id}`}
                    className="flex items-center gap-3 p-3 hover:bg-gray-100"
                  >
                    <Image
                      src={product.imgCover}
                      alt={product.title}
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />

                    <div>
                      <p>
                        <HighlightText
                          text={product.title}
                          search={debouncedSearch}
                        />
                      </p>
                      <p>{product.price}</p>
                    </div>
                  </Link>
                </li>
              ))}

              {productsAll.length > 3 && (
                <li className="border-t p-3 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      router.push(
                        `/search-input?query=${encodeURIComponent(debouncedSearch)}&page=1&limit=5`,
                      )
                    }
                    className="font-medium text-blue-600 hover:underline"
                  >
                    View all results ({productsAll.length})
                  </button>
                </li>
              )}
            </>
          ) : (
            <li className="p-3">No products found</li>
          )}
        </ul>
      )}
    </div>
  );
}

// "use client";

// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import { useProduct } from "./product-get";
// import { Input } from "@/src/components/ui/input";
// import HighlightText from "./HighlightText";

// type SearchForm = {
//   search: string;
// };

// export default function InputSearch() {
//   const t = useTranslations();

//   const { register, watch } = useForm<SearchForm>({
//     defaultValues: {
//       search: "",
//     },
//   });

//   const search = watch("search");
//   const { Allproducts, isLoading } = useProduct();

//   const productsAll = (Allproducts?.products ?? []).filter(
//     (product: { title: string }) =>
//       product.title.toLowerCase().includes(search.trim().toLowerCase()),
//   );

//   return (
//     <div className="relative w-full">
//       <Input
//         {...register("search")}
//         placeholder={t("gift-looking-for")}
//         type="search"
//         className="w-full"
//       />

//       {search.trim() !== "" && (
//         <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white shadow-lg">
//           {isLoading ? (
//             <li className="p-3">Loading...</li>
//           ) : productsAll.length > 0 ? (
//             productsAll.map(
//               (product: {
//                 id: string;
//                 imgCover: string;
//                 title: string;
//                 price: number;
//               }) => (
//                 <li
//                   key={product.id}
//                   className="flex items-center gap-3 p-3 hover:bg-gray-100"
//                 >
//                   <Image
//                     src={product.imgCover}
//                     alt={product.title}
//                     width={40}
//                     height={40}
//                     className="rounded object-cover"
//                   />

//                   <p>
//                     <HighlightText
//                       text={product.title}
//                       search={search.trim()}
//                     />
//                   </p>

//                   <span>{product.price}</span>
//                 </li>
//               ),
//             )
//           ) : (
//             <li className="p-3">No products found</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }

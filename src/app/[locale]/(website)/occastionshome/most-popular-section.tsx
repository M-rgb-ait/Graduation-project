"use client";
import { useSearchParams } from "next/navigation";
// import GetAllOccastions from "./_api/get-all-name";
// const prodect = GetAllOccastions();
// console.log("prodect", prodect);
import useOccasion from "./hook/use-occasion";
import { Link, usePathname, useRouter } from "@/src/i18n/navigation";
import ProductItem from "@/src/components/skeletons/features/Product-item/Product-item";
import { useEffect } from "react";
type occasionNavProps = {
  products: Product[];
  currentOccasionId?: string;
};

export default function MostPopular({
  products,
  currentOccasionId,
}: occasionNavProps) {
  const { isPending, data } = useOccasion();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  // Variables
  // const getSearchParam = (key: string) => searchParams.get(key);
  useEffect(() => {
    const selectedOccasion = searchParams.get("occasion");

    if (!selectedOccasion && data?.occasions && data.occasions.length > 0) {
      const params = new URLSearchParams(searchParams.toString());

      params.set("occasion", data.occasions[0]._id);

      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    }
  }, [data, searchParams, pathname, router]);
  const hendekClick = (occasionId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("occasion", occasionId);
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  //   const partData = [];
  // for (let i = 0; i < products.length && i < 4; i++) {
  //   partData.push(products[i]);
  // }

  const partData = products.slice(0, 4);
  return (
    <div>
      <div className="p-2">
        {isPending && <div>Loading......</div>}
        <div className="p-2 flex flex-row gap-2">
          {data?.occasions.map((o: occasions) => (
            <div
              key={o._id}
              className={`p-2 rounded-md cursor-pointer transition 
                ${
                  currentOccasionId === o._id
                    ? " text-red-600 font-bold"
                    : " text-black"
                }`}
              onClick={() => hendekClick(o._id)}
            >
              {o.name}
            </div>
          ))}
        </div>
      </div>
      <div className="my-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {partData?.length === 0 ? (
          <p className="text-center font-medium text-red-600 lg:col-span-4">
            no prodect found
          </p>
        ) : (
          partData?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
      {partData?.length >= 4 && (
        <p className="text-right font-medium text-red-600 lg:col-span-4">
          <Link href="/occasions">View More</Link>
        </p>
      )}
    </div>
  );
}

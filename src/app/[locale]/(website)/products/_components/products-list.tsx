import PaginationComponent from "@/src/components/common/pagination";
import ProductItem from "@/src/components/skeletons/features/Product-item/Product-item";
import ProductsListSkeleton from "@/src/components/skeletons/features/products/products-list.skeleton";
import { Link } from "@/src/i18n/navigation";
import { getProducts } from "@/src/lib/actions/api/products.api";
import { Suspense } from "react";

export default async function ProductsList({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Fetch data
  const { products, metadata } = await getProducts(searchParams);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3">
        <Suspense fallback={<ProductsListSkeleton />}>
          {products.map((item: Product) => (
            <Link href={`/products/${item._id}`} key={item._id}>
              <ProductItem product={item} />
            </Link>
          ))}
        </Suspense>
      </div>

      <PaginationComponent metaData={metadata} />
    </div>
  );
}

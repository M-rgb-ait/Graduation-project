import ProductSkeleton from "./product-item.skeleton";

export default function ProductsListSkeleton() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3">
      {[...Array(8)].map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}

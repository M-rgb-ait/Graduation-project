import ProductsList from "./_components/products-list";
import Sidebar from "./_components/sidebar";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="container grid grid-cols-[18rem_1fr] gap-12">
      {/* Filters */}
      <Sidebar />

      {/* Products */}
      <main className="mb-10 p-10">
        <ProductsList searchParams={resolvedSearchParams} />
      </main>
    </div>
  );
}

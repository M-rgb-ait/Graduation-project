import ProductsList from "./_components/products-list";
import Sidebar from "./_components/sidebar";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="container flex flex-col md:grid md:grid-cols-[18rem_1fr] gap-8 md:gap-12">
      {/* Sidebar */}
      <aside className="order-1 md:order-1 p-4 md:p-0">
        <Sidebar />
      </aside>

      {/* Products */}
      <main className="order-2 md:order-2 p-4 md:p-10">
        <ProductsList searchParams={resolvedSearchParams} />
      </main>
    </div>
  );
}

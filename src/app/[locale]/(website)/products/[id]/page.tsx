import { fetchProductById } from "@/src/lib/actions/api/products.api";
import CarouselWithThumbs from "./_components/thumbnail";
import ProductDescription from "./_components/product-description";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = await fetchProductById(id);
  return (
    <main>
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2">
        <CarouselWithThumbs product={product} />
        <ProductDescription product={product} />
      </section>
    </main>
  );
}

import { fetchProductById } from "@/src/lib/actions/api/products.api";
import CarouselWithThumbs from "./_components/thumbnail";
import ProductDescription from "./_components/product-description";
import ProductCountdown from "./_components/product-countdown";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = await fetchProductById(id);
  return (
    <main>
      <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <CarouselWithThumbs product={product} />

        <div className="flex flex-col gap-4">
          <ProductDescription product={product} />
          <ProductCountdown duration={8 * 24 * 60} productId={product._id} />
        </div>
      </section>
    </main>
  );
}

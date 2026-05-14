// "use client";
import AboutSection from "./_components/about-section";
import GallerySection from "./_components/gallery-section";
import ImagesSection from "./_components/images-section";
import CarouselSection from "./_components/carousel-section";
import OccasionsSection from "./_components/occasions-section";
import FeaturesSection from "./_components/features-section";
import MostPopular from "../occastionshome/most-popular-section";
import { getProducts } from "@/src/lib/actions/api/products.api";
// import GetAllOccastions from "../occastionshome/_api/get-all-name";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ occasion?: string }>;
}) {
  const params = await searchParams;

  const productData = await getProducts(params);
  const currentOccasionId = params.occasion;
  return (
    <div>
      <CarouselSection />
      <OccasionsSection />
      <FeaturesSection />

      <MostPopular
        products={productData.products}
        currentOccasionId={currentOccasionId}
      />

      <AboutSection />
      <GallerySection />
      <ImagesSection />
    </div>
  );
}

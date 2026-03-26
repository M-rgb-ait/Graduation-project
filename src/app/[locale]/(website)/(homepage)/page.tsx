"use client";
import AboutSection from "./_components/about-section";
import GallerySection from "./_components/gallery-section";
import ImagesSection from "./_components/images-section";
import CarouselSection from "./_components/carousel-section";
import OccasionsSection from "./_components/occasions-section";
import FeaturesSection from "./_components/features-section";

export default function Home() {
  return (
    <div>
      <CarouselSection />
      <OccasionsSection />
      <FeaturesSection />

      <AboutSection />
      <GallerySection />
      <ImagesSection />
    </div>
  );
}

"use client";

// import React from "react";
// import {
//   Carousel,
//   // CarouselApi,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

export default function CarouselWithThumbs({ product }: { product: Product }) {
  // const [api, setApi] = React.useState<CarouselApi>();
  // const [current, setCurrent] = React.useState(0);
  // const [count, setCount] = React.useState(0);
  // const [currentImg, setCurrentImg] = useState<string>(product.images[0]);
  const [currentImg, setCurrentImg] = useState<string>(product.images[0]);
  // React.useEffect(() => {
  //   if (!api) return;
  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap());
  //   api.on("select", () => setCurrent(api.selectedScrollSnap()));
  // }, [api]);

  // const handleThumbClick = React.useCallback(
  //   (index: number) => {
  //     api?.scrollTo(index);
  //   },
  //   [api],
  // );
  // setImages(product.images)
  // const handleThumbClick = (image:string) => {

  // }

  return (
    <div className="mx-auto w-full max-w-lg space-y-4 ps-0 md:ps-10 lg:ps-0">
      {/* Main Carousel  setApi={setApi}*/}
      {/* <Carousel className="w-full overflow-hidden rounded-md">
        <CarouselContent>
          <CarouselItem className="relative h-80"> */}
      <div className="w-full overflow-hidden rounded-md">
        <div className="relative h-80">
          <Image
            fill
            src={currentImg}
            // src={product.images[currentImg]}
            alt={product.title}
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* </CarouselItem>
        </CarouselContent>
      </Carousel> */}

      {/* Pagination */}
      <div className="flex h-28 justify-center gap-2 overflow-x-auto px-2">
        {product.images.map((item: string, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentImg(item)}
            className={`relative h-full w-1/6 overflow-hidden rounded-md border-0 brightness-75 transition-all duration-300 hover:brightness-100 active:border-2 active:border-maroon-600 active:brightness-100
${currentImg === item ? "border-2 border-green-500 brightness-100 " : "border-transparent"}`}
          >
            <Image
              src={item}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

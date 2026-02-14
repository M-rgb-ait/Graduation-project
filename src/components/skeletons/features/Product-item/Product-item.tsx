"use client";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useTranslations, useFormatter } from "next-intl";
import { Badge } from "@/components/ui/badge";

export default function ProductItem({ product }: { product: Product }) {
  // Translation
  const t = useTranslations();
  const format = useFormatter();

  //variables
  const isOutOfStock = product.quantity === 0;
  const createdAt = new Date(product.createdAt);
  const now = new Date();
  const daysSinceCreated =
    (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
  const isNew = daysSinceCreated <= 14;
  const isHot = product.sold >= 30;

  return (
    <main className="w-[302px]">
      <div className="relative text-center">
        <Image
          src={product.imgCover}
          alt={product.title}
          width={302}
          height={272}
          className="relative h-[272px] w-full rounded-2xl object-cover"
        />
        {/* Badge */}
        <div className="absolute end-4 top-2 flex items-center justify-center gap-1">
          {isNew && <Badge className="font-medium uppercase">{t("new")}</Badge>}
          {isHot && (
            <Badge
              className="absolute end-4 top-2 bg-maroon-50 px-2 py-0.5 font-medium uppercase text-maroon-600"
              variant="secondary"
            >
              {t("hot-p")}
            </Badge>
          )}
          {isOutOfStock && (
            <Badge className="absolute end-4 top-2 px-2 py-0.5 font-medium uppercase">
              {t("out-of-stock-p")}
            </Badge>
          )}
        </div>
      </div>
      {/* Title */}
      <h3 className="mt-2 line-clamp-1 text-xl font-semibold text-maroon-700 dark:text-softpink-200">
        {product.title}
      </h3>
      {/* rating */}
      {/* <StarsRating rating={product.rateAvg}></StarsRating> */}
      {/* Price & add to cart*/}
      <div className="flex items-end justify-between">
        <div className="flex">
          <p className="pe-2 font-medium text-maroon-700 dark:text-softpink-200">
            {format.number(product.priceAfterDiscount, "currency-no-digits")}
          </p>
          <p className="font-medium text-zinc-400 line-through dark:text-zinc-500">
            {format.number(product.price, "currency-no-digits")}
          </p>
        </div>
        {/* Cart icon */}
        <div className="flex size-11 items-center justify-center rounded-full bg-maroon-600 text-white dark:bg-maroon-500">
          <ShoppingCart />
        </div>
      </div>
    </main>
  );
}

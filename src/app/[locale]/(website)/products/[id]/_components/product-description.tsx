"use client";

import { Package, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import { useAddWishlist } from "../../../wishlist/hooks/use-add-wishlist";
import { Button } from "@/src/components/ui/button";
import { useCheckWishlist } from "../../../wishlist/hooks/use-check-wishlist";
import { useRemoveWishlist } from "../../../wishlist/hooks/use-remove-wishlist";
import { useUser } from "@/src/components/providers/components/get-user-name";

export default function ProductDescription({ product }: { product: Product }) {
  const { user } = useUser();
  //Translations
  const t = useTranslations();
  const { AddWishlist, isPending } = useAddWishlist();
  const { data: checkData } = useCheckWishlist(product._id);
  const { RemoveWishlist, isRemoving } = useRemoveWishlist();

  const handleWishlist = () => {
    if (checkData?.isInWishlist) {
      RemoveWishlist(product._id);
    } else {
      AddWishlist({ productId: product._id });
    }
  };
  const handleWishlistLocalStorage = () => {
    console.log("user", user);

    if (!user) {
      const wishlist: string[] = JSON.parse(
        localStorage.getItem("wishlist") || "[]",
      );

      const exists = wishlist.includes(product._id);

      const updatedWishlist = exists
        ? wishlist.filter((id) => id !== product._id)
        : [...wishlist, product._id];

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return;
    } else {
      handleWishlist();
    }
  };

  // Variables
  const quantity = product.quantity;

  return (
    <div className="flex h-full flex-col gap-6">
      {/* Header */}
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-2xl font-bold md:text-3xl">{product.title}</h1>

        {/* Price & Stock */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Price */}
          <div>
            <p className="flex flex-wrap items-center gap-2 text-2xl font-bold md:text-3xl">
              <span className="text-zinc-400 line-through">
                {product.price}
              </span>

              <span className="text-zinc-800 dark:text-zinc-100">
                {product.priceAfterDiscount}
              </span>

              <span className="text-lg font-medium">EGP</span>
            </p>
          </div>

          {/* Stock */}
          {quantity !== 0 ? (
            <div className="flex w-fit items-center gap-2 rounded-2xl bg-zinc-100 px-3 py-2">
              <Package size={18} strokeWidth={1.5} className="text-zinc-500" />

              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-800">
                {product.quantity} {t("left-in-stock")}
              </p>
            </div>
          ) : (
            <div className="flex w-fit items-center gap-2 rounded-2xl bg-red-50 px-3 py-2">
              <Package size={18} strokeWidth={1.5} className="text-red-600" />

              <p className="text-sm font-medium text-red-600">
                {t("out-of-stock")}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="flex flex-wrap items-center gap-2 border-y border-zinc-200 py-4 dark:border-zinc-600">
        <Star size={20} strokeWidth={1.5} color="orange" fill="orange" />

        <p>
          {t("rating")}:
          <span className="ml-1 font-medium">{product.rateAvg}/5</span>
        </p>

        <Link
          href="#productReviews"
          className="font-medium text-blue-600 hover:underline"
        >
          ({product.rateCount} {t("ratings")})
        </Link>
      </div>

      {/* Description */}
      <div>
        <p className="max-h-72 overflow-auto leading-7 text-zinc-600 dark:text-zinc-300">
          {product.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-col gap-3 sm:flex-row">
        <Button className="w-full sm:flex-1">cart</Button>

        <Button
          className="w-full sm:flex-1"
          spinner={isPending || isRemoving}
          onClick={handleWishlistLocalStorage}
        >
          {checkData?.isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </div>
    </div>
  );
}

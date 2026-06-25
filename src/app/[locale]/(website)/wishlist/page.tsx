"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useWhishlist } from "@/src/lib/hooks/whishlist-get";
import { Button } from "@/src/components/ui/button";
import { useRemoveWishlist } from "./hooks/use-remove-wishlist";
import { useClearAllWishlist } from "./hooks/use-clearall-wishlist";

export default function Wishlist() {
  const { Allwhishlist, isLoading } = useWhishlist();
  const { RemoveWishlist, isRemoving, variables } = useRemoveWishlist();
  const { ClearAllWishlist, ClearAllisPending } = useClearAllWishlist();
  const products = Allwhishlist?.wishlist.products ?? [];
  const hendelRemove = (id: string) => {
    RemoveWishlist(id);
  };
  const hendelClearAll = () => {
    ClearAllWishlist();
  };
  return (
    <section className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Wishlist</h1>

        <Button spinner={ClearAllisPending} onClick={() => hendelClearAll()}>
          Clear All
        </Button>
      </div>
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">Loading...</div>
      ) : products.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center gap-3">
          <Heart className="h-12 w-12 text-gray-400" />
          <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
          <p className="text-muted-foreground">
            Start adding your favorite products.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product: WishlistProduct) => (
            <Card
              key={product._id}
              className="overflow-hidden transition hover:shadow-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.imgCover}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="space-y-3 p-4">
                <h2 className="line-clamp-2 font-semibold">{product.title}</h2>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-green-600">
                    ${product.priceAfterDiscount}
                  </span>

                  <span className="text-sm line-through text-muted-foreground">
                    ${product.price}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                    {product.discount}% OFF
                  </span>

                  <span>⭐ {product.rateAvg}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button className="flex-1">Add to Cart</Button>

                  <Button
                    key={product._id}
                    spinner={isRemoving && variables === product._id}
                    onClick={() => hendelRemove(product._id)}
                    className="flex-1"
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

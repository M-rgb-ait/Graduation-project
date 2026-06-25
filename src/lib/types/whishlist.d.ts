declare type WishlistProduct = {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  discount: number;
  rateAvg: number;
  id: string;
};

declare type Wishlist = {
  _id: string;
  user: string;
  products: WishlistProduct[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

declare type WishlistResponse = {
  message: string;
  count: number;
  wishlist: Wishlist;
};
declare type AddWishlist = {
  productId: string;
};
declare type RemoveWishlist = {
  productId: string;
};
declare type CheckWishlist = {
  message: string;
  isInWishlist: boolean;
};

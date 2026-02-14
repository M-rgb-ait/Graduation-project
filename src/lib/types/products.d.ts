declare type ProductsResponse = {
  products: Product[];
};
declare type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  sold: number;
  rateAvg: number;
  rateCount: number;
  category: string;
  occasion: string;
  __v: number;
  isSuperAdmin: boolean;
} & DatabaseFields;

declare interface FetchProductsResponse {
  products: Product[];
}

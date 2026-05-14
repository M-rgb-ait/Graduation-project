declare type Occasion = {
  occasion: {
    _id: string;
    name: string;
    slug: string;
    image: string;
    isSuperAdmin: boolean;
    productsCount: number;
  };
} & DatabaseFields;

declare type OccasionsResponse = {
  occasions: Occasion[];
};
declare type occasions = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  isSuperAdmin: boolean;
  productsCount: number;
};

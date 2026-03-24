declare type Categories = {
  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    isSuperAdmin: boolean;
    productsCount: number;
  };
} & DatabaseFields;

declare type CategorysResponse = {
  categories: Category[];
};

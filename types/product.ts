export type ProductLink = {
  platform: string;
  url: string;
  rating: number;
  seller: string;
};

export type ProductSize = {
  size: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  images: string[];
  sizeChart?: string;
  sizes: ProductSize[];
  links: ProductLink[];
};

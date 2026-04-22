export type Product = {
  slug: string;
  name: string;
  images: string[];
  sizes: { size: string; price: number }[];
  links: { platform: string; url: string; rating: number }[];
};

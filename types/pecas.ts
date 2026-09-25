export type ProductImage = {
  src: string;
  alt: string;
};

export type Tamanhos = {
  tamanho: "PP" | "P" | "M" | "G" | "GG";
  available: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: ProductImage[];
  sizes: Tamanhos[];

  type: ProductType;

  details: ProductDetails;
};

export type ProductType =
  "clothing" | "shoes" | "accessories" | "electronics" | "furniture" | "other";

export type ProductDetails = {
  [key: string]: string | number | boolean;
};

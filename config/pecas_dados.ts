import { Product } from "@/types/pecas";
import { lifestyleDados } from "./lifestyle_dados";

export const products: Product[] = [{
  id: "1",
  slug: "preta-boxy-serp",
  name: "Camiseta Preta Modelo Boxy Estampa Serp",
  description: "Camiseta básica preta.",
  price: 199.90,
  images: lifestyleDados,
  type: "clothing",
  sizes: [
    {
      tamanho: "PP",
      available: false,
    },
    {
      tamanho: "P",
      available: true,
    },
    {
      tamanho: "M",
      available: true,
    },
    {
      tamanho: "G",
      available: true,
    },
    {
      tamanho: "GG",
      available: true,
    },
  ],
  details: {
    material: "Algodão",
    size: "M",
    color: "Preto",
  },
}]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
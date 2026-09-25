import { Product } from "@/types/pecas";

type ImageItem = {
  src: string;
  alt: string;
};

const boxy_preta_serp: ImageItem[] = [
  {
    src: "/pagina_camisetas/boxy_serp_preta/camisa2_transparente.png",
    alt: "",
  },
  { src: "/pagina_camisetas/boxy_serp_preta/camisa2.jpg", alt: "" },
  {
    src: "/pagina_camisetas/boxy_serp_preta/modelo_principal_frente_transparente.png",
    alt: "",
  },
  {
    src: "/pagina_camisetas/boxy_serp_preta/modelo_principal_costas_transparente.png",
    alt: "",
  },
  { src: "/pagina_camisetas/boxy_serp_preta/modelo_man.jfif", alt: "" },
  { src: "/pagina_camisetas/boxy_serp_preta/modelo_woman.jfif", alt: "" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "preta-boxy-serp",
    name: "Camiseta Preta Modelo Boxy Estampa Serp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ullam dolores maiores molestias facere iusto nesciunt natus nulla, doloribus quis magni dolorem voluptatibus odio recusandae, magnam consequatur laboriosam rem tempora.",
    price: 16990,
    images: boxy_preta_serp,
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
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

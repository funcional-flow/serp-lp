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
  { src: "/pagina_camisetas/boxy_serp_preta/modelo_man.jpg", alt: "" },
  { src: "/pagina_camisetas/boxy_serp_preta/modelo_woman.jpg", alt: "" },
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
    cores: [
      {
        cor: "Preta",
        hex: "bg-[#000000]",
        available: true,
      },
      {
        cor: "Branca",
        hex: "bg-[#FFFFFF]",
        available: false,
      },
      {
        cor: "Roxa",
        hex: "bg-[#3a1f61]",
        available: false,
      },
      {
        cor: "Amarela",
        hex: "bg-[#dc9f38]",
        available: false,
      },
    ],
    details: [
      {
        titulo: "Descrição",
        texto:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        titulo: "Especificações",
        texto:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        titulo: "Diferenciais",
        texto:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

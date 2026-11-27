export type ModeloConfig = {
  img_modelo_frente: string;
  img_modelo_costas: string;
  width: number;
  height: number;
  larguraImagem: string;
  tamanhoImagem: string;
  classNameImage: string;
  titulo: string;
  texto: string;
  background: string;
  textColor: string;
  textSecondaryColor: string;
  logoColor: string;
  buttonColor: string;
  lineColor: string;
  linkCamisa: string;
  buttonTextColor: string;
  buttonShadowColor: string;
};

export const ModeloSerpBoxy = {
  img_modelo_frente: "/modelos/boxy_serp_frente.jpg",
  img_modelo_costas: "/modelos/boxy_serp_costas.jpg",
  width: 940,
  height: 1672,
  larguraImagem: "w-[35vh] lg:w-xs",
  tamanhoImagem: "h-[45vh] lg:h-[50vh]",
  classNameImage: "object-[center_30%] object-cover rounded-2xl",
  //   classNameImage: "object-top object-contain",
  titulo: "boxy",
  texto:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!",
  background: "bg-transparent",
  // background:"bg-linear-to-b from-zinc-800 to-zinc-950"
  textColor: "text-white",
  textSecondaryColor: "text-white/70",
  logoColor: "white",
  buttonColor: "bg-white",
  lineColor: "border-white/25",
  linkCamisa: "/pecas/preta-boxy-serp",
  buttonTextColor: "text-black",
  buttonShadowColor: "hover:shadow-white/50",
  // tabsPosition:"bottom"
} satisfies ModeloConfig;

export const ModeloSerpClassica = {
  img_modelo_frente: "/modelos/classica_serp_frente.jpg",
  img_modelo_costas: "/modelos/classica_serp_costas.jpg",
  width: 940,
  height: 1672,
  larguraImagem: "w-[35vh] lg:w-xs",
  tamanhoImagem: "h-[45vh] lg:h-[50vh]",
  classNameImage: "object-top object-cover rounded-2xl",
  //   classNameImage: "object-top object-contain",
  titulo: "classica",
  texto:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!",
  background: "bg-transparent",
  textColor: "text-white",
  textSecondaryColor: "text-white/70",
  logoColor: "white",
  buttonColor: "bg-white",
  lineColor: "border-white/25",
  linkCamisa: "/pecas/preta-boxy-serp",
  buttonTextColor: "text-black",
  buttonShadowColor: "hover:shadow-white/50",
} satisfies ModeloConfig;

export const ModeloSerpRegata = {
  img_modelo_frente: "/modelos/modelo_principal_frente_transparente.png",
  img_modelo_costas: "/modelos/modelo_principal_costas_transparente.png",
  width: 940,
  height: 1672,
  larguraImagem: "w-[35vh] lg:w-xs",
  tamanhoImagem: "h-[45vh] lg:h-[50vh]",
  classNameImage: "object-top object-contain",
  titulo: "Regata",
  texto:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!",
  background: "bg-transparent",
  textColor: "text-white",
  textSecondaryColor: "text-white/70",
  logoColor: "white",
  buttonColor: "bg-white",
  lineColor: "border-white/25",
  linkCamisa: "/pecas/preta-boxy-serp",
  buttonTextColor: "text-black",
  buttonShadowColor: "hover:shadow-white/50",
} satisfies ModeloConfig;

// --------------------------------------------------------------

export const ModeloMinimalBoxy = {
  img_modelo_frente: "/modelos/modelo_principal_frente_transparente.png",
  img_modelo_costas: "/modelos/modelo_principal_costas_transparente.png",
  width: 940,
  height: 1672,
  larguraImagem: "w-[35vh] lg:w-xs",
  tamanhoImagem: "h-[45vh] lg:h-[50vh]",
  classNameImage: "object-top object-contain",
  titulo: "boxy",
  texto:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!",
  background: "bg-transparent",
  // background:"bg-linear-to-b from-zinc-800 to-zinc-950"
  textColor: "text-black",
  textSecondaryColor: "text-black/70",
  logoColor: "black",
  buttonColor: "bg-black",
  lineColor: "border-black/25",
  linkCamisa: "/pecas/preta-boxy-serp",
  buttonTextColor: "text-white",
  buttonShadowColor: "hover:shadow-black/50",
  // tabsPosition:"bottom"
} satisfies ModeloConfig;

export const ModeloMinimalClassica = {
  img_modelo_frente: "/modelos/modelo_principal_frente_transparente.png",
  img_modelo_costas: "/modelos/modelo_principal_costas_transparente.png",
  width: 940,
  height: 1672,
  larguraImagem: "w-[35vh] lg:w-xs",
  tamanhoImagem: "h-[45vh] lg:h-[50vh]",
  classNameImage: "object-top object-contain",
  titulo: "Classica",
  texto:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!",
  background: "bg-transparent",
  // background:"bg-linear-to-b from-zinc-800 to-zinc-950"
  textColor: "text-black",
  textSecondaryColor: "text-black/70",
  logoColor: "black",
  buttonColor: "bg-black",
  lineColor: "border-black/25",
  linkCamisa: "/pecas/preta-boxy-serp",
  buttonTextColor: "text-white",
  buttonShadowColor: "hover:shadow-black/50",
  // tabsPosition:"bottom"
} satisfies ModeloConfig;

export const ModeloMinimalRegata = {
  img_modelo_frente: "/modelos/modelo_principal_frente_transparente.png",
  img_modelo_costas: "/modelos/modelo_principal_costas_transparente.png",
  width: 940,
  height: 1672,
  larguraImagem: "w-[35vh] lg:w-xs",
  tamanhoImagem: "h-[45vh] lg:h-[50vh]",
  classNameImage: "object-top object-contain",
  titulo: "Regata",
  texto:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!",
  background: "bg-transparent",
  // background:"bg-linear-to-b from-zinc-800 to-zinc-950"
  textColor: "text-black",
  textSecondaryColor: "text-black/70",
  logoColor: "black",
  buttonColor: "bg-black",
  lineColor: "border-black/25",
  linkCamisa: "/pecas/preta-boxy-serp",
  buttonTextColor: "text-white",
  buttonShadowColor: "hover:shadow-black/50",
  // tabsPosition:"bottom"
} satisfies ModeloConfig;

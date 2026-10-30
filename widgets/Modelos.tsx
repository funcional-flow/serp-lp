import CardModelo from "@/components/CardModelo";
// import CardModeloDesk from "@/components/CardModeloDesk";
import LogoLoop from "@/components/reactbits/LogoLoop";
import { logosBranca, logosPreta } from "@/config/logos";

export default function Modelos() {
  return (
    <div className="relative flex min-h-lvh w-full flex-col">
      {/* Primeira Sessão */}
      <div className="relative flex h-full min-h-lvh w-full flex-col items-center gap-30 lg:flex-row">
        {/* Card #1 */}
        <div className="relative w-full flex-1">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            larguraImagem="w-[35vh] lg:w-xs"
            tamanhoImagem="h-[45vh] lg:h-[50vh]"
            classNameImage="object-top object-contain lg:object-cover"
            titulo="serp - boxy"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            background="bg-transparent"
            // background="bg-linear-to-b from-zinc-800 to-zinc-950"
            textColor="text-white"
            textSecondaryColor="text-white/70"
            logoColor="white"
            buttonColor="bg-white"
            lineColor="border-white/25"
            linkCamisa="/pecas/preta-boxy-serp"
            buttonTextColor="text-black"
            buttonShadowColor="hover:shadow-white/50"
            // tabsPosition="bottom"
          />
        </div>

        {/* Divisor */}
        <div className="hidden h-[70vh] w-px bg-linear-to-b from-transparent via-white/15 to-transparent lg:flex" />
        <div className="h-px w-xs bg-linear-to-r from-transparent via-white/15 to-transparent px-10 lg:hidden" />

        {/* Card #2 */}
        <div className="relative w-full flex-1">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            larguraImagem="w-[35vh] lg:w-xs"
            tamanhoImagem="h-[45vh] lg:h-[50vh]"
            classNameImage="object-top object-contain lg:object-cover"
            titulo="minimal - boxy"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            background="bg-transparent"
            textColor="text-white"
            textSecondaryColor="text-white/70"
            logoColor="white"
            buttonColor="bg-white"
            lineColor="border-white/25"
            linkCamisa="/pecas/preta-boxy-serp"
            buttonTextColor="text-black"
            buttonShadowColor="hover:shadow-white/50"
          />
        </div>

        {/* Divisor */}
        <div className="hidden h-[70vh] w-px bg-linear-to-b from-transparent via-white/15 to-transparent lg:flex" />
        <div className="h-px w-xs bg-linear-to-r from-transparent via-white/15 to-transparent px-10 lg:hidden" />

        {/* Card #3 */}
        <div className="relative w-full flex-1">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            larguraImagem="w-[35vh] lg:w-xs"
            tamanhoImagem="h-[45vh] lg:h-[50vh]"
            classNameImage="object-top object-contain lg:object-cover"
            titulo="minimal - boxy"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            background="bg-transparent"
            textColor="text-white"
            textSecondaryColor="text-white/70"
            logoColor="white"
            buttonColor="bg-white"
            lineColor="border-white/25"
            linkCamisa="/pecas/preta-boxy-serp"
            buttonTextColor="text-black"
            buttonShadowColor="hover:shadow-white/50"
          />
        </div>
      </div>
    </div>
  );
}

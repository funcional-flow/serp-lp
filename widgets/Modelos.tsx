import CardModelo from "@/components/CardModelo";
// import CardModeloDesk from "@/components/CardModeloDesk";
import LogoLoop from "@/components/reactbits/LogoLoop";
import { logosBranca, logosPreta } from "@/config/logos";

export default function Modelos() {

  return (
    <div className="relative flex h-auto w-full flex-col bg-black">
      {/* <div className="relative">
        <LogoLoop
          logos={logosBranca}
          fadeOut
          fadeOutColor="var(--color-black)"
          ariaLabel="Serpentize"
          className="bg-black"
        />
      </div> */}
      <div className="relative flex min-h-lvh flex-col lg:flex-row">
        {/* Primeira Sessão */}
        <div className="relative h-lvh w-full lg:flex lg:h-auto lg:w-1/2">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            contentAspect="portrait"
            larguraImagem="w-[35vh] lg:w-sm"
            tamanhoImagem="h-[45vh] lg:h-auto"
            classNameImage="object-top object-contain lg:object-cover"
            titulo="serp - boxy"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            imgAntes={true}
            background="bg-linear-to-b from-zinc-800 to-zinc-950"
            textColor="text-white"
            textSecondaryColor="text-white/70"
            logoColor="white"
            buttonColor="bg-white"
            lineColor="border-white/25"
            linkCamisa="/pecas/preta-boxy-serp"
            buttonTextColor="text-black"
            // tabsPosition="bottom"
          />
        </div>
        <div className="relative h-lvh w-full lg:flex lg:h-auto lg:w-1/2">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            contentAspect="portrait"
            larguraImagem="w-[35vh] lg:w-sm"
            tamanhoImagem="h-[45vh] lg:h-auto"
            classNameImage="object-top object-contain lg:object-cover"
            titulo="minimal - boxy"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            imgAntes={false}
            background="bg-linear-to-b from-white to-zinc-300"
            textColor="text-black"
            textSecondaryColor="text-black/70"
            logoColor="black"
            buttonColor="bg-black"
            lineColor="border-black/25"
            linkCamisa="/pecas/preta-boxy-serp"
            buttonTextColor="text-white"
            buttonShadowColor="hover:shadow-black/50"
          />
        </div>
      </div>

      {/* <div className="relative">
        <LogoLoop
          logos={logosPreta}
          fadeOut
          fadeOutColor="var(--color-white)"
          ariaLabel="Serpentize"
          className="bg-white"
          direction="right"
        />
      </div>
      <div className="relative flex h-lvh">
        <div className="relative order-2 flex w-1/2">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            contentAspect="portrait"
            larguraImagem="w-sm"
            titulo="Minimal - classica"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            imgAntes={false}
            background="bg-linear-to-t from-zinc-800 to-zinc-950"
            textColor="text-white"
            textSecondaryColor="text-white/70"
            logoColor="white"
            buttonColor="bg-white"
            lineColor="border-white/25"
            linkCamisa="/padrao"
            buttonTextColor="text-black"
          />
        </div>
        <div className="relative order-1 flex w-1/2">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            contentAspect="portrait"
            larguraImagem="w-sm"
            titulo="serp - classica"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            imgAntes={true}
            background="bg-linear-to-t from-white to-zinc-300"
            textColor="text-black"
            textSecondaryColor="text-black/70"
            logoColor="black"
            buttonColor="bg-black"
            lineColor="border-black/25"
            linkCamisa="/padrao"
            buttonTextColor="text-white"
            buttonShadowColor="hover:shadow-black/50"
          />
        </div>
      </div>

      <div className="relative">
        <LogoLoop
          logos={logosBranca}
          fadeOut
          fadeOutColor="var(--color-black)"
          ariaLabel="Serpentize"
          className="bg-black"
        />
      </div>
      <div className="relative flex h-lvh">
        <div className="relative flex w-1/2">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            contentAspect="portrait"
            larguraImagem="w-sm"
            titulo="Minimal - regata"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            imgAntes={true}
            background="bg-linear-to-b from-zinc-800 to-zinc-950"
            textColor="text-white"
            textSecondaryColor="text-white/70"
            logoColor="white"
            buttonColor="bg-white"
            lineColor="border-white/25"
            linkCamisa="/padrao"
            buttonTextColor="text-black"
          />
        </div>
        <div className="relative flex w-1/2">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            contentAspect="portrait"
            larguraImagem="w-sm"
            titulo="serp - regata"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
            imgAntes={false}
            background="bg-linear-to-b from-white to-zinc-300"
            textColor="text-black"
            textSecondaryColor="text-black/70"
            logoColor="black"
            buttonColor="bg-black"
            lineColor="border-black/25"
            linkCamisa="/padrao"
            buttonTextColor="text-white"
            buttonShadowColor="hover:shadow-black/50"
          />
        </div>
      </div> */}

      {/* <div className="relative">
        <LogoLoop
          logos={logosPreta}
          fadeOut
          fadeOutColor="var(--color-white)"
          ariaLabel="Serpentize"
          className="bg-white"
          direction="right"
        />
      </div> */}
    </div>
  );
}

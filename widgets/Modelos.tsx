import CardModelo from "@/components/CardModelo";
import LogoLoop from "@/components/reactbits/LogoLoop";

export default function Modelos() {
  const logosPreta = [
    { src: "/logo_loop/preta/logo_loop_preta (1).png", alt: "Tech 1" },
    { src: "/logo_loop/preta/logo_loop_preta (2).png", alt: "Tech 2" },
    { src: "/logo_loop/preta/logo_loop_preta (3).png", alt: "Tech 3" },
    { src: "/logo_loop/preta/logo_loop_preta (4).png", alt: "Tech 4" },
  ];
  const logosBranca = [
    { src: "/logo_loop/branca/logo_loop_branca (1).png", alt: "Tech 1" },
    { src: "/logo_loop/branca/logo_loop_branca (2).png", alt: "Tech 2" },
    { src: "/logo_loop/branca/logo_loop_branca (3).png", alt: "Tech 3" },
    { src: "/logo_loop/branca/logo_loop_branca (4).png", alt: "Tech 4" },
  ];

  return (
    <div className="relative flex h-auto w-full flex-col bg-black">
      <div className="relative">
        <LogoLoop
          logos={logosBranca}
          fadeOut
          fadeOutColor="var(--color-black)"
          ariaLabel="Serpentize"
          className="bg-black"
        />
      </div>
      <div className="relative flex h-svh">
        {/* Primeira Sessão */}
        <div className="relative flex w-1/2">
          <CardModelo
            img_modelo_frente="/modelos/modelo_principal_frente_transparente.png"
            img_modelo_costas="/modelos/modelo_principal_costas_transparente.png"
            width={940}
            height={1672}
            contentAspect="portrait"
            larguraImagem="w-sm"
            titulo="Minimal - boxy"
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
            titulo="Serp - boxy"
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
      <div className="relative flex h-svh">
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
      <div className="relative flex h-svh">
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
      
      <div className="relative">
        <LogoLoop
          logos={logosPreta}
          fadeOut
          fadeOutColor="var(--color-white)"
          ariaLabel="Serpentize"
          className="bg-white"
          direction="right"
        />
      </div>
    </div>
  );
}

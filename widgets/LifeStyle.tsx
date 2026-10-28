import BentoGallery from "@/components/gsap/BentoGallery";
import { lifestyleDados } from "@/config/lifestyle_dados";

export default function LifeStyle() {
  return (
    <>
      <div className="relative hidden lg:block">
        <BentoGallery
          background="bg-black overflow-x-hidden"
          images={lifestyleDados}
          reverse={true}
          staticGrid={false}
        />
      </div>
      <div className="relative lg:hidden">
        <BentoGallery
          background="bg-black overflow-x-hidden"
          images={lifestyleDados}
          reverse={true}
          staticGrid={true}
        />
      </div>
    </>
  );
}

//   Essa seção serve para vender o estilo de vida, não a camiseta. Fotos de
//   alguém usando a peça em situações que tenham relação com o posicionamento
//   da marca. Essa parte pode ficar muito boa com GSAP + parallax + máscaras +
//   textos entrando conforme o scroll.

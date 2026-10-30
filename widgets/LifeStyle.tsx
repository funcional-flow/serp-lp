import BentoGallery from "@/components/gsap/BentoGallery";
import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";
import { lifestyleDados } from "@/config/lifestyle_dados";

export default function LifeStyle() {
  return (
    <>
      {/* Desktop */}
      <div className="relative hidden lg:block">
        <BentoGallery
          background="bg-black overflow-x-hidden"
          images={lifestyleDados}
          reverse={true}
          staticGrid={false}
        />
      </div>
      {/* Mobile */}
      <div className="relative bg-transparent lg:hidden">
        <ScaleOnScroll
          scale={{ from: 3, to: 1 }}
          opacity={{ from: 0, to: 1 }}
          startAnimation="top bottom"
          endAnimation="top center-=300"
          className="overflow-hidden"
        >
          <BentoGallery
            background="bg-transparent overflow-x-hidden"
            images={lifestyleDados}
            reverse={true}
            staticGrid={true}
          />
        </ScaleOnScroll>
      </div>
    </>
  );
}

//   Essa seção serve para vender o estilo de vida, não a camiseta. Fotos de
//   alguém usando a peça em situações que tenham relação com o posicionamento
//   da marca. Essa parte pode ficar muito boa com GSAP + parallax + máscaras +
//   textos entrando conforme o scroll.

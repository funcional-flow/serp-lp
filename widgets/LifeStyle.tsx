import BentoGallery from "@/components/gsap/BentoGallery";
import { lifestyleDados } from "@/config/lifestyle_dados";

export default function LifeStyle() {
  return (
    <div className="relative bg-linear-to-b from-white to-gray-300">
      <BentoGallery
        background="bg-black overflow-x-hidden"
        images={lifestyleDados}
      />
      {/* <div className="relative flex h-[115svh] items-center bg-black text-white">
        <div className="relative h-150 w-full">
          <FlexCarousel
            items={lifestyleDados}
            // preset="arch"
            // intro="rise"
            // cardHeight={0.5}
            // gap={12}
            // squeeze={0.2}
            // focusOnClick
            // captions
            // fit="natural"
            // radius={0}
            // lensWidth={0.74}
            // lensHeight={1.18}
            // tilt={62}
            // roundness={1}
            // bend={0.34}
            // reach={0.38}
            // curl="twist"
            // dispersion={0.45}
            // liquid={0}
            // followCursor={false}
            // autoplay={false}
            // interval={4}
            // captureWheel
          />
        </div>
      </div> */}
    </div>
  );
}

//   Essa seção serve para vender o estilo de vida, não a camiseta. Fotos de
//   alguém usando a peça em situações que tenham relação com o posicionamento
//   da marca. Essa parte pode ficar muito boa com GSAP + parallax + máscaras +
//   textos entrando conforme o scroll.

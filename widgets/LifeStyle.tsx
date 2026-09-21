import BentoGallery from "@/components/gsap/BentoGallery";

export default function LifeStyle() {
  return (
    <div className="relative bg-linear-to-b from-white to-gray-300">
      <BentoGallery
        background="bg-black"
        images={[
            // "/lifestyle/lifestyle_principal.jpg",
            {src: "/lifestyle/lifestyle_principal1.png", classNameImg: "object-cover"},
            // {src: "/logo_loop/branca/logo_loop_branca (2).png", classNameImg: "object-contain"},
            {src: "/lifestyle/lifestyle1.jpg", classNameImg: "object-cover object-[center_55%]"},
            {src: "/lifestyle/lifestyle2.jpg", classNameImg: "object-cover object-[center_50%]"},
            {src: "/lifestyle/lifestyle3.jpg", classNameImg: "object-cover object-[center_30%]"},
            {src: "/lifestyle/lifestyle4.jpg", classNameImg: "object-cover object-[center_40%]"},
            {src: "/lifestyle/lifestyle5.jpg", classNameImg: "object-cover"},
            {src: "/lifestyle/lifestyle6.jpg", classNameImg: "object-cover"},
            {src: "/lifestyle/lifestyle7.jpg", classNameImg: "object-cover"},
        ]}
      />
      <div className="bg-black text-white h-svh">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut eos odio
        voluptatum laudantium accusamus vero. Laudantium amet, tempora officiis
        deserunt autem quibusdam debitis facere quod corporis saepe cupiditate
        voluptates.
      </div>
    </div>
  );
}

//   Essa seção serve para vender o estilo de vida, não a camiseta. Fotos de
//   alguém usando a peça em situações que tenham relação com o posicionamento
//   da marca. Essa parte pode ficar muito boa com GSAP + parallax + máscaras +
//   textos entrando conforme o scroll.

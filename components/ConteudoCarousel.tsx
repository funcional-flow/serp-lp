import Image from "next/image";

interface ConteudoCarouselProps {
  src: string;
  width?: number;
  height?: number;
  img_background?: string;
  className_background?: string;
  w_img_background?: number;
  h_img_background?: number;
  className_img?: string;
  className_traco?: string;
  cor_card?: string;
  cor_card_secundaria?: string;
  cor_letra_card?: string;
  cor_borda?: string;
  area_hover1?: string;
  area_hover2?: string;
  cor_textos1?: string;
  cor_textos2?: string;
  cor_detalhes?: string;
}

export default function ConteudoCarousel({
  src,
  width = 660,
  height = 366,
  className_img = "w-md",
  className_traco = "hidden",
  img_background = "/arquivos de marca/serp-marca-abreviada-branca.png",
  cor_card = "bg-black",
  cor_card_secundaria = "",
  cor_letra_card = "text-gray-500",
  cor_borda = "",
  area_hover1 = "",
  area_hover2 = "",
  w_img_background = 618,
  h_img_background = 343,
  className_background = "",
  cor_textos1 = "text-white",
  cor_textos2 = "text-white/70",
  cor_detalhes = "bg-white/60",
}: ConteudoCarouselProps) {
  return (
    <div className="relative h-svh select-none">
      {/* Imagem de Background */}
      <div className="absolute top-1/2 left-1/2 z-0 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <Image
          src={img_background}
          alt={img_background}
          width={w_img_background || 618}
          height={h_img_background || 343}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className={`h-auto object-cover ${className_background}`}
        />
      </div>
      <div className="relative flex h-svh w-full">
        <div className={`peer absolute z-20 cursor-help ${area_hover1}`} />

        {/* Card */}
        <div
          className={`pointer-events-none absolute z-10 flex items-center opacity-0 transition-opacity duration-600 peer-hover:opacity-100 ${className_traco}`}
        >
          <div
            className={`font-montserrat ${cor_borda} z-10 w-xs rounded-2xl ${cor_card} p-6 ${cor_letra_card}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id
            ipsam rem repellendus. Incidunt inventore praesentium esse,
            explicabo velit ea in vitae ipsam fuga quia sequi voluptatem
            laborum, laudantium nihil.
          </div>
          <div
            className={`relative z-10 flex h-2 w-60 border ${cor_borda} ${cor_card}`}
          />
          <div
            className={`absolute left-139 z-10 flex h-3 w-3 items-center justify-center rounded-full ${cor_card} border-2 ${cor_borda}`}
          />
        </div>

        {/* Lateral Esquerda */}
        <div
          className={`absolute flex flex-col pt-4 pl-4 lg:pt-10 lg:pl-14 ${cor_textos1}`}
        >
          <div className="absolute top-10 left-14 flex items-center gap-6">
            <h1 className="font-metrim z-20 text-xl tracking-[0.15em] lg:tracking-[0.2em]">
              <a href="#final">
                SERPENTIZE
              </a>
            </h1>
            <div className={`hidden h-0.5 w-14 lg:block ${cor_detalhes}`} />
          </div>

          <div className="flex flex-col gap-2 pt-20 lg:gap-6 lg:pt-80">
            <h1 className="flex flex-col text-xl tracking-widest lg:text-3xl">
              <span>MOVEMENT</span>
              <span>WITH INTENTION</span>
            </h1>
            <p className={`flex flex-col text-sm lg:text-base ${cor_textos2}`}>
              <span>Mais que roupas,</span>
              <span>é um estilo de vida.</span>
            </p>
          </div>
        </div>

        {/* Lateral direita */}
        <div
          className={`absolute right-0 flex flex-col items-end pt-4.5 pr-4 lg:pt-10 lg:pr-14 ${cor_textos1}`}
        >
          <div
            className={`flex flex-col items-end gap-1 text-xs tracking-[0.4em] ${cor_textos2}`}
          >
            <p>STREETWEAR</p>
            <p>ATHLETIC</p>
            <p>LIFESTYLE</p>
          </div>

          <div className={`mt-15 h-14 w-0.5 lg:mt-60 ${cor_detalhes}`} />
          <div className={`relative mt-8 pt-5 pr-2`}>
            <div className={`absolute -top-1.75 h-4 w-0.5 ${cor_detalhes}`} />
            <div
              className={`absolute top-0 -left-1.75 h-0.5 w-4 ${cor_detalhes}`}
            />
          </div>

          <div className="flex flex-col items-end gap-1 pt-100 text-xs tracking-[0.4em] lg:pt-20">
            <p>DISCIPLINA</p>
            <p>FOCO</p>
            <p>EVOLUÇÃO</p>
          </div>
        </div>

        <div className="relative z-1 flex w-full items-start justify-center">
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`h-auto ${className_img}`}
          />
        </div>
      </div>
    </div>
  );
}

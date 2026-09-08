import Image from "next/image";

interface ConteudoCarouselProps {
  src: string;
  width?: number;
  height?: number;
  img_background?: string;
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
}: ConteudoCarouselProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-9 flex items-center justify-center">
        <Image
          src={img_background}
          alt={img_background}
          width={w_img_background || 618}
          height={h_img_background || 343}
          className="h-auto w-7xl object-cover opacity-5"
        />
      </div>
      <div className="relative z-10">
        <div className="relative flex h-svh w-full">
          <div className={`peer absolute z-20 ${area_hover1}`} />
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
              className={`relative z-10 flex h-2 w-60 ${cor_card_secundaria}`}
            >
              <div
                className={`absolute top-0.5 left-0 z-9 h-1 w-61 ${cor_card}`}
              />
            </div>
            <div
              className={`z-10 flex h-3 w-3 items-center justify-center rounded-full ${cor_card} border ${cor_borda}`}
            >
              <div
                className={`h-1.5 w-1.5 rounded-full ${cor_card_secundaria}`}
              />
            </div>
          </div>

          <div className="relative flex w-full items-start justify-center">
            <Image
              src={src}
              alt=""
              width={width}
              height={height}
              className={`h-auto ${className_img}`}
            />
          </div>
        </div>
      </div>
    </div>

    // <div className="relative flex h-svh w-full">
    //   <div className="group absolute top-[23.5%] left-[46.5%] z-20 h-20 w-16 bg-red-500/50">
    //     <div className="absolute hidden group-hover:flex">
    //       <div className={`absolute flex items-center ${className_traco}`}>
    //         <div className="font-montserrat z-10 w-xs rounded-2xl bg-black p-6 text-white">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id
    //           ipsam rem repellendus. Incidunt inventore praesentium esse,
    //           explicabo velit ea in vitae ipsam fuga quia sequi voluptatem
    //           laborum, laudantium nihil.
    //         </div>
    //         <div className="z-10 h-1 w-60 bg-black" />
    //         <div className="absolute left-80 z-9 h-1.5 w-60 bg-white" />
    //         <div className="z-10 flex h-3 w-3 items-center justify-center rounded-full bg-black outline outline-white">
    //           <div className="h-1.5 w-1.5 rounded-full bg-white" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative flex w-full items-start justify-center">
    //     <Image
    //       src={src}
    //       alt=""
    //       width={width}
    //       height={height}
    //       className={`h-auto ${className_img}`}
    //     />
    //   </div>
    // </div>
  );
}

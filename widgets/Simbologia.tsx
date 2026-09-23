"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperInstance } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";
import SimbologiaCarousel from "@/components/SimbologiaCarousel";
import { simbologiaDados } from "@/config/simbologia_dados";

export default function Simbologia() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  return (
    <div className="w-full gap-10 relative flex min-h-[110svh] bg-linear-to-b from-white to-gray-300 px-30">
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
        //   src="/fundo1.jpg"
          src="/simbologia/urban3.jpg"
          alt="Simbologia"
          fill
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 z-0 opacity-5"></div>
      {/* Lado Esquerdo */}
      <div className="relative z-1 mt-35 flex w-1/2 flex-col items-center">
        <div className="group pointer-events-none relative w-2xl">
          <div className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-2xl bg-black transition-all duration-300 group-hover:scale-101 group-hover:bg-linear-to-b group-hover:from-black group-hover:to-zinc-950 group-hover:shadow-lg group-hover:shadow-black" />
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            loop={true}
            grabCursor={true}
            allowTouchMove={true}
            simulateTouch={true}
            // onSlideChange={() => console.log("slide change")}
            onSwiper={setSwiper}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="rounded-2xl transition-all duration-300 group-hover:scale-101"
          >
            {simbologiaDados.map((modelo, index) => (
              <SwiperSlide key={index}>
                <SimbologiaCarousel src={modelo.src} alt={modelo.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-5 pt-6">
          <button
            type="button"
            className="rounded-full bg-black p-2 transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:shadow-md hover:shadow-gray-500 active:scale-100"
            onClick={() => swiper?.slidePrev()}
          >
            <ArrowLeft className="text-white" />
          </button>

          <button
            type="button"
            className="rounded-full bg-black p-2 transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:shadow-md hover:shadow-gray-500 active:scale-100"
            onClick={() => swiper?.slideNext()}
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="relative z-1 mt-47 flex w-full flex-col items-end gap-35 text-end">
        <h2 className="text-5xl">Simbolo por trás do Serpentize</h2>
        <h2 className="text-5xl">
          Inspiração pelo movimento. <br /> A serpente representa a capacidade
          de se adaptar sem perder a própria essência.
        </h2>
        <h2 className="text-5xl">
          NOVOS CICLOS
          <br />
          NOVAS POSSIBILIDADES
          <br />
          NOVAS EXPERIÊNCIAS
        </h2>
      </div>
    </div>
  );
}

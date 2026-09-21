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
    <div className="relative flex min-h-[110svh] w-full items-center gap-10 bg-linear-to-b from-white to-gray-300 px-30">
      <div className="absolute top-5.5 left-30 z-10 h-full w-full">
        <Image
          src="/simbologia/serp-marca-extensa-preta.png"
          alt="Simbologia"
          width={500}
          height={500}
          className="h-auto w-40 opacity-20"
        />
      </div>
      {/* Lado Esquerdo */}
      <div className="flex w-1/2 flex-col items-center mt-10">
        <div className="relative w-2xl">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            loop={true}
            grabCursor={false}
            allowTouchMove={true}
            simulateTouch={true}
            // onSlideChange={() => console.log("slide change")}
            onSwiper={setSwiper}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="rounded-2xl"
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
            className="rounded-full bg-black p-2 transition-all duration-300 hover:scale-120 hover:cursor-pointer active:scale-100"
            onClick={() => swiper?.slidePrev()}
          >
            <ArrowLeft className="text-white" />
          </button>

          <button
            type="button"
            className="rounded-full bg-black p-2 transition-all duration-300 hover:scale-120 hover:cursor-pointer active:scale-100"
            onClick={() => swiper?.slideNext()}
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="mt-20 flex w-full flex-col items-end gap-35 text-end">
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

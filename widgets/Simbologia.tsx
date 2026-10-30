"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import SimbologiaCarousel from "@/components/SimbologiaCarousel";
import { simbologiaDados } from "@/config/simbologia_dados";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";

export default function Simbologia() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  return (
    <div className="relative flex min-h-[110lvh] w-full flex-col items-center justify-center overflow-hidden lg:h-[110lvh] lg:flex-row lg:gap-10 lg:px-30">
      {/* Lado Esquerdo */}
      <div className="relative z-1 flex w-full flex-col items-center px-4 lg:w-1/2 lg:px-0">
        <div className="group relative w-full lg:w-2xl">
          <div className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-2xl bg-black transition-all duration-300 group-hover:scale-101 group-hover:bg-linear-to-b group-hover:from-black group-hover:to-zinc-950 group-hover:shadow-lg group-hover:shadow-black" />
          <Swiper
            spaceBetween={675}
            slidesPerView={1}
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
            modules={[Autoplay]}
            className="relative rounded-2xl transition-all duration-300 group-hover:scale-101"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo_branca.png"
                alt="Simbologia"
                width={500}
                height={500}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="w-auto opacity-20 lg:h-50"
              />
            </div>
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
      <div className="relative z-1 mt-[4vh] flex w-full flex-col gap-10 px-6 text-center lg:mt-0 lg:mb-15 lg:items-end lg:gap-35 lg:px-0 lg:text-end">
        <h2 className="text-xl font-bold lg:text-5xl lg:font-normal">
          Simbolo por trás do Serpentize
        </h2>
        <h2 className="flex flex-col text-lg lg:text-5xl">
          <span className="font-bold lg:font-normal">
            Inspiração pelo movimento.
          </span>
          <span>
            A serpente representa a capacidade de se adaptar sem perder a
            própria essência.
          </span>
        </h2>
        <h2 className="text-lg lg:mb-0 lg:text-5xl">
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

"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperInstance } from "swiper";

export default function Simbologia() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  return (
    <div className="relative gap-10 flex min-h-svh w-full justify-between bg-linear-to-b from-white to-gray-300">
      {/* Lado Esquerdo */}
      <div className="mt-20 flex w-md flex-col">
        <div className="relative">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={setSwiper}
          >
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/modelo_man.jfif"
                  alt="Modelo"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/modelo_woman.jfif"
                  alt="Modelo"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/modelo_man.jfif"
                  alt="Modelo"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/modelo_woman.jfif"
                  alt="Modelo"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => swiper?.slidePrev()}>
            Anterior
          </button>

          <button type="button" onClick={() => swiper?.slideNext()}>
            Próximo
          </button>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="flex w-full">Teste</div>
    </div>
  );
}

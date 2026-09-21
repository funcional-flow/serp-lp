"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperInstance } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";

export default function Simbologia() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  return (
    <div className="relative flex min-h-svh w-full justify-between gap-10 bg-linear-to-b from-white to-gray-300 px-20">
      {/* Lado Esquerdo */}
      <div className="mt-20 flex w-1/2 flex-col items-center">
        <div className="relative w-xl">
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
              delay: 4000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, EffectFade]}
            className="rounded-2xl"
          >
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/lifestyle/lifestyle_principal1.png"
                  alt="Modelo"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/lifestyle/lifestyle3.jpg"
                  alt="Modelo"
                  fill
                  className="object-cover object-[center_40%]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/lifestyle/lifestyle4.jpg"
                  alt="Modelo"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex h-150 w-full">
                <Image
                  src="/lifestyle/lifestyle5.jpg"
                  alt="Modelo"
                  fill
                  className="object-cover object-[center_90%]"
                />
              </div>
            </SwiperSlide>
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
      <div className="mt-20 flex w-full">Teste</div>
    </div>
  );
}

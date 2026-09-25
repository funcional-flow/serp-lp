"use client";

import { useState } from "react";
import Image from "next/image";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageItem = {
  src: string;
  alt: string;
};

type NavigationLength = "sm" | "md" | "lg";

interface SlideWithThumbProps {
  images: ImageItem[];
  navigationLength?: NavigationLength;
  navigationColor?: string;
  dragabble?: boolean;
  thumbClassName?: string;
  imageClassName?: string;
  activeThumbClassName?: string;
  cardClassName?: string;
}

export default function SlideWithThumb({
  images,
  navigationLength = "md",
  navigationColor = "text-white",
  dragabble = true,
  thumbClassName,
  imageClassName = "object-contain object-center",
  activeThumbClassName,
  cardClassName,
}: SlideWithThumbProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`flex h-full w-full flex-col ${cardClassName}`}>
      <div className="min-h-0 flex-1">
        {/* Swiper principal */}
        <Swiper
          modules={[Thumbs, Navigation]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            nextEl: ".item-next",
            prevEl: ".item-prev",
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={dragabble}
          allowTouchMove={dragabble}
          simulateTouch={dragabble}
          className={`h-full w-full`}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className={`h-full w-full ${imageClassName}`}
              />
            </SwiperSlide>
          ))}

          {/* Seta anterior */}
          <button
            type="button"
            className="item-prev absolute top-1/2 left-0 z-10 flex h-[10%] -translate-y-1/2 items-center justify-center transition-transform duration-300 hover:scale-120 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-30"
            aria-label="Proximo"
          >
            <ChevronLeft
              className={`${
                navigationLength === "sm"
                  ? "h-10 w-10"
                  : navigationLength === "md"
                    ? "h-15 w-15 stroke-1"
                    : navigationLength === "lg"
                      ? "h-20 w-20 stroke-1"
                      : ""
              } ${navigationColor} z-1`}
            />
          </button>

          {/* Seta próxima */}
          <button
            type="button"
            className="item-next absolute top-1/2 right-0 z-10 flex h-[10%] -translate-y-1/2 items-center justify-center transition-transform duration-300 hover:scale-120 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronRight
              className={` ${
                navigationLength === "sm"
                  ? "h-10 w-10"
                  : navigationLength === "md"
                    ? "h-15 w-15 stroke-1"
                    : navigationLength === "lg"
                      ? "h-20 w-20 stroke-1"
                      : ""
              } ${navigationColor} z-1`}
            />
          </button>
        </Swiper>
      </div>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={8}
        slidesPerView={5}
        watchSlidesProgress
        className={`mt-2 h-auto w-full shrink-0`}
      >
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={index}>
              <div
                className={`aspect-square cursor-grab overflow-hidden transition-all duration-200 ${
                  isActive
                    ? `${activeThumbClassName} border opacity-100`
                    : "border border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={150}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className={`${thumbClassName} aspect-square object-contain`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

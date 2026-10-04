"use client";
import Image from "next/image";
import AnimatedTabs from "./AnimatedTabs";
import Link from "next/link";

interface CardModeloProps {
  img_modelo_frente: string;
  img_modelo_costas: string;
  width: number;
  height: number;
  titulo: string;
  texto: string;
  imgAntes?: boolean;
  alt?: string;
  background?: string;
  textColor?: string;
  classNameImage?: string;
  larguraImagem?: string;
  tamanhoImagem?: string;
  logoColor?: string;
  linkCamisa?: string;
  buttonTextColor?: string;
  buttonShadowColor?: string;
  contentAspect?: "portrait" | "landscape";
  //   Tabs
  textSecondaryColor?: string;
  buttonColor?: string;
  lineColor?: string;
  tabsPosition?: "top" | "bottom";
}

export default function CardModelo({
  img_modelo_frente,
  img_modelo_costas,
  alt = "",
  width,
  height,
  titulo,
  texto,
  imgAntes = true,
  background = "bg-white",
  textColor = "text-black",
  textSecondaryColor = "text-black/50",
  classNameImage = "object-cover object-top",
  larguraImagem = "w-sm",
  tamanhoImagem = "h-auto",
  logoColor = "black",
  linkCamisa = "#pecas",
  buttonColor = "bg-black",
  buttonTextColor = "text-white",
  buttonShadowColor = "hover:shadow-white/50",
  lineColor = "border-black/25",
  contentAspect = "portrait",
  tabsPosition = "top",
}: CardModeloProps) {
  return (
    <div
      className={`group relative flex h-full w-full flex-col items-center justify-center gap-5 brightness-100 transition-all duration-500 select-none hover:brightness-100 lg:flex-row lg:brightness-80 ${background} px-12`}
    >
      <h1
        className={`font-metrim z-10 text-center text-4xl tracking-widest uppercase lg:hidden ${textColor}`}
      >
        {titulo}
      </h1>
      <div className={`relative ${imgAntes ? "lg:order-1" : "lg:order-2"}`}>
        <div className={`relative flex ${larguraImagem}`}>
          <AnimatedTabs
            animation="flip"
            tabsAlign="center"
            tabsPosition={tabsPosition}
            activeColor={buttonColor}
            textColor={textColor}
            textSecondaryColor={textSecondaryColor}
            lineColor={lineColor}
            tabs={[
              {
                label: "Frente",
                content: (
                  <div
                    className={`relative flex rounded-2xl bg-linear-to-b from-gray-500 to-gray-700 transition-transform ${contentAspect === "portrait" ? "h-auto lg:h-[75svh]" : "h-auto"} w-full`}
                  >
                    <Image
                      src={img_modelo_frente}
                      alt={alt}
                      width={width}
                      height={height}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className={`${classNameImage} ${tamanhoImagem}`}
                    />
                  </div>
                ),
              },
              {
                label: "Costas",
                content: (
                  <div
                    className={`relative flex rounded-2xl bg-linear-to-b from-gray-500 to-gray-700 transition-transform ${contentAspect === "portrait" ? "lg:h-[75svh]" : "lg:h-auto"} w-full`}
                  >
                    <Image
                      src={img_modelo_costas}
                      alt={alt}
                      width={width}
                      height={height}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className={`${classNameImage} ${tamanhoImagem}`}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div
        className={`relative ${imgAntes ? "lg:order-2" : "lg:order-1"} flex flex-col items-center gap-5`}
      >
        {/* Logo Hover */}
        <div className="absolute inset-0 top-[62%] left-1/2 z-0 h-auto w-60 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={`/Details/serp-simbolo-${logoColor}.png`}
            alt=""
            fill
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`animate-image-pulse object-contain opacity-0 transition-opacity duration-1000 group-hover:opacity-10`}
          />
        </div>
        {/* Conteúdo Texto */}
        <h1
          className={`font-metrim z-10 hidden text-center text-4xl tracking-widest uppercase lg:mt-20 lg:mb-2 lg:flex ${textColor}`}
        >
          {titulo}
        </h1>
        <p
          className={`z-10 w-full text-center text-sm lg:text-xl ${textSecondaryColor}`}
        >
          {texto}
        </p>
        <span
          className={`font-montserrat z-10 text-2xl font-bold lg:mt-40 lg:text-5xl ${textColor}`}
        >
          R$ 197,00
        </span>
        <Link
          href={linkCamisa}
          //   target="_blank"
          className={`${buttonColor} ${buttonTextColor} z-10 flex w-[15vh] items-center justify-center rounded-lg py-2 transition-all hover:scale-105 hover:shadow-lg lg:mt-5 lg:w-30 ${buttonShadowColor}`}
        >
          Encomendar
        </Link>
      </div>
    </div>
  );
}

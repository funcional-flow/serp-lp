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
  classNameImage,
  larguraImagem = "w-sm",
  tamanhoImagem = "h-auto",
  logoColor = "black",
  linkCamisa = "#pecas",
  buttonColor = "bg-black",
  buttonTextColor = "text-white",
  buttonShadowColor = "hover:shadow-white/50",
  lineColor = "border-black/25",
  contentAspect = "portrait",
}: CardModeloProps) {
  return (
    <div
      className={`group relative flex h-full w-full items-center justify-center gap-5 brightness-80 transition-all duration-500 select-none hover:brightness-100 ${background} px-12`}
    >
      <div
        className={`relative ${imgAntes ? "order-2" : "order-1"} flex flex-col items-center gap-5`}
      >
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
        <h1
          className={`font-metrim z-10 mt-20 mb-2 text-center text-4xl tracking-widest uppercase ${textColor}`}
        >
          {titulo}
        </h1>
        <p className={`z-10 w-full text-center text-xl ${textSecondaryColor}`}>
          {texto}
        </p>
        <span
          className={`font-montserrat z-10 mt-40 text-5xl font-bold ${textColor}`}
        >
          R$ 197,00
        </span>
        <Link
          href={linkCamisa}
        //   target="_blank"
          className={`${buttonColor} ${buttonTextColor} z-10 mt-5 flex w-30 items-center justify-center rounded-lg py-2 transition-all hover:scale-105 hover:shadow-lg ${buttonShadowColor}`}
        >
          Encomendar
        </Link>
      </div>
      <div className={`relative ${imgAntes ? "order-1" : "order-2"}`}>
        <div className={`relative flex ${larguraImagem}`}>
          <AnimatedTabs
            animation="flip"
            tabsAlign="center"
            tabsPosition="top"
            activeColor={buttonColor}
            textColor={textColor}
            textSecondaryColor={textSecondaryColor}
            lineColor={lineColor}
            tabs={[
              {
                label: "Frente",
                content: (
                  <div
                    className={`relative flex rounded-2xl bg-linear-to-b from-gray-500 to-gray-700 transition-transform ${contentAspect === "portrait" ? "h-[75svh]" : "h-auto"} w-full`}
                  >
                    <Image
                      src={img_modelo_frente}
                      alt={alt}
                      width={width}
                      height={height}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className={`${classNameImage} ${larguraImagem} ${tamanhoImagem} object-cover object-top`}
                    />
                  </div>
                ),
              },
              {
                label: "Costas",
                content: (
                  <div
                    className={`relative flex rounded-2xl bg-linear-to-b from-gray-500 to-gray-700 transition-transform ${contentAspect === "portrait" ? "h-[75svh]" : "h-auto"} w-full`}
                  >
                    <Image
                      src={img_modelo_costas}
                      alt={alt}
                      width={width}
                      height={height}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className={`${classNameImage} ${larguraImagem} h-auto object-cover object-top`}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

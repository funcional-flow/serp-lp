import Image from "next/image";
import { qualidadadeClassica } from "@/config/qualidade_dados";
import ScaleOnScroll from "./gsap/ScaleOnScroll";
import TiltCard from "./gsap/TiltCard";

interface QualidadeCardDeskProps {
  title: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  image1: string;
  image2: string;
}

export default function QualidadeCardDesk({
  title,
  backgroundColor,
  titleColor,
  textColor,
  image1,
  image2,
}: QualidadeCardDeskProps) {
  return (
    <div className="flex h-full w-full flex-col justify-center py-6 select-none">
      <div className="flex items-center justify-center">
        {/* Imagem Esquerda */}
        <div className="flex w-1/3 flex-col items-center gap-5">
          <ScaleOnScroll
            scale={{ from: 1, to: 0 }}
            opacity={{ from: 1, to: 1 }}
            className="flex w-full flex-col"
          >
            <div className={`relative h-140 w-full`}>
              <Image
                src={image1}
                alt="Qualidade 1"
                fill
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="h-full w-full object-contain"
              />
            </div>
          </ScaleOnScroll>
          <ScaleOnScroll
            scale={{ from: 1, to: 1 }}
            opacity={{ from: 1, to: 0 }}
            className="relative flex h-full w-full items-center justify-center"
            startAnimation="top center"
            endAnimation="top top+=100"
          >
            <span className={`font-metrim text-3xl uppercase ${textColor}`}>
              serp
            </span>
          </ScaleOnScroll>
        </div>
        {/* Texto do Meio */}
        <div className="flex w-1/3 flex-col gap-4">
          <h2 className={`mx-auto mb-8`}>
            <TiltCard
              className={`font-metrim max-w-full rounded-lg ${backgroundColor} px-5 py-5 text-center text-3xl tracking-widest ${titleColor} uppercase shadow-lg shadow-gray-500`}

              contentClassName=""
            >
              {title}
            </TiltCard>
          </h2>
          {qualidadadeClassica.map((item) => (
            <div
              className="group mx-auto flex min-w-58 flex-col gap-6 transition-transform duration-200 hover:scale-105"
              key={item.titulo}
            >
              <div className="flex items-center gap-5">
                <item.icone
                  className={`h-7 w-7 ${textColor} group-hover:text-gray-500`}
                />
                <div
                  className={`flex flex-col ${textColor} group-hover:text-gray-600`}
                >
                  <h3 className="text-base font-bold uppercase">
                    {item.titulo}
                  </h3>
                  <span className="text-sm">{item.descricao}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Imagem Direita */}
        <div className="flex w-1/3 flex-col items-center gap-5">
          <ScaleOnScroll
            scale={{ from: 1, to: 0 }}
            opacity={{ from: 1, to: 1 }}
            className="w-full"
          >
            <div className="relative h-140 w-full">
              <Image
                src={image2}
                alt="Qualidade 2"
                fill
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="h-full w-full object-contain"
              />
            </div>
          </ScaleOnScroll>
          <ScaleOnScroll
            scale={{ from: 1, to: 1 }}
            opacity={{ from: 1, to: 0 }}
            className="relative flex h-full w-full items-center justify-center"
            startAnimation="top center"
            endAnimation="top top+=100"
          >
            <span className={`font-metrim text-3xl uppercase ${textColor}`}>
              minimal
            </span>
          </ScaleOnScroll>
        </div>
      </div>
    </div>
  );
}

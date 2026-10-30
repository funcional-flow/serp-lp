"use client";

import LogoLoop from "@/components/reactbits/LogoLoop";
import DepoimentoCard from "@/components/DepoimentoCard";
import Image from "next/image";
import { depoimentos } from "@/config/depoimentos_dados";

export default function Depoimentos() {
  return (
    <div className="relative flex h-[115svh] min-h-[115svh] w-full flex-col items-center justify-center bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/chao2.jpg"
          alt="Chão"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative flex flex-col items-center gap-2 pb-[3vh] lg:pb-10">
        <h1 className="font-metrim text-2xl uppercase lg:text-6xl">
          serpentize
        </h1>
        <span className="text-sm uppercase lg:text-lg">
          MOVEMENT WITH INTENTION
        </span>
      </div>
      <div className="relative h-auto w-full lg:mb-3">
        <LogoLoop
          logos={depoimentos.map((depoimento) => ({
            node: (
              <DepoimentoCard
                key={depoimento.key}
                title={depoimento.title}
                rate={depoimento.rate}
                description={depoimento.description}
              />
            ),
          }))}
          fadeOut={true}
          logoHeight={{ mobile: 35, desktop: 65 }}
          gap={{ mobile: 20, desktop: 60 }}
          fadeOutColor="#000000"
          direction="left"
          //   gap={20}
          altura="h-auto lg:h-65"
        />
      </div>
      <div className="relative h-auto w-full lg:mb-3">
        <LogoLoop
          logos={depoimentos.map((depoimento) => ({
            node: (
              <DepoimentoCard
                key={depoimento.key}
                title={depoimento.title}
                rate={depoimento.rate}
                description={depoimento.description}
              />
            ),
          }))}
          fadeOut={true}
          logoHeight={{ mobile: 35, desktop: 65 }}
          gap={{ mobile: 20, desktop: 60 }}
          fadeOutColor="#000000"
          direction="right"
          altura="h-auto lg:h-65"
        />
      </div>
      <div className="relative">
        <button className="mt-[6vh] rounded-xl bg-white px-10 py-4 text-sm font-bold text-black uppercase transition-transform duration-200 hover:scale-105 hover:cursor-pointer lg:mt-20 lg:px-16 lg:text-lg">
          Quero Encomendar Agora
        </button>
      </div>
    </div>
  );
}

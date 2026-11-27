"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import SerpCarousel from "@/components/SerpCarousel";
import ScrollTransition from "@/components/gsap/ScrollTransition";
import Modelos from "@/widgets/Modelos";
import Manifesto from "@/widgets/Manifesto";
import LifeStyle from "@/widgets/LifeStyle";
import Qualidade from "@/widgets/Qualidade";
import Depoimentos from "@/widgets/Depoimentos";
import Faq from "@/widgets/Faq";
import Cta from "@/widgets/Cta";
import Simbologia from "@/widgets/Simbologia";
import ImageSequenceFixed from "@/components/gsap/ImageSequenceFixed";
import {
  imageSequenceDesktop,
  imageSequenceMobile,
} from "@/config/image_sequence_config";
import QualidadeCardMobile from "@/components/QualidadeCardMobile";
import LogoLoop from "@/components/reactbits/LogoLoop";
import { logosBranca, logosPreta } from "@/config/logos";
import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";
import { ArrowDown } from "lucide-react";
import QualidadeHero from "@/widgets/QualidadeHero";
import Footer from "@/widgets/Footer";
import ModelosHero from "@/widgets/ModelosHero";
import {
  ModeloMinimalBoxy,
  ModeloMinimalClassica,
  ModeloMinimalRegata,
  ModeloSerpBoxy,
  ModeloSerpClassica,
  ModeloSerpRegata,
} from "@/config/modelos_dados";

export default function Home() {
  const [loading, setLoading] = useState(true);

  //   effect gl (1000ms):fade, wave-x, peel-x, stretch, ripple, morph-y

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {/* <header className="fixed top-0 left-0 w-full z-1000 bg-white">Dale</header> */}
      <main className="w-full">
        <section id="inicio" className=""></section>
        <ImageSequenceFixed
          responsive={{
            desktop: imageSequenceDesktop,
            mobile: imageSequenceMobile,
          }}
        />

        <section key="hero" id="hero" className="relative z-0 overflow-hidden">
          <SerpCarousel />
        </section>

        <section
          id="divisao11"
          className="relative h-[30vh] w-full bg-transparent"
        />

        {/* <section
          id="faixaSuperior"
          className="relative flex h-auto w-full flex-col bg-black"
        >
          <LogoLoop
            logos={logosBranca}
            fadeOut
            logoHeight={{ mobile: 40, desktop: 65 }}
            gap={{ mobile: 40, desktop: 60 }}
            fadeOutColor="var(--color-black)"
            ariaLabel="Serpentize"
            className="bg-black"
          />
        </section> */}

        <section id="modeloSerpHero" className="relative z-1">
          <ModelosHero
            preTitle="Para quem não tem medo de se destacar"
            title="Modelo SERP"
            description="Estampas marcantes, composições expressivas e personalidade em cada detalhe. Conheça os modelos SERP e descubra peças que transformam o visual em uma forma de expressão."
          />
        </section>

        <section id="modelosSerp" className="relative z-1 bg-transparent">
          <Modelos
            boxy={ModeloSerpBoxy}
            classica={ModeloSerpClassica}
            regata={ModeloSerpRegata}
          />
        </section>

        <section id="modeloMinimalHero" className="relative z-1">
          <ModelosHero
            preTitle="A beleza está na simplicidade"
            title="Modelo MINIMAL"
            description="Linhas sutis, estampas discretas e uma estética que valoriza o essencial. Conheça os modelos MINIMAL e descubra como pequenos detalhes podem fazer toda a diferença."
            textColor="text-black"
            textSecondaryColor="text-black/60"
          />
        </section>

        <section id="modelosMinimal" className="relative z-1 bg-transparent">
          <Modelos
            boxy={ModeloMinimalBoxy}
            classica={ModeloMinimalClassica}
            regata={ModeloMinimalRegata}
            divisoria="via-black/15"
          />
        </section>

        {/* <section
          id="faixaInferior"
          className="relative flex h-auto w-full flex-col bg-black"
        >
          <LogoLoop
            logos={logosPreta}
            fadeOut
            logoHeight={{ mobile: 40, desktop: 65 }}
            gap={{ mobile: 40, desktop: 60 }}
            fadeOutColor="var(--color-white)"
            ariaLabel="Serpentize"
            className="bg-white"
            direction="right"
          />
        </section> */}

        <section
          id="divisao21"
          className="relative h-[30vh] w-full bg-transparent"
        />

        <section id="qualidadeHero" className="relative z-1">
          <QualidadeHero />
        </section>

        <section
          id="qualidadeBoxy"
          className="relative z-1 overflow-hidden lg:overflow-visible"
        >
          <Qualidade
            title="Modelo Boxy"
            backgroundColor="bg-black"
            titleColor="text-white"
            textColor="text-black"
            image1="/qualidade/camisa_cabide11.png"
            image2="/qualidade/camisa_cabide11.png"
          />
        </section>

        <section
          id="divisao22"
          className="relative h-[50vh] w-full bg-transparent"
        />

        <section
          id="qualidadeClassica"
          className="relative z-1 overflow-hidden lg:overflow-visible"
        >
          <Qualidade
            title="Modelo Classica"
            backgroundColor="bg-white lg:bg-black"
            titleColor="text-black lg:text-white"
            textColor="text-white lg:text-black"
            image1="/qualidade/camisa_cabide11.png"
            image2="/qualidade/camisa_cabide11.png"
            imageBackground={true}
          />
        </section>

        <section
          id="divisao23"
          className="relative h-[50vh] w-full bg-transparent"
        />

        <section
          id="qualidadeRegata"
          className="relative z-1 overflow-hidden lg:overflow-visible"
        >
          <Qualidade
            title="Modelo Regata"
            backgroundColor="bg-black"
            titleColor="text-white"
            textColor="text-black"
            image1="/qualidade/camisa_cabide11.png"
            image2="/qualidade/camisa_cabide11.png"
          />
        </section>

        <section
          id="divisao31"
          className="relative h-[150vh] w-full bg-transparent"
        />

        <section id="simbologia" className="relative z-1">
          <ScaleOnScroll
            scale={{ from: 1, to: 0 }}
            opacity={{ from: 1, to: 0 }}
            startAnimation="top top-=50"
            endAnimation="+=1000"
            className="lg:hidden"
          >
            <Simbologia />
          </ScaleOnScroll>
          <div className="hidden lg:block">
            <Simbologia />
          </div>
        </section>

        <section id="lifestyle" className="sticky top-0 z-1 lg:relative">
          <LifeStyle />
        </section>

        <section id="depoimentos" className="relative z-2">
          <Depoimentos />
        </section>

        <section id="faq" className="relative z-2">
          <Faq />
        </section>

        <section id="cta" className="relative z-2 overflow-hidden">
          <Cta />
        </section>

        <footer className="relative z-2 lg:block">
          <Footer />
        </footer>
      </main>
    </>
  );
}

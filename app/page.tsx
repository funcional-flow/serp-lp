"use client";

import { useState } from "react";
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
import SerpVideo from "@/widgets/SerpVideo";
import ImageSequence from "@/components/gsap/ImageSequence";
import ImageSequenceFixed from "@/components/gsap/ImageSequenceFixed";
import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";
import { video_serp_1, video_serp_2, video_serp_3 } from "@/config/videos_frames";

export default function Home() {
  const [loading, setLoading] = useState(true);

  //   effect gl (1000ms):fade, wave-x, peel-x, stretch, ripple, morph-y

  return (
    <>
      {/* {loading && <Preloader onComplete={() => setLoading(false)} />} */}
      {/* <header className="fixed top-0 left-0 w-full z-1000 bg-white">Dale</header> */}
      <main className="w-full">
        <ImageSequenceFixed
          duration={9000}
          animationStart={0}
          fullPageScroll={false}
          scrub={true}
          background="transparent"
          className="z-0"
          images={[...video_serp_1.slice(40), ...video_serp_2.slice(60, 120), ...video_serp_3.slice(104)]} // o slice é o intervalo que quer os frames, poderia ser slice(50,120) - primeiro e ultimo-1
          canvasWidth={1080}
          canvasHeight={1920}
          canvasClassName="w-full"
          fit="cover"
          objectPosition="top"
          overlayIntervals={[
            {
              start: 2750,
              peak: 3300,
              holdEnd: 3400,
              end: 3450,
              color: "#000000",
            },
            {
              start: 3500,
              peak: 3550,
              holdEnd: 3650,
              end: 4000,
              color: "#FFFFFF",
            },
            {
              start: 5300,
              peak: 5700,
              holdEnd: 6100,
              end: 6800,
              color: "#18181b",
            },
            {
              start: 7700,
              peak: 8250,
              holdEnd: 12000,
              end: 12011,
              color: "#EBEBEB",
            },
          ]}
        />
        <ScrollTransition
          background="bg-gray-400"
          transitionDuration={1000}
          className="relative"
          //   scaleDownFrom={1.05}
          panels={[
            <section
              key="carousel"
              id="carousel"
              className="relative z-0 overflow-hidden"
            >
              <SerpCarousel />
            </section>,
            <section key="manifesto" id="manifesto" className="relative z-1">
              <Manifesto />
            </section>,
          ]}
        />

        <section
          id="divisao11"
          className="relative h-[150vh] w-full bg-transparent"
        />

        <section id="modelos" className="bg-background relative z-1">
          <Modelos />
        </section>

        <section
          id="divisao21"
          className="relative h-[150vh] w-full bg-transparent"
        />

        <section
          id="qualidade"
          className="relative z-1 hidden overflow-hidden lg:block lg:overflow-visible"
        >
          <Qualidade />
        </section>

        <section
          id="divisao21"
          className="relative h-[150vh] w-full bg-transparent"
        />

        <section id="simbologia" className="relative z-1 hidden lg:block">
          <Simbologia />
        </section>

        <section id="lifestyle" className="relative z-1 hidden lg:block">
          <LifeStyle />
        </section>

        <section id="depoimentos" className="relative z-1 hidden lg:block">
          <Depoimentos />
        </section>

        <section
          id="faq"
          className="sticky top-0 z-1 hidden overflow-hidden lg:block"
        >
          <Faq />
        </section>

        <section
          id="cta"
          className="relative z-1 hidden overflow-hidden lg:block"
        >
          <Cta />
        </section>

        <footer className="relative z-10 hidden bg-gray-500 lg:block">
          <div className="container mx-auto px-4">
            <p className="text-white">
              © 2026 Serpentize. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

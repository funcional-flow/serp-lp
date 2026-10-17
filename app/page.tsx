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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const video_serp_1 = Array.from({ length: 120 }, (_, index) => {
    //   const frame = String(index + 1);
    const frame = String(index + 1).padStart(3, "0");

    return `/video_serp_1/frame_${frame}.jpg`;
  });
  const video_serp_2 = Array.from({ length: 118 }, (_, index) => {
    const frame = String(index + 1);
    // const frame = String(index + 1).padStart(3, "0");

    return `/video_serp_2/frame (${frame}).jpg`;
  });

  //   effect gl (1000ms):fade, wave-x, peel-x, stretch, ripple, morph-y

  return (
    <>
      {/* {loading && <Preloader onComplete={() => setLoading(false)} />} */}
      {/* <header className="fixed top-0 left-0 w-full z-1000 bg-white">Dale</header> */}
      <main className="w-full">
        <ImageSequenceFixed
          duration={8000}
          fullPageScroll={false}
          scrub={true}
          background="#000"
          className="z-0"
          images={[...video_serp_1, ...video_serp_2]}
          canvasWidth={1080}
          canvasHeight={1920}
          canvasClassName="w-full"
          fit="cover"
          objectPosition="top"
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

        {/* <section
          id="divisao1"
          className="relative h-screen w-full bg-linear-to-b from-gray-300 to-transparent"
        /> */}
        <section
          id="divisao11"
          className="relative h-screen w-full bg-transparent"
        />
        <section
          id="divisao12"
          className="relative h-screen w-full bg-linear-to-b from-transparent to-black"
        />

        <section id="modelos" className="bg-background relative z-1">
          <Modelos />
        </section>

        <section
          id="divisao21"
          className="relative h-screen w-full bg-transparent"
        />
        <section
          id="divisao22"
          className="relative h-screen w-full bg-linear-to-b from-transparent to-zinc-600"
        />

        <section
          id="qualidade"
          className="sticky top-0 z-1 hidden overflow-hidden lg:block lg:overflow-visible"
        >
          <Qualidade />
        </section>

        <section id="lifestyle" className="relative z-1 hidden lg:block">
          <LifeStyle />
        </section>

        <section id="depoimentos" className="relative z-1 hidden lg:block">
          <Depoimentos />
        </section>

        <section id="simbologia" className="relative z-1 hidden lg:block">
          <Simbologia />
        </section>

        {/* <section id="serpvideo" className="relative z-1 hidden lg:block">
          <SerpVideo />
        </section> */}

        <section
          id="faq"
          className="relative z-1 hidden overflow-hidden lg:block"
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

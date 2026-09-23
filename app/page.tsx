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

export default function Home() {
  const [loading, setLoading] = useState(true);
  //   const images = Array.from({ length: 109 }, (_, index) => {
  //     const frame = String(index + 1);
  //     // const frame = String(index + 1).padStart(3, "0");

  //     return `/serp_frames/frames (${frame}).jpg`;
  //   });

  //   effect gl (1000ms):fade, wave-x, peel-x, stretch, ripple, morph-y

  return (
    <>
      {/* {loading && <Preloader onComplete={() => setLoading(false)} />} */}
      {/* <header className="fixed top-0 left-0 w-full z-1000 bg-white">Dale</header> */}
      <main>
        <ScrollTransition
          background="bg-gray-400"
          transitionDuration={1250}
          className="hidden lg:block"
          //   scaleDownFrom={1.05}
          panels={[
            <section key="carousel" id="carousel" className="relative z-0">
              <SerpCarousel />
            </section>,
            <section key="manifesto" id="manifesto" className="relative z-1">
              <Manifesto />
            </section>,
          ]}
        />
        <section
          id="modelos"
          className="bg-background relative z-1 hidden lg:block"
        >
          <Modelos />
        </section>

        {/* <section id="diferenca" className="relative z-1 hidden lg:block lg:sticky lg:top-0">
          <DiferencaModelos />
        </section> */}
        <section
          id="qualidade"
          className="sticky top-0 z-1 hidden lg:block "
        >
          <Qualidade />
        </section>
        <section id="lifestyle" className="relative z-1 hidden lg:block">
          {/* <div className="flex h-svh w-full items-center justify-center bg-linear-to-b from-white to-gray-300 px-24">
            LifeStyle
          </div> */}
          <LifeStyle />
        </section>
        <section id="simbologia" className="relative z-1 hidden lg:block">
          <Simbologia />
        </section>
        <section id="depoimentos" className="relative z-1 hidden lg:block">
          <Depoimentos />
        </section>
        <section id="serpvideo" className="relative z-1 hidden lg:block">
          <SerpVideo />
        </section>
        <section id="faq" className="relative z-1 hidden lg:block">
          <Faq />
        </section>
        <section id="cta" className="relative z-1 hidden lg:block">
          <Cta />
        </section>
        <section
          id="final"
          className="bg-purple1 relative z-1 flex h-svh w-full flex-col items-center justify-center gap-5 select-none"
        >
          <h1 className="font-metrim text-yellow1 text-7xl uppercase">
            serpentize
          </h1>
          <span className="text-yellow1 text-xl">EM BREVE . . .</span>
        </section>
        <footer className="hidden lg:block">
          <div className="container mx-auto px-4">
            <p>© 2026 Serpentize. Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

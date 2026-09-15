"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SerpCarousel from "@/components/SerpCarousel";
import Details from "@/widgets/Details";
import ScrollTransition from "@/components/gsap/ScrollTransition";
import Modelos from "@/widgets/Modelos";

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
          //   scaleDownFrom={1.05}
          panels={[
            <section key="carousel" className="sticky top-0 z-0 lg:sticky">
              <SerpCarousel />
            </section>,
            <section key="details" className="relative z-1">
              <Details />
            </section>,
          ]}
        />
        <section
          key="modelos"
          id="pecas"
          className="bg-background relative z-1"
        >
          <Modelos />
        </section>
        <section className="relative bg-white z-1">detalhes das peças / diferença das peças</section>
        <section
          id="final"
          className="bg-purple1 relative z-1 flex h-svh flex-col items-center justify-center gap-5 select-none"
        >
          <h1 className="font-metrim text-yellow1 text-7xl uppercase">
            serpentize
          </h1>
          <span className="text-yellow1 text-xl">EM BREVE . . .</span>
        </section>
      </main>
    </>
  );
}

"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SerpCarousel from "@/components/SerpCarousel";
import ImageSequence from "@/components/gsap/ImageSequence";
import Details from "@/widgets/Details";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const images = Array.from({ length: 109 }, (_, index) => {
    const frame = String(index + 1);
    // const frame = String(index + 1).padStart(3, "0");

    return `/serp_frames/frames (${frame}).jpg`;
  });

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <main>
        <section className="sticky top-0 z-0 lg:sticky">
          <SerpCarousel />
        </section>
        <section className="relative z-1 flex h-svh flex-col items-center justify-center bg-[#ababab] text-7xl">
          MAIS VENDIDOS
          <p>boxy - serp e minimal</p>
          <p>padrao - serp e minimal</p>
          <p>regata - serp e minimal</p>
        </section>
        {/* <section className="relative z-1 bg-white">
          <ImageSequence
            onFrameChange={(frame) => console.log(frame)}
            canvasWidth={1920}
            canvasHeight={1080}
            fit="contain"
            background="bg-[#ababab]"
            images={images}
            duration={2000}
          />
        </section> */}

        <section className="relative flex text-white h-svh items-center justify-center bg-purple1 text-7xl">
          Animação Camisa
        </section>
        <section className="bg-background relative z-1">
          <Details />
        </section>
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

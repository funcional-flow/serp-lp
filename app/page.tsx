"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SerpCarousel from "@/components/SerpCarousel";
import ImageSequence from "@/components/gsap/ImageSequence";

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
        <section className="relative z-20 bg-white">
          <ImageSequence
            onFrameChange={(frame) => console.log(frame)}
            canvasWidth={1920}
            canvasHeight={1080}
            fit="contain"
            background="bg-[#ababab]"
            images={images}
            duration={2000}
          />
        </section>
        <section className="select-none relative gap-5 z-20 flex flex-col h-svh items-center justify-center bg-purple1">
          <h1 className="text-7xl font-metrim uppercase text-yellow1">serpentize</h1>
          <span className="font-montserrat text-xl text-yellow1">EM BREVE . . .</span>
        </section>
      </main>
    </>
  );
}

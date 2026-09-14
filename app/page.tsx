"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SerpCarousel from "@/components/SerpCarousel";
import ImageSequence from "@/components/gsap/ImageSequence";
import Details from "@/widgets/Details";
import ScrollTransition from "@/components/gsap/ScrollTransition";
import Image from "next/image";
import Modelos from "@/widgets/Modelos";

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
      {/* <header className="fixed top-0 left-0 w-full z-1000 bg-white">Dale</header> */}
      <main>
        <section className="sticky top-0 z-0 lg:sticky">
          <SerpCarousel />
        </section>

        <section className="relative z-1">
          <Details />
        </section>

        <section id="pecas" className="bg-background relative z-1">
          <Modelos />
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

        {/* <ScrollTransition
        //   background="bg-linear-to-t from-white to-gray-400"
          first={
            <section className="sticky top-0 z-0 lg:relative">
              <SerpCarousel />
            </section>
          }
          second={
            <section id="pecas" className="bg-background relative z-1">
              <Details />
            </section>
          }
        /> */}
      </main>
    </>
  );
}

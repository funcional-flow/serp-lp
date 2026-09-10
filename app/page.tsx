"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SerpCarousel from "@/components/SerpCarousel";
import ImageSequence from "@/components/gsap/ImageSequence";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const images = Array.from({ length: 113 }, (_, index) => {
    const frame = String(index + 1).padStart(3, "0");

    return `/camisa_frames/frame_${frame}.jpg`;
  });

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <main>
        <section className="sticky top-0 z-0 lg:sticky">
          <SerpCarousel />
        </section>
        <section className="relative z-20 bg-white">
          <ImageSequence images={images} duration={2000} />
        </section>
        {/* <section className="relative z-20 h-svh bg-white">Deatlhes</section> */}
      </main>
    </>
  );
}

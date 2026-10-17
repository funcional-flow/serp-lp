"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=85",
    alt: "Paisagem ao entardecer",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=85",
    alt: "Montanhas e lago",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85",
    alt: "Floresta natural",
  },
];

export default function HeroGalleryTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // A imagem inicial escurece durante a transição.
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.45], [0, 0.8]);

  // A galeria sobe até cobrir completamente o hero.
  const galleryY = useTransform(scrollYProgress, [0, 0.65], ["100%", "0%"]);

  // A galeria termina totalmente opaca.
  const galleryBackgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7],
    [0, 0.5, 1],
  );

  return (
    <section ref={containerRef} className="relative h-[200svh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-zinc-950">
        {/* Imagem inicial em tela cheia */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=2400&q=90"
            alt="Paisagem inicial"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: heroOverlayOpacity }}
          />
        </div>

        {/* Segunda seção: fundo sólido */}

        {/* Fundo da segunda seção: transparente -> sólido */}
        {/* <motion.div
          className="absolute inset-0 z-10 bg-zinc-950"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.4, 0.7], [0, 0.8, 1]),
          }}
        /> */}

        {/* Fundo da segunda seção: transparente -> sólido */}
        <motion.div
          className="absolute inset-0 z-10 bg-zinc-950"
          style={{
            opacity: galleryBackgroundOpacity,
          }}
        />

        {/* Galeria sobe por cima da primeira imagem */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center px-4 py-12 md:px-12"
          style={{
            y: galleryY,
          }}
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className="relative h-[28svh] min-h-40 overflow-hidden rounded-xl sm:h-[55svh]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />

                <span className="absolute bottom-4 left-4 text-sm text-white">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

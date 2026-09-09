"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ConteudoCarousel from "./ConteudoCarousel";

const slides = [
  {
    content: (
      <ConteudoCarousel
        // Background
        img_background="/Hero/serp-marca-abreviada-preta1.png"
        w_img_background={618}
        h_img_background={343}
        className_background="w-5xl opacity-5 animate-image-pulse-reverse"
        // Modelo
        src="/modelo_woman2.png"
        width={553}
        height={862}
        className_img="w-134 pt-4 animate-image-pulse"
        // Card
        cor_card="bg-black"
        cor_card_secundaria="bg-white"
        cor_letra_card="text-gray-300"
        className_traco="top-28 left-78"
        cor_borda="border border-white"
        area_hover1="top-[23.5%] left-[46.5%] h-20 w-16"
        // Textos Gerais
        cor_textos1="text-black"
        cor_textos2="text-gray-600"
        cor_detalhes="bg-black/30"
      />
    ),
    background: "bg-linear-to-t from-white to-gray-400",
    controlsColor: "var(--color-black)",
  },
  {
    content: (
      <ConteudoCarousel
        // Modelo
        src="/modelo_woman1.png"
        width={333}
        height={862}
        className_img="w-xs pt-5 animate-image-pulse-reverse"
        // Background
        img_background="/Hero/serp-marca-abreviada-branca1.png"
        w_img_background={618}
        h_img_background={343}
        className_background="w-5xl opacity-5 animate-image-pulse"
        // Card
        cor_card="bg-white"
        cor_card_secundaria="bg-gray-700"
        cor_letra_card="text-gray-700"
        className_traco="top-35 left-80"
        cor_borda="border border-gray-700"
        area_hover1="top-[26%] left-[46.7%] h-24 w-20"
        // Textos Gerais
        cor_textos1="text-white/90"
        cor_textos2="text-gray-400"
        cor_detalhes="bg-white/30"
      />
    ),
    background: "bg-linear-to-b from-[#2b2b32] via-[#111217] to-[#050608]",
    controlsColor: "var(--color-white)",
  },
  //   {
  //     content: (
  //       <ConteudoCarousel
  //         src="/modelo_man3.png"
  //         img_background="/arquivos de marca/serp-marca-abreviada-branca.png"
  //         w_img_background={618}
  //         h_img_background={343}
  //         width={861}
  //         height={862}
  //         className_img="w-184 transition-transform duration-500"
  //         className_traco="top-26 left-88"
  //         cor_card="bg-white"
  //         cor_card_secundaria="bg-gray-400"
  //         cor_letra_card="text-gray-700"
  //         cor_borda="border border-gray-400"
  //         area_hover1="top-[23.5%] left-[46.5%] h-20 w-16"
  //       />
  //     ),
  //     background: "bg-linear-to-br from-yellow-900 to-[#e39c22]",
  //     controlsColor: "var(--color-black)",
  //   },
];

export default function SerpCarousel() {
  const [current, setCurrent] = useState(0);

  // ==========================================
  // REFS
  // ==========================================

  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  const backgroundCurrentRef = useRef<HTMLDivElement>(null);
  const backgroundNextRef = useRef<HTMLDivElement>(null);

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const isAnimating = useRef(false);

  // ==========================================
  // CONFIGURAÇÃO INICIAL
  // ==========================================

  useEffect(() => {
    // ------------------------------------------
    // SLIDES
    // ------------------------------------------

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;

      if (index === 0) {
        gsap.set(slide, {
          zIndex: 3,
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          filter: "blur(0px)",
        });
      } else {
        gsap.set(slide, {
          zIndex: 1,
          opacity: 0,
          scale: 0.7,
          x: 0,
          y: 0,
          rotateY: 0,
          filter: "blur(10px)",
        });
      }
    });

    // ------------------------------------------
    // BACKGROUND ATUAL
    // ------------------------------------------

    if (backgroundCurrentRef.current) {
      backgroundCurrentRef.current.className = `
        absolute
        inset-0
        z-0
        ${slides[0].background}
      `;

      gsap.set(backgroundCurrentRef.current, {
        opacity: 1,
      });
    }

    // ------------------------------------------
    // BACKGROUND PRÓXIMO
    // ------------------------------------------

    if (backgroundNextRef.current) {
      gsap.set(backgroundNextRef.current, {
        opacity: 0,
      });
    }

    // ------------------------------------------
    // COR DOS CONTROLES
    // ------------------------------------------

    const initialControlsColor = slides[0].controlsColor;

    if (prevButtonRef.current) {
      gsap.set(prevButtonRef.current, {
        color: initialControlsColor,
        borderColor: initialControlsColor,
      });
    }

    if (nextButtonRef.current) {
      gsap.set(nextButtonRef.current, {
        color: initialControlsColor,
        borderColor: initialControlsColor,
      });
    }

    if (counterRef.current) {
      gsap.set(counterRef.current, {
        color: initialControlsColor,
      });
    }
  }, []);

  // ==========================================
  // CALCULA PRÓXIMO ÍNDICE
  // ==========================================

  const getIndex = (offset: number) => {
    return (current + offset + slides.length) % slides.length;
  };

  // ==========================================
  // TROCA DE SLIDE
  // ==========================================

  const goTo = (direction: 1 | -1) => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    const nextIndex = getIndex(direction);

    const currentSlide = slidesRef.current[current];
    const nextSlide = slidesRef.current[nextIndex];

    const backgroundCurrent = backgroundCurrentRef.current;
    const backgroundNext = backgroundNextRef.current;

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    const counter = counterRef.current;

    // ------------------------------------------
    // VALIDAÇÃO
    // ------------------------------------------

    if (
      !currentSlide ||
      !nextSlide ||
      !backgroundCurrent ||
      !backgroundNext ||
      !prevButton ||
      !nextButton ||
      !counter
    ) {
      isAnimating.current = false;
      return;
    }

    // ==========================================
    // PREPARA PRÓXIMO SLIDE
    // ==========================================

    gsap.set(nextSlide, {
      zIndex: 2,
      opacity: 0,
      scale: 0.7,
      x: direction === 1 ? 80 : -80,
      y: 0,
      rotateY: direction === 1 ? -15 : 15,
      filter: "blur(10px)",
    });

    // ==========================================
    // PREPARA PRÓXIMO BACKGROUND
    // ==========================================

    backgroundNext.className = `
      absolute
      inset-0
      z-0
      ${slides[nextIndex].background}
    `;

    gsap.set(backgroundNext, {
      opacity: 0,
    });

    // ==========================================
    // TIMELINE
    // ==========================================

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(nextIndex);

        // ========================================
        // RESET DOS SLIDES
        // ========================================

        slidesRef.current.forEach((slide, index) => {
          if (!slide) return;

          if (index === nextIndex) {
            gsap.set(slide, {
              zIndex: 3,
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              filter: "blur(0px)",
            });
          } else {
            gsap.set(slide, {
              zIndex: 1,
              opacity: 0,
              scale: 0.7,
              x: 0,
              y: 0,
              rotateY: 0,
              filter: "blur(10px)",
            });
          }
        });

        // ========================================
        // RESET DOS BACKGROUNDS
        // ========================================

        backgroundCurrent.className = `
          absolute
          inset-0
          z-0
          ${slides[nextIndex].background}
        `;

        gsap.set(backgroundCurrent, {
          opacity: 1,
        });

        gsap.set(backgroundNext, {
          opacity: 0,
        });

        isAnimating.current = false;
      },
    });

    // ==========================================
    // 1. FADE DO BACKGROUND
    // ==========================================

    tl.to(
      backgroundNext,
      {
        opacity: 1,
        duration: 0.65,
        ease: "power2.inOut",
      },
      0,
    );

    // ==========================================
    // 2. FADE DA COR DOS CONTROLES
    // ==========================================

    tl.to(
      [prevButton, nextButton, counter],
      {
        color: slides[nextIndex].controlsColor,
        borderColor: slides[nextIndex].controlsColor,
        duration: 0,
        ease: "power2.inOut",
      },
      0,
    );

    // ==========================================
    // 3. SLIDE ATUAL SAI
    // ==========================================

    tl.to(
      currentSlide,
      {
        x: direction === 1 ? -120 : 120,
        scale: 0.85,
        rotateY: direction === 1 ? 12 : -12,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.65,
        ease: "power3.in",
      },
      0,
    );

    // ==========================================
    // 4. PRÓXIMO SLIDE ENTRA
    // ==========================================

    tl.to(
      nextSlide,
      {
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.65,
        ease: "power3.out",
      },
      0.7,
    );
  };

  return (
    <section className="sticky top-0 z-0 h-screen w-full overflow-hidden">
      {/* =========================================
          BACKGROUND ATUAL
      ========================================= */}

      <div
        ref={backgroundCurrentRef}
        className={`absolute inset-0 z-0 ${slides[0].background} `}
      />

      {/* =========================================
          PRÓXIMO BACKGROUND
      ========================================= */}

      <div ref={backgroundNextRef} className="absolute inset-0 z-0" />

      {/* =========================================
          SLIDES
      ========================================= */}

      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          perspective: "1600px",
          transformStyle: "preserve-3d",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(element) => {
              slidesRef.current[index] = element;
            }}
            // className="
            //   absolute
            //   flex
            //   h-[70vh]
            //   w-[min(70vw,900px)]
            //   items-center
            //   justify-center
            // "
            className="absolute inset-0 items-center justify-center"
            style={{
              zIndex: index === 0 ? 3 : 1,
              opacity: index === 0 ? 1 : 0,
              transformStyle: "preserve-3d",
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* =========================================
          SETAS
      ========================================= */}

      <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 items-center gap-8">
        <button
          ref={prevButtonRef}
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Imagem anterior"
          className="cursor-pointer rounded-full border px-2 py-1.5 text-3xl font-light opacity-60 transition-all duration-300 hover:scale-125 hover:opacity-100 active:scale-100"
        >
          ←
        </button>

        <button
          ref={nextButtonRef}
          type="button"
          onClick={() => goTo(1)}
          aria-label="Próxima imagem"
          className="cursor-pointer rounded-full border px-2 py-1.5 text-3xl font-light opacity-60 transition-all duration-300 hover:scale-125 hover:opacity-100 active:scale-100"
        >
          →
        </button>
      </div>

      {/* =========================================
          CONTADOR
      ========================================= */}

      <div
        ref={counterRef}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs tracking-[0.4em] opacity-60"
      >
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ConteudoCarousel from "./ConteudoCarousel";

const slides = [
  {
    content: <ConteudoCarousel src="/modelo_man.jfif" width={1408} height={768} className="w-6xl" />,
    background: "bg-linear-to-tr from-purple1 via-gray-900 to-black",
    controlsColor: "var(--color-white)",
  },
  {
    content: <ConteudoCarousel src="/modelo_woman.jfif" width={1408} height={768} className="w-6xl" />,
    background: "bg-linear-to-tr from-black via-gray-900 to-purple1",
    controlsColor: "var(--color-yellow-400)",
  },
  {
    content: <ConteudoCarousel src="/Hero/serp-marca-abreviada-branca.png" />,
    background: "bg-black",
    controlsColor: "var(--color-white)",
  },
  {
    content: <ConteudoCarousel src="/Hero/serp-marca-abreviada-amarela.png" />,
    background: "bg-purple1",
    controlsColor: "var(--color-yellow-400)",
  },
  {
    content: <ConteudoCarousel src="/Hero/serp-marca-abreviada-roxa.png" />,
    background: "bg-yellow1",
    controlsColor: "var(--color-purple1)",
  },
  {
    content: <ConteudoCarousel src="/Hero/serp-marca-abreviada-preta.png" />,
    background: "bg-white",
    controlsColor: "var(--color-black)",
  },
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
    <section className="relative h-screen w-full overflow-hidden">
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

      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8">
        <button
          ref={prevButtonRef}
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Imagem anterior"
          className="rounded-full border px-2 py-1 text-3xl font-light opacity-60 transition-all duration-300 hover:scale-125 hover:opacity-100 active:scale-100"
        >
          ←
        </button>

        <button
          ref={nextButtonRef}
          type="button"
          onClick={() => goTo(1)}
          aria-label="Próxima imagem"
          className="rounded-full border px-2 py-1 text-3xl font-light opacity-60 transition-all duration-300 hover:scale-125 hover:opacity-100 active:scale-100"
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

"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScaleOnScrollProps {
  children: ReactNode;

  /**
   * Configurações da animação do conteúdo
   */
  scale?: {
    from?: number;
    to?: number;
  };
  opacity?: {
    from?: number;
    to?: number;
  };

  /**
   * Configurações do ScrollTrigger
   */
  startAnimation?: string;
  endAnimation?: string;

  /**
   * Configurações do background
   */
  background?: {
    from?: string;
    to?: string;
  };

  /**
   * Classes adicionais do container
   */
  className?: string;

  /**
   * Classes adicionais do conteúdo
   */
  contentClassName?: string;
}

export default function ScaleOnScroll({
  children,

  scale = { from: 1, to: 0.85 },
  opacity = { from: 1, to: 1 },

  // "ELEMENT_POSITION VIEWPORT_POSITION"
  startAnimation = "top top", // Ex: "top top", "center center", "bottom bottom", "top center", "top 80%", "top 200px", "top+=100", "top top-=100"
  endAnimation = "+=1000", // Ex: "+=500", "bottom top", "center center"

  background,

  className = "",
  contentClassName = "",
}: ScaleOnScrollProps) {
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current || !content.current) return;

      const scrollTrigger = {
        trigger: container.current,
        // "ELEMENT_POSITION VIEWPORT_POSITION"
        start: startAnimation,
        end: endAnimation,
        scrub: true,
      };

      /**
       * =========================
       * CONTEÚDO
       * =========================
       */
      gsap.fromTo(
        content.current,
        {
          scale: scale.from, // Pode fazer tambem: reverse ? 0 : 1
          opacity: opacity.from,
        },
        {
          scale: scale.to,
          opacity: opacity.to,
          ease: "none",
          scrollTrigger,
        },
      );

      /**
       * =========================
       * BACKGROUND
       * =========================
       */
      if (background && backgroundRef.current) {
        gsap.fromTo(
          backgroundRef.current,
          {
            backgroundColor: background.from,
          },
          {
            backgroundColor: background.to,
            ease: "none",
            scrollTrigger,
          },
        );
      }
    },
    {
      scope: container,
    },
  );

  return (
    <div
      ref={container}
      className={`relative isolate ${className}`}
    >
      {/* Background */}
      {background && (
        <div
          ref={backgroundRef}
          className="pointer-events-none absolute inset-0 -z-10"
        />
      )}
      {/* Conteúdo */}
      <div ref={content} className={`relative ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}

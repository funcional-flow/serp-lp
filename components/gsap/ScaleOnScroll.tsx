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
  scale?: number;
  opacity?: number;

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

  scale = 0.85,
  opacity = 1,

  startAnimation = "top",
  endAnimation = "+=1000",

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
        start: `${startAnimation} top`,
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
          scale: 1,
          opacity: 1,
        },
        {
          scale,
          opacity,
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
    <div ref={container} className={`relative isolate ${className}`}>
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

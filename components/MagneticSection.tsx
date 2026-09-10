"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface MagneticSectionProps {
  children: ReactNode;

  className?: string;

  /**
   * Distância máxima do topo
   * para ativar o efeito magnético.
   *
   * @default 100
   */
  threshold?: number;

  /**
   * Duração da atração.
   *
   * @default 0.5
   */
  duration?: number;
}

export default function MagneticSection({
  children,

  className = "",

  threshold = 100,

  duration = 0.5,
}: MagneticSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const isAnimatingRef = useRef(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,

      start: `top top+=${threshold}`,

      end: `top top-=${threshold}`,

      onEnter: () => {
        if (isAnimatingRef.current) {
          return;
        }

        isAnimatingRef.current = true;

        gsap.to(window, {
          scrollTo: section,

          duration,

          ease: "power2.out",

          onComplete: () => {
            isAnimatingRef.current = false;
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [threshold, duration]);

  return (
    <section ref={sectionRef} className={`relative ${className}`}>
      {children}
    </section>
  );
}

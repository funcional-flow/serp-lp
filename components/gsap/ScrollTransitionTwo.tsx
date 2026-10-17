"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTransitionTwoProps {
  firstSection: ReactNode;
  secondSection: ReactNode;
  secondBackground?: string;
  overlapDistance?: number;
  darkenOpacity?: number;
  className?: string;
}

export default function ScrollTransitionTwo({
  firstSection,
  secondSection,
  secondBackground = "bg-zinc-950",
  overlapDistance = 100,
  darkenOpacity = 0.75,
  className = "",
}: ScrollTransitionTwoProps) {
  const containerRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const secondBackgroundRef = useRef<HTMLDivElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    const second = secondRef.current;
    const secondBg = secondBackgroundRef.current;
    const darkOverlay = darkOverlayRef.current;

    if (!container || !stage || !second || !secondBg || !darkOverlay) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(second, {
        yPercent: 100,
      });

      gsap.set(secondBg, {
        opacity: 0,
        filter: "blur(18px)",
      });

      gsap.set(darkOverlay, {
        opacity: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${window.innerHeight * (overlapDistance / 100)}`,
          scrub: true,
          pin: stage,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          second,
          {
            yPercent: 0,
            ease: "none",
          },
          0,
        )
        .to(
          secondBg,
          {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
          },
          0,
        )
        .to(
          darkOverlay,
          {
            opacity: darkenOpacity,
            ease: "none",
          },
          0,
        );
    }, container);

    return () => ctx.revert();
  }, [overlapDistance, darkenOpacity]);

  return (
    <section ref={containerRef} className={`relative w-full ${className}`}>
      <div ref={stageRef} className="relative h-svh w-full overflow-hidden">
        {/* Sessão 1 */}
        <div className="absolute inset-0 z-0 bg-gray-500">
          {firstSection}

          <div
            ref={darkOverlayRef}
            className="pointer-events-none absolute inset-0 z-10 bg-black"
            aria-hidden="true"
          />
        </div>

        {/* Sessão 2 */}
        <div ref={secondRef} className="absolute inset-0 z-20 overflow-hidden">
          {/* Fundo com transparência e blur */}
          <div
            ref={secondBackgroundRef}
            className={`pointer-events-none absolute inset-0 ${secondBackground}`}
            aria-hidden="true"
          />

          {/* Conteúdo sem blur */}
          <div className="relative z-10 h-full w-full">{secondSection}</div>
        </div>
      </div>
    </section>
  );
}

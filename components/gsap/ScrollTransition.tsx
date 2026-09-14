"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTransitionProps {
  first: ReactNode;
  second: ReactNode;
  background?: string;
}

export default function ScrollTransition({
  first,
  second,
  background = "bg-background",
}: ScrollTransitionProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.set(panels, {
        opacity: 0,
        scale: 1.1,
      });

      // Primeiro painel começa visível
      gsap.set(panels[0], {
        opacity: 1,
        scale: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: true,
        },
      });

      // FIRST desaparece
      tl.to(panels[0], {
        opacity: 0,
        scale: 0.85,
        duration: 1,
        ease: "none",
      });

      // SECOND aparece depois
      tl.to(panels[1], {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "none",
      });
    },
    {
      scope: container,
    },
  );

  return (
    <section ref={container} className="relative h-screen overflow-hidden">
      <div className={`absolute inset-0 ${background}`} />
      <div className="panel absolute inset-0">{first}</div>

      <div className="panel absolute inset-0">{second}</div>
    </section>
  );
}

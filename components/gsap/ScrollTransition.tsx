"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTransitionProps {
  panels: ReactNode[];
  background?: string;
  scaleDownFrom?: number;
  transitionDuration?: number;
  className?: string;
}

export default function ScrollTransition({
  panels: content,
  background = "bg-background",
  scaleDownFrom = 1.05,
  transitionDuration = 2000,
  className = "",
}: ScrollTransitionProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      if (panels.length === 0) return;

      // Estado inicial
      gsap.set(panels, {
        opacity: 0,
        scale: scaleDownFrom,
        pointerEvents: "none",
      });

      // Primeiro painel
      gsap.set(panels[0], {
        opacity: 1,
        scale: 1,
        pointerEvents: "auto",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${(panels.length - 1) * transitionDuration}`,
          pin: true,
          scrub: true,

          onUpdate: (self) => {
            const totalTransitions = panels.length - 1;

            if (totalTransitions === 0) return;

            const currentTransition = Math.min(
              Math.floor(self.progress * totalTransitions),
              totalTransitions - 1,
            );

            const transitionProgress =
              self.progress * totalTransitions - currentTransition;

            // Bloqueia todos inicialmente
            panels.forEach((panel) => {
              panel.style.pointerEvents = "none";
            });

            // Primeiro painel
            if (self.progress === 0) {
              panels[0].style.pointerEvents = "auto";
              return;
            }

            // A partir de 50% da transição,
            // o próximo painel já pode receber cliques
            if (transitionProgress >= 0.5) {
              panels[currentTransition + 1].style.pointerEvents = "auto";
            } else {
              panels[currentTransition].style.pointerEvents = "auto";
            }
          },
        },
      });

      // Cria uma transição para cada painel
      for (let i = 1; i < panels.length; i++) {
        // Painel anterior desaparece
        tl.to(panels[i - 1], {
          opacity: 0,
          scale: 1,
          //   scale: 0.85,
          duration: 1,
          ease: "none",
        });

        // Próximo painel aparece
        tl.to(panels[i], {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "none",
        });
      }
    },
    {
      scope: container,
    },
  );

  return (
    <section ref={container} className={`relative ${className}`}>
      {/* Fundo permanente */}
      <div className={`absolute inset-0 ${background}`} />

      {content.map((panel, index) => (
        <div
          key={index}
          className={
            index === 0
              ? "panel absolute inset-0 z-10 h-svh"
              : "panel relative z-20"
          }
        >
          {panel}
        </div>
      ))}
    </section>
  );
}

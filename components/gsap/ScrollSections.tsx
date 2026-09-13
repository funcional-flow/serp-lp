"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionsProps {
  content: ReactNode[];
}

export function ScrollSections({ content }: ScrollSectionsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".scroll-section");

      // A última não precisa de animação de saída
      panels.pop();

      panels.forEach((panel) => {
        const innerPanel = panel.querySelector<HTMLElement>(
          ".scroll-section-inner",
        );

        if (!innerPanel) return;

        const panelHeight = innerPanel.offsetHeight;
        const windowHeight = window.innerHeight;

        const difference = panelHeight - windowHeight;

        const fakeScrollRatio =
          difference > 0 ? difference / (difference + windowHeight) : 0;

        if (fakeScrollRatio) {
          panel.style.marginBottom = `${panelHeight * fakeScrollRatio}px`;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "bottom bottom",

            end: () =>
              fakeScrollRatio ? `+=${innerPanel.offsetHeight}` : "bottom top",

            pin: true,
            pinSpacing: false,
            scrub: true,
          },
        });

        // Scroll interno para sections maiores que a viewport
        if (fakeScrollRatio) {
          timeline.to(innerPanel, {
            yPercent: -100,
            y: window.innerHeight,
            duration: 1 / (1 - fakeScrollRatio) - 1,
            ease: "none",
          });
        }

        // Saída da section
        timeline
          .fromTo(
            panel,
            {
              scale: 1,
              opacity: 1,
            },
            {
              scale: 0.7,
              opacity: 0.5,
              duration: 0.9,
            },
          )
          .to(panel, {
            opacity: 0,
            duration: 0.1,
          });
      });

      ScrollTrigger.refresh();
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="scroll-sections">
      {content.map((section, index) => (
        <section key={index} className="scroll-section">
          <div className="scroll-section-inner">{section}</div>
        </section>
      ))}
    </div>
  );
}

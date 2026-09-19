"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScaleOnScrollProps {
  children: ReactNode;
  scale?: number;
  startAnimation?: string;
  opacity?: number;
}

export default function ScaleOnScroll({
  children,
  scale=0.85,
  startAnimation="top", // Pode ser 0px também.
  opacity=1
}: ScaleOnScrollProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const content = container.current?.querySelector(
        ".scale-content",
      );

      if (!content) return;

      gsap.fromTo(
        content,
        {
          scale: 1,
          opacity:1,
        },
        {
          scale: scale,
          opacity: opacity,
          scrollTrigger: {
            trigger: container.current,
            start: `${startAnimation} top`,
            end: "+=2000",
            scrub: true,
          },
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <div ref={container} className="relative">
      <div className="scale-content">
        {children}
      </div>
    </div>
  );
}
"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScaleOnScrollProps {
  children: ReactNode;
  scale?: number;
}

export default function ScaleOnScroll({
  children,
  scale=0.85
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
        },
        {
          scale: scale,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
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
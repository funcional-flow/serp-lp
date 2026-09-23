"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollSnapProps = {
  children: React.ReactNode;
};

export default function ScrollSnap({ children }: ScrollSnapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const element = container?.firstElementChild;

    if (!container || !element) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 50%",
        end: "top top",
        snap: {
          snapTo: 1,
          duration: 0.6,
          ease: "power2.out",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

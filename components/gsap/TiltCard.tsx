"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface TiltCardProps {
  /** Classes do container externo */
  className?: string;

  /** Imagem de fundo do container externo */
  backgroundImage?: string;

  /** Classes do conteúdo interno */
  contentClassName?: string;

  /** Conteúdo interno do card */
  children: ReactNode;
}

export default function TiltCard({
  className = "bg-[#abff84]",
  backgroundImage,
  contentClassName = "bg-white p-8 shadow-2xl",
  children,
}: TiltCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const outer = outerRef.current;
    const card = cardRef.current;

    if (!container || !outer || !card) return;

    const ctx = gsap.context(() => {
      gsap.set(container, { perspective: 650 });

      const outerRX = gsap.quickTo(outer, "rotationX", {
        ease: "power3",
      });

      const outerRY = gsap.quickTo(outer, "rotationY", {
        ease: "power3",
      });

      const innerX = gsap.quickTo(card, "x", {
        ease: "power3",
      });

      const innerY = gsap.quickTo(card, "y", {
        ease: "power3",
      });

      const handlePointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();

        const xPercent = (e.clientX - rect.left) / rect.width;
        const yPercent = (e.clientY - rect.top) / rect.height;

        outerRX(gsap.utils.interpolate(15, -15, yPercent));
        outerRY(gsap.utils.interpolate(-15, 15, xPercent));

        innerX(gsap.utils.interpolate(-30, 30, xPercent));
        innerY(gsap.utils.interpolate(-30, 30, yPercent));
      };

      const handlePointerLeave = () => {
        outerRX(0);
        outerRY(0);
        innerX(0);
        innerY(0);
      };

      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <div
        ref={outerRef}
        className={`flex h-full w-full items-center justify-center ${className} `}
        style={
          backgroundImage
            ? {
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div ref={cardRef} className={` ${contentClassName} `}>
          {children}
        </div>
      </div>
    </div>
  );
}

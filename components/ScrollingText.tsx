"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer);
const texts = [
  "Animate Anything...",
  "Delivering silky-smooth performance",
  "so you can focus on the fun stuff.",
];
export default function ScrollingText() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const ctx = gsap.context(() => {
      /*Largura de UMA sequência de textos */ const singleWidth =
        content.scrollWidth / 2;
      /*Movimento contínuo */ const animation = gsap.to(content, {
        x: -singleWidth,
        duration: 15,
        ease: "none",
        repeat: -1,
      });
      const observer = Observer.create({
        target: window,
        type: "wheel,touch",
        onChangeY: (self) => {
          const direction = self.deltaY < 0 ? -1 : 1;
          gsap
            .timeline({ defaults: { overwrite: true } })
            .to(animation, { timeScale: direction * 4, duration: 0.2 })
            .to(animation, { timeScale: direction, duration: 1 }, "+=0.2");
        },
      });
      return () => {
        observer.kill();
        animation.kill();
      };
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden bg-black py-4"
    >
      {" "}
      <div ref={contentRef} className="flex w-max will-change-transform">
        {" "}
        {/* Grupo 1 */}{" "}
        <div className="flex shrink-0">
          {" "}
          {texts.map((text, index) => (
            <span
              key={`first-${index}`}
              className="mr-8 text-lg leading-none font-black tracking-wide whitespace-nowrap text-white"
            >
              {" "}
              {text}{" "}
            </span>
          ))}{" "}
        </div>{" "}
        {/* Grupo 2 - necessário para loop contínuo */}{" "}
        <div className="flex shrink-0">
          {" "}
          {texts.map((text, index) => (
            <span
              key={`second-${index}`}
              className="mr-8 text-lg leading-none font-black tracking-wide whitespace-nowrap text-white"
            >
              {" "}
              {text}{" "}
            </span>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

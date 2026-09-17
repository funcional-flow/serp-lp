"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(Flip, ScrollTrigger);

interface BentoGalleryProps {
  background?: string;
  imgPrincipal: string;
  images: string[];
}

export default function BentoGallery({
  background = "bg-black",
  imgPrincipal,
  images,
}: BentoGalleryProps) {
  if (images.length === 0) {
    images = [
      "/teste_gsap/portrait-image-12.jpg",
      "/teste_gsap/portrait-image-9.jpg",
      "/teste_gsap/portrait-image-5.jpg",
      "/teste_gsap/portrait-image-4.jpg",
      "/teste_gsap/portrait-image-3.jpg",
      "/teste_gsap/portrait-image-2.jpg",
      "/teste_gsap/portrait-image-1.jpg",
    ];
  }
  const wrapRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const gallery = galleryRef.current;
    if (!wrap || !gallery) return;
    const ctx = gsap.context(() => {
      const items = gallery.querySelectorAll<HTMLElement>(".gallery__item");
      const createTween = () => {
        /* * Remove qualquer animação/ScrollTrigger * criada anteriormente. */
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === gallery) {
            trigger.kill();
          }
        });
        /* * Garante que começamos no estado Bento. */
        gallery.classList.remove("gallery--final");
        /* * Adiciona temporariamente o estado final * para capturar as posições. */ gallery.classList.add(
          "gallery--final",
        );
        const flipState = Flip.getState(items);
        /* * Volta para o estado inicial. */
        gallery.classList.remove("gallery--final");
        /* * Cria a animação FLIP. */
        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });
        /* * Controla a animação através do scroll. */
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: gallery,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: wrap,
            invalidateOnRefresh: true,
          },
        });
        timeline.add(flip);
      };
      createTween();
      /* * Equivalente ao window.addEventListener("resize") * do código original. */
      const handleResize = () => {
        createTween();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === gallery) {
            trigger.kill();
          }
        });
        gsap.set(items, { clearProps: "all" });
      };
    }, wrap);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div
      ref={wrapRef}
      className={`gallery-wrap ${background} relative flex h-svh w-full items-center justify-center overflow-hidden`}
    >
      <div
        ref={galleryRef}
        id="gallery-8"
        className="gallery gallery--bento relative h-full w-full shrink-0"
      >
        {images.map((image) => (
          <div key={image} className="gallery__item relative overflow-hidden">
            {/* <img
              src={image}
              alt=""
              className="block h-full w-full object-cover"
            /> */}
            <Image
              src={image}
              alt=""
              fill
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

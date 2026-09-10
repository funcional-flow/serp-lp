"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceProps {
  images?: string[]; // array de URLs, obrigatório

  duration?: number; // quanto de scroll a sequência consome

  canvasWidth?: number; // resolução interna do canvas
  canvasHeight?: number; // resolução interna do canvas

  background?: string; // cor de fundo

  start?: string | number; // posição inicial do ScrollTrigger

  scrub?: boolean | number; // controle da suavidade do acompanhamento do scroll

  pin?: boolean; // permitir desligar o pin se algum dia precisar

  clear?: boolean; // útil para imagens com transparência

  fit?: "contain" | "cover" | "stretch";

  className?: string; // para personalização visual da seção
  canvasClassName?: string; // para controlar o tamanho/posição do canvas
  canvasStyle?: CSSProperties; // para controlar o tamanho/posição do canvas

  onFrameChange?: (frame: number, image: HTMLImageElement) => void; // callback para você reagir à mudança de frame
}

export default function ImageSequence({
  images = [],

  duration = 2000,

  fit = "contain",

  canvasWidth = 1158,
  canvasHeight = 770,

  background = "#000",

  start = "top top",

  scrub = true,

  pin = true,

  clear = true,

  className = "",
  canvasClassName = "",
  canvasStyle,

  onFrameChange,
}: ImageSequenceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (images.length === 0) {
    images = Array.from({ length: 147 }, (_, index) => {
      const frame = String(index + 1).padStart(4, "0");

      return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${frame}.jpg`;
    });
  }

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas || images.length === 0) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const loadedImages: HTMLImageElement[] = [];

    let currentFrame = -1;

    const playhead = {
      frame: 0,
    };

    const updateImage = () => {
      const frame = Math.round(playhead.frame);

      if (frame === currentFrame) {
        return;
      }

      const image = loadedImages[frame];

      if (!image || !image.complete) {
        return;
      }

      if (clear) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (fit === "contain") {
        const scale = Math.min(
          canvas.width / imageWidth,
          canvas.height / imageHeight,
        );

        drawWidth = imageWidth * scale;
        drawHeight = imageHeight * scale;

        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      if (fit === "cover") {
        const scale = Math.max(
          canvas.width / imageWidth,
          canvas.height / imageHeight,
        );

        drawWidth = imageWidth * scale;
        drawHeight = imageHeight * scale;

        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      if (fit === "stretch") {
        drawWidth = canvas.width;
        drawHeight = canvas.height;
      }

      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

      currentFrame = frame;

      onFrameChange?.(frame, image);
    };

    images.forEach((src) => {
      const image = new Image();

      image.src = src;

      loadedImages.push(image);
    });

    loadedImages[0].onload = updateImage;

    const animation = gsap.to(playhead, {
      frame: loadedImages.length - 1,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start,

        end: `+=${duration}`,

        scrub,

        pin,

        invalidateOnRefresh: true,
      },

      onUpdate: updateImage,
    });

    return () => {
      animation.kill();
    };
  }, [images, duration, start, scrub, pin, clear, onFrameChange]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${className}`}
      style={{ background }}
    >
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className={`absolute top-1/2 left-1/2 max-h-[80vh] max-w-[80vw] -translate-x-1/2 -translate-y-1/2 ${canvasClassName} `}
        style={canvasStyle}
      />
    </section>
  );
}

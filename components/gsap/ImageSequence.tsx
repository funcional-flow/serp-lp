"use client";

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceProps {
  images?: string[]; // array de URLs

  duration?: number; // quanto de scroll a sequência consome

  canvasWidth?: number; // resolução interna inicial do canvas
  canvasHeight?: number; // resolução interna inicial do canvas

  background?: string; // cor de fundo

  start?: string | number; // posição inicial do ScrollTrigger

  scrub?: boolean | number; // controle da suavidade do acompanhamento do scroll

  pin?: boolean; // permitir desligar o pin

  clear?: boolean; // útil para imagens com transparência

  fit?: "contain" | "cover" | "stretch";

  className?: string; // personalização visual da seção

  canvasClassName?: string; // personalização visual do canvas

  canvasStyle?: CSSProperties; // estilos inline do canvas

  onFrameChange?: (
    frame: number,
    image: HTMLImageElement,
  ) => void; // callback para reagir à mudança de frame
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
  const sectionRef =
    useRef<HTMLElement>(null);

  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  /*
   * Caso nenhuma imagem seja passada,
   * utiliza a sequência padrão dos AirPods.
   */
  if (images.length === 0) {
    images = Array.from(
      { length: 147 },
      (_, index) => {
        const frame = String(
          index + 1,
        ).padStart(4, "0");

        return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${frame}.jpg`;
      },
    );
  }

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    const canvas =
      canvasRef.current;

    if (
      !section ||
      !canvas ||
      images.length === 0
    ) {
      return;
    }

    const ctx =
      canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    /*
     * Imagens carregadas
     */
    const loadedImages: HTMLImageElement[] =
      [];

    /*
     * Frame atualmente desenhado
     */
    let currentFrame = -1;

    /*
     * Controle da animação
     */
    const playhead = {
      frame: 0,
    };

    /*
     * -----------------------------------------
     * RESIZE DO CANVAS
     * -----------------------------------------
     *
     * O canvas visual ocupa 100% da section.
     *
     * O width/height internos são ajustados
     * de acordo com o tamanho real da section.
     *
     * O DPR melhora a qualidade em telas
     * Retina/HiDPI.
     */
    const resizeCanvas = () => {
      const rect =
        section.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      /*
       * Resolução interna
       */
      canvas.width = Math.round(
        width * dpr,
      );

      canvas.height = Math.round(
        height * dpr,
      );

      /*
       * Tamanho visual
       */
      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      /*
       * Faz com que o sistema de
       * coordenadas continue usando
       * pixels CSS.
       */
      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0,
      );
    };

    /*
     * -----------------------------------------
     * DESENHAR IMAGEM
     * -----------------------------------------
     */
    const drawImage = (
      image: HTMLImageElement,
    ) => {
      const rect =
        section.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const imageWidth =
        image.naturalWidth;

      const imageHeight =
        image.naturalHeight;

      if (
        !imageWidth ||
        !imageHeight
      ) {
        return;
      }

      /*
       * Limpa o canvas
       */
      if (clear) {
        ctx.clearRect(
          0,
          0,
          width,
          height,
        );
      }

      /*
       * -------------------------------------
       * STRETCH
       * -------------------------------------
       */
      if (fit === "stretch") {
        ctx.drawImage(
          image,
          0,
          0,
          width,
          height,
        );

        return;
      }

      const imageRatio =
        imageWidth /
        imageHeight;

      const canvasRatio =
        width / height;

      let drawWidth = 0;
      let drawHeight = 0;

      let offsetX = 0;
      let offsetY = 0;

      /*
       * -------------------------------------
       * CONTAIN
       * -------------------------------------
       *
       * Mostra a imagem inteira.
       */
      if (fit === "contain") {
        const scale =
          Math.min(
            width / imageWidth,
            height / imageHeight,
          );

        drawWidth =
          imageWidth * scale;

        drawHeight =
          imageHeight * scale;

        offsetX =
          (width - drawWidth) / 2;

        offsetY =
          (height - drawHeight) / 2;
      }

      /*
       * -------------------------------------
       * COVER
       * -------------------------------------
       *
       * Preenche completamente
       * a tela mantendo proporção.
       */
      if (fit === "cover") {
        const scale =
          Math.max(
            width / imageWidth,
            height / imageHeight,
          );

        drawWidth =
          imageWidth * scale;

        drawHeight =
          imageHeight * scale;

        offsetX =
          (width - drawWidth) / 2;

        offsetY =
          (height - drawHeight) / 2;
      }

      /*
       * Desenha a imagem
       */
      ctx.drawImage(
        image,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight,
      );
    };

    /*
     * -----------------------------------------
     * ATUALIZAR FRAME
     * -----------------------------------------
     */
    const updateImage = () => {
      const frame = Math.round(
        playhead.frame,
      );

      if (
        frame === currentFrame
      ) {
        return;
      }

      const image =
        loadedImages[frame];

      if (
        !image ||
        !image.complete
      ) {
        return;
      }

      drawImage(image);

      currentFrame = frame;

      onFrameChange?.(
        frame,
        image,
      );
    };

    /*
     * -----------------------------------------
     * CARREGAR IMAGENS
     * -----------------------------------------
     */
    images.forEach((src) => {
      const image =
        new Image();

      image.src = src;

      loadedImages.push(image);
    });

    /*
     * -----------------------------------------
     * PRIMEIRA IMAGEM
     * -----------------------------------------
     */
    loadedImages[0].onload = () => {
      resizeCanvas();

      drawImage(
        loadedImages[0],
      );

      currentFrame = 0;

      onFrameChange?.(
        0,
        loadedImages[0],
      );

      ScrollTrigger.refresh();
    };

    /*
     * -----------------------------------------
     * RESIZE OBSERVER
     * -----------------------------------------
     *
     * Se a section mudar de tamanho,
     * o canvas acompanha automaticamente.
     */
    const resizeObserver =
      new ResizeObserver(() => {
        resizeCanvas();

        /*
         * Redesenha o frame atual
         * depois do resize.
         */
        if (
          currentFrame >= 0
        ) {
          const image =
            loadedImages[
              currentFrame
            ];

          if (
            image?.complete
          ) {
            drawImage(image);
          }
        }
      });

    resizeObserver.observe(
      section,
    );

    /*
     * Tamanho inicial
     */
    resizeCanvas();

    /*
     * -----------------------------------------
     * GSAP
     * -----------------------------------------
     */
    const animation = gsap.to(
      playhead,
      {
        frame:
          loadedImages.length - 1,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start,

          end: `+=${duration}`,

          scrub,

          pin,

          invalidateOnRefresh: true,
        },

        onUpdate:
          updateImage,
      },
    );

    /*
     * -----------------------------------------
     * CLEANUP
     * -----------------------------------------
     */
    return () => {
      resizeObserver.disconnect();

      animation.kill();

      animation.scrollTrigger?.kill();
    };
  }, [
    images,
    duration,
    start,
    scrub,
    pin,
    clear,
    fit,
    onFrameChange,
  ]);

  return (
    <section
      ref={sectionRef}
      className={`
        relative
        h-screen
        w-full
        overflow-hidden
        ${background}
        ${className}
      `}
    >
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className={`
          absolute
          inset-0
          h-full
          w-full
          ${canvasClassName}
        `}
        style={canvasStyle}
      />
    </section>
  );
}
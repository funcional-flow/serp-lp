"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Breakpoint = "desktop" | "tablet" | "mobile";

type ResponsiveDuration = Partial<Record<Breakpoint, number>>;

type ImageFit = "contain" | "cover" | "stretch";

type ObjectPosition = "top" | "center" | "bottom";

interface OverlayInterval {
  /**
   * Posições absolutas de scroll em pixels.
   */
  start: number;
  peak: number;
  holdEnd: number;
  end: number;
  color?: string;
}

interface ResponsiveOverlayIntervals {
  desktop?: OverlayInterval[];
  tablet?: OverlayInterval[];
  mobile?: OverlayInterval[];
}

/**
 * Configuração que pode variar por breakpoint.
 *
 * overlayIntervals é um array direto aqui porque cada configuração
 * já pertence a um breakpoint específico.
 */
export interface ImageSequenceConfig {
  images?: string[];
  animationStart?: number;
  duration?: number;
  fullPageScroll?: boolean;
  canvasWidth?: number;
  canvasHeight?: number;
  background?: string;
  start?: string | number;
  scrub?: boolean | number;
  pin?: boolean;
  clear?: boolean;
  fit?: ImageFit;
  objectPosition?: ObjectPosition;
  className?: string;
  canvasClassName?: string;
  canvasStyle?: CSSProperties;
  fixedBackground?: boolean;
  overlayIntervals?: OverlayInterval[];
}

export interface ResponsiveImageSequenceConfig {
  desktop?: Partial<ImageSequenceConfig>;
  tablet?: Partial<ImageSequenceConfig>;
  mobile?: Partial<ImageSequenceConfig>;
}

export interface ImageSequenceFixedProps extends Omit<
  ImageSequenceConfig,
  "duration" | "overlayIntervals"
> {
  /**
   * Aceita uma duração única ou uma duração específica por breakpoint.
   */
  duration?: number | ResponsiveDuration;

  /**
   * Configurações específicas por breakpoint.
   * Têm prioridade sobre as props globais.
   */
  responsive?: ResponsiveImageSequenceConfig;

  /**
   * Callback global, independente do breakpoint.
   */
  onFrameChange?: (frame: number, image: HTMLImageElement) => void;

  /**
   * Compatibilidade com a API antiga de overlays globais responsivos.
   */
  overlayIntervals?: ResponsiveOverlayIntervals;
}

const DEFAULT_IMAGES = Array.from({ length: 147 }, (_, index) => {
  const frame = String(index + 1).padStart(4, "0");

  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${frame}.jpg`;
});

const BREAKPOINTS: Breakpoint[] = ["desktop", "tablet", "mobile"];

function getBreakpoint(): Breakpoint {
  if (typeof window === "undefined") return "desktop";

  if (window.innerWidth < 768) return "mobile";
  if (window.innerWidth < 1024) return "tablet";

  return "desktop";
}

export default function ImageSequenceFixed({
  images,
  animationStart = 0,
  duration = 2000,
  fullPageScroll = true,
  canvasWidth = 1158,
  canvasHeight = 770,
  background = "transparent",
  start = "top top",
  scrub = true,
  pin = true,
  clear = true,
  fit = "contain",
  objectPosition = "center",
  className = "",
  canvasClassName = "",
  canvasStyle,
  fixedBackground = true,
  overlayIntervals,
  responsive,
  onFrameChange,
}: ImageSequenceFixedProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const overlayRefs = useRef<Record<Breakpoint, (HTMLDivElement | null)[]>>({
    desktop: [],
    tablet: [],
    mobile: [],
  });

  const onFrameChangeRef = useRef(onFrameChange);

  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  /**
   * Mantém o callback atualizado sem reiniciar a sequência
   * quando a função recebida pelo pai muda de referência.
   */
  useEffect(() => {
    onFrameChangeRef.current = onFrameChange;
  }, [onFrameChange]);

  /**
   * Detecta alterações de breakpoint, incluindo resize
   * e mudanças de orientação do dispositivo.
   */
  useEffect(() => {
    const mediaQueries = [
      window.matchMedia("(max-width: 767px)"),
      window.matchMedia("(min-width: 768px) and (max-width: 1023px)"),
      window.matchMedia("(min-width: 1024px)"),
    ];

    const updateBreakpoint = () => {
      setBreakpoint(getBreakpoint());
    };

    updateBreakpoint();

    mediaQueries.forEach((media) => {
      media.addEventListener("change", updateBreakpoint);
    });

    return () => {
      mediaQueries.forEach((media) => {
        media.removeEventListener("change", updateBreakpoint);
      });
    };
  }, []);

  /**
   * Resolve primeiro os valores globais e depois aplica
   * as substituições específicas do breakpoint atual.
   */
  const globalDuration =
    typeof duration === "number"
      ? duration
      : (duration[breakpoint] ??
        duration.desktop ??
        duration.tablet ??
        duration.mobile ??
        2000);

  const globalConfig: ImageSequenceConfig = {
    images,
    animationStart,
    duration: globalDuration,
    fullPageScroll,
    canvasWidth,
    canvasHeight,
    background,
    start,
    scrub,
    pin,
    clear,
    fit,
    objectPosition,
    className,
    canvasClassName,
    canvasStyle,
    fixedBackground,
    overlayIntervals: overlayIntervals?.[breakpoint],
  };

  const activeConfig: ImageSequenceConfig = {
    ...globalConfig,
    ...responsive?.[breakpoint],
  };

  const {
    images: activeImagesProp,
    animationStart: activeAnimationStart = 0,
    duration: activeDuration = 2000,
    fullPageScroll: activeFullPageScroll = true,
    canvasWidth: activeCanvasWidth = 1158,
    canvasHeight: activeCanvasHeight = 770,
    background: activeBackground = "transparent",
    start: activeStart = "top top",
    scrub: activeScrub = true,
    pin: activePin = true,
    clear: activeClear = true,
    fit: activeFit = "contain",
    objectPosition: activeObjectPosition = "center",
    className: activeClassName = "",
    canvasClassName: activeCanvasClassName = "",
    canvasStyle: activeCanvasStyle,
    fixedBackground: activeFixedBackground = true,
    overlayIntervals: activeOverlayIntervals = [],
  } = activeConfig;

  const effectiveImages = activeImagesProp?.length
    ? activeImagesProp
    : DEFAULT_IMAGES;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas || effectiveImages.length === 0) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isDisposed = false;
    let currentFrame = -1;

    const loadedImages: HTMLImageElement[] = [];
    const playhead = { frame: 0 };

    /**
     * Ajusta a resolução interna do canvas considerando DPR.
     */
    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /**
     * Desenha um frame aplicando fit e objectPosition.
     */
    const drawImage = (image: HTMLImageElement) => {
      const rect = section.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;

      if (!imageWidth || !imageHeight || !width || !height) {
        return;
      }

      if (activeClear) {
        ctx.clearRect(0, 0, width, height);
      }

      if (activeFit === "stretch") {
        ctx.drawImage(image, 0, 0, width, height);
        return;
      }

      const scale =
        activeFit === "contain"
          ? Math.min(width / imageWidth, height / imageHeight)
          : Math.max(width / imageWidth, height / imageHeight);

      const drawWidth = imageWidth * scale;
      const drawHeight = imageHeight * scale;

      const offsetX = (width - drawWidth) / 2;

      let offsetY = (height - drawHeight) / 2;

      if (activeFit === "cover") {
        if (activeObjectPosition === "top") {
          offsetY = 0;
        } else if (activeObjectPosition === "bottom") {
          offsetY = height - drawHeight;
        }
      }

      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    /**
     * Atualiza o frame visível e chama o callback global.
     */
    const updateImage = () => {
      if (isDisposed) return;

      const frame = Math.max(
        0,
        Math.min(loadedImages.length - 1, Math.round(playhead.frame)),
      );

      const image = loadedImages[frame];

      if (!image?.complete || !image.naturalWidth || frame === currentFrame) {
        return;
      }

      drawImage(image);
      currentFrame = frame;
      onFrameChangeRef.current?.(frame, image);
    };

    /**
     * Carrega os frames da sequência.
     */
    effectiveImages.forEach((src, index) => {
      const image = new Image();

      image.onload = () => {
        if (isDisposed) return;

        if (index === 0) {
          resizeCanvas();
          drawImage(image);
          currentFrame = 0;
          onFrameChangeRef.current?.(0, image);
          ScrollTrigger.refresh();
        } else {
          updateImage();
        }
      };

      image.onerror = () => {
        console.error(`Não foi possível carregar o frame ${index}: ${src}`);
      };

      image.src = src;
      loadedImages.push(image);
    });

    /**
     * Redimensiona e redesenha o canvas quando a seção muda.
     */
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();

      if (currentFrame >= 0) {
        const image = loadedImages[currentFrame];

        if (image?.complete && image.naturalWidth) {
          drawImage(image);
        }
      }
    });

    resizeObserver.observe(section);
    resizeCanvas();

    /**
     * Se a duração foi definida especificamente no breakpoint,
     * ela prevalece sobre fullPageScroll.
     *
     * Caso contrário, fullPageScroll mantém o comportamento antigo.
     */
    const hasResponsiveDuration =
      responsive?.[breakpoint]?.duration !== undefined;

    const useFullPageDistance = activeFullPageScroll && !hasResponsiveDuration;

    const trigger = gsap.to(playhead, {
      frame: effectiveImages.length - 1,
      ease: "none",
      scrollTrigger: {
        trigger:
          activeFullPageScroll || activeFixedBackground
            ? document.documentElement
            : section,

        start:
          activeFullPageScroll || activeFixedBackground
            ? activeAnimationStart
            : activeStart,

        end: useFullPageDistance
          ? () =>
              `+=${Math.max(
                1,
                document.documentElement.scrollHeight -
                  window.innerHeight -
                  activeAnimationStart,
              )}`
          : () => `+=${Math.max(1, activeDuration)}`,

        scrub: activeScrub,

        pin: activeFixedBackground || activeFullPageScroll ? false : activePin,

        invalidateOnRefresh: true,
      },

      onUpdate: updateImage,
    });

    /**
     * Cria os overlays do breakpoint ativo.
     * As posições start/peak/holdEnd/end são absolutas
     * em relação ao scroll, em pixels.
     */
    const overlayTimelines: gsap.core.Timeline[] = [];

    if (activeFixedBackground) {
      activeOverlayIntervals.forEach((interval, index) => {
        const overlay = overlayRefs.current[breakpoint][index];

        if (!overlay) return;

        if (
          interval.peak < interval.start ||
          interval.holdEnd < interval.peak ||
          interval.end < interval.holdEnd
        ) {
          console.warn(
            `Overlay ${breakpoint}[${index}] tem tempos inválidos.`,
            interval,
          );
          return;
        }

        gsap.set(overlay, { opacity: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: document.documentElement,
            start: interval.start,
            end: interval.end,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(overlay, {
            opacity: 1,
            duration: Math.max(0, interval.peak - interval.start),
            ease: "none",
          })
          .to(overlay, {
            opacity: 1,
            duration: Math.max(0, interval.holdEnd - interval.peak),
            ease: "none",
          })
          .to(overlay, {
            opacity: 0,
            duration: Math.max(0, interval.end - interval.holdEnd),
            ease: "none",
          });

        overlayTimelines.push(timeline);
      });
    }

    ScrollTrigger.refresh();

    return () => {
      isDisposed = true;
      resizeObserver.disconnect();

      trigger.scrollTrigger?.kill();
      trigger.kill();

      overlayTimelines.forEach((timeline) => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      });

      loadedImages.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [
    breakpoint,
    effectiveImages,
    activeAnimationStart,
    activeDuration,
    activeFullPageScroll,
    activeStart,
    activeScrub,
    activePin,
    activeClear,
    activeFit,
    activeObjectPosition,
    activeFixedBackground,
    activeOverlayIntervals,
    responsive,
  ]);

  /**
   * Prepara as camadas de overlay para cada breakpoint.
   *
   * Os overlays responsivos têm prioridade sobre os overlays
   * globais antigos para o mesmo breakpoint.
   */
  const getOverlaysForBreakpoint = (name: Breakpoint) => {
    const responsiveOverlays = responsive?.[name]?.overlayIntervals;

    if (responsiveOverlays !== undefined) {
      return responsiveOverlays;
    }

    return overlayIntervals?.[name] ?? [];
  };

  return (
    <section
      ref={sectionRef}
      className={`${
        activeFixedBackground
          ? "pointer-events-none fixed inset-0 z-0"
          : "relative"
      } h-screen w-full overflow-hidden ${activeClassName}`}
      style={
        activeFixedBackground
          ? { backgroundColor: activeBackground }
          : { backgroundColor: activeBackground }
      }
    >
      <canvas
        ref={canvasRef}
        width={activeCanvasWidth}
        height={activeCanvasHeight}
        className={`absolute inset-0 h-full w-full ${activeCanvasClassName}`}
        style={activeCanvasStyle}
      />

      {activeFixedBackground &&
        BREAKPOINTS.map((name) =>
          getOverlaysForBreakpoint(name).map((interval, index) => (
            <div
              key={`${name}-${interval.start}-${index}`}
              ref={(element) => {
                overlayRefs.current[name][index] = element;
              }}
              className={`pointer-events-none absolute inset-0 ${
                name === breakpoint ? "" : "hidden"
              }`}
              style={{
                backgroundColor: interval.color ?? "#000000",
                opacity: 0,
              }}
            />
          )),
        )}
    </section>
  );
}

"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
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

export interface VideoSegmentPoint {
  /** Seletor da seção que ancora este ponto, ex.: "#divisao11". */
  trigger: string;
  /** Offset opcional, em frames, após o topo da seção chegar à borda inferior da viewport. */
  afterFrames?: number;
}

export interface VideoSegmentConfig {
  /** Array de frames deste vídeo, por exemplo video_serp_1. */
  images: string[];
  /** Onde começa a reprodução deste array. */
  start: VideoSegmentPoint;
  /** Onde termina a reprodução deste array. */
  end: VideoSegmentPoint;
}

/** @deprecated Use videoSegments para definir o início e o fim de cada vídeo. */
export interface FrameTransition {
  trigger: string;
  afterFrames: number;
}

export interface OverlayInterval {
  trigger: string; // Seletor da seção, ex.: "#divisao11"
  start: number; // Distância do topo da seção até começar o fade-in
  peak: number; // Distância em que a opacidade chega a 1
  holdEnd: number; // Distância até onde mantém opacidade 1
  end: number; // Distância em que termina o fade-out
  unit?: "px" | "vh" | "section"; // section = porcentagem da altura da seção; px é o padrão
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
  /** Lista plana de frames, para compatibilidade com a API existente. */
  images?: string[];
  /** Cada array de vídeo recebe sua própria seção de início e de fim. */
  videoSegments?: VideoSegmentConfig[];
  /** @deprecated API anterior; prefira videoSegments. */
  imageSequences?: string[][];
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
  overlayIntervals?: OverlayInterval[];
  /** @deprecated API anterior; prefira videoSegments. */
  frameTransitions?: FrameTransition[];
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
  overlayIntervals?: ResponsiveOverlayIntervals | OverlayInterval[];
}

const DEFAULT_IMAGES = Array.from({ length: 147 }, (_, index) => {
  const frame = String(index + 1).padStart(4, "0");

  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${frame}.jpg`;
});

function getBreakpoint(): Breakpoint {
  if (typeof window === "undefined") return "desktop";

  if (window.innerWidth < 768) return "mobile";
  if (window.innerWidth < 1024) return "tablet";

  return "desktop";
}

export default function ImageSequenceFixed({
  images,
  videoSegments,
  imageSequences,
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
  overlayIntervals,
  frameTransitions,
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
    videoSegments,
    imageSequences,
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
    overlayIntervals: Array.isArray(overlayIntervals)
      ? overlayIntervals
      : overlayIntervals?.[breakpoint],
    frameTransitions,
  };

  const activeConfig: ImageSequenceConfig = {
    ...globalConfig,
    ...responsive?.[breakpoint],
  };

  const {
    images: activeImagesProp,
    videoSegments: activeVideoSegments,
    imageSequences: activeImageSequences,
    animationStart: activeAnimationStart = 0,
    duration: activeDuration = 2000,
    fullPageScroll: activeFullPageScroll = true,
    canvasWidth: activeCanvasWidth = 1158,
    canvasHeight: activeCanvasHeight = 770,
    background: activeBackground = "transparent",
    scrub: activeScrub = true,
    clear: activeClear = true,
    fit: activeFit = "contain",
    objectPosition: activeObjectPosition = "center",
    className: activeClassName = "",
    canvasClassName: activeCanvasClassName = "",
    canvasStyle: activeCanvasStyle,
    overlayIntervals: activeOverlayIntervals = [],
    frameTransitions: activeFrameTransitions = [],
  } = activeConfig;

  const effectiveImages = useMemo(
    () =>
      activeVideoSegments?.length
        ? activeVideoSegments.flatMap((segment) => segment.images)
        : activeImageSequences?.length
          ? activeImageSequences.flat()
          : activeImagesProp?.length
            ? activeImagesProp
            : DEFAULT_IMAGES,
    [activeVideoSegments, activeImageSequences, activeImagesProp],
  );

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

    const sequenceTweens: gsap.core.Tween[] = [];
    let segmentedSequenceTrigger: ScrollTrigger | null = null;

    // Mantém o cálculo do fim original da sequência, mas permite inserir
    // pontos de troca alinhados ao pico de opacidade dos overlays.
    const getBaseSequenceEnd = () => {
      if (useFullPageDistance && typeof activeAnimationStart === "number") {
        return Math.max(
          activeAnimationStart + 1,
          document.documentElement.scrollHeight - window.innerHeight,
        );
      }

      if (typeof activeAnimationStart === "number") {
        return activeAnimationStart + Math.max(1, activeDuration);
      }

      return null;
    };

    const getSectionEntryScrollY = (transition: FrameTransition) => {
      const triggerElement = document.querySelector(transition.trigger);

      if (!triggerElement) {
        console.warn(
          `[ImageSequenceFixed] Não foi encontrada a seção "${transition.trigger}" para sincronizar a troca de frames.`,
        );
        return null;
      }

      // A contagem começa quando o topo da seção chega à borda inferior
      // da viewport (equivalente a "top bottom" no ScrollTrigger).
      return (
        triggerElement.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight
      );
    };

    const getSequenceStart = () =>
      typeof activeAnimationStart === "number" ? activeAnimationStart : 0;

    const getTransitionScrollY = (transition: FrameTransition) => {
      const sectionEntry = getSectionEntryScrollY(transition);
      const sequenceEnd = getBaseSequenceEnd();
      const sequenceStart = getSequenceStart();

      if (sectionEntry === null || sequenceEnd === null) return null;

      const totalFrames = Math.max(1, effectiveImages.length - 1);
      const scrollPerFrame = Math.max(
        1,
        (sequenceEnd - sequenceStart) / totalFrames,
      );

      // afterFrames converte a espera em frames para a distância de scroll
      // equivalente à velocidade-base da sequência.
      return sectionEntry + transition.afterFrames * scrollPerFrame;
    };

    const hasVideoSegments = Boolean(activeVideoSegments?.length);

    if (hasVideoSegments) {
      const segments = activeVideoSegments!
        .map((segment, index) => {
          const startElement = document.querySelector(segment.start.trigger);
          const endElement = document.querySelector(segment.end.trigger);

          if (!startElement || !endElement) {
            console.warn(
              `[ImageSequenceFixed] Segmento ${index + 1}: não foi encontrada a seção de início "${segment.start.trigger}" ou de fim "${segment.end.trigger}".`,
            );
            return null;
          }

          const startFrame = activeVideoSegments!
            .slice(0, index)
            .reduce((sum, item) => sum + item.images.length, 0);

          const endFrame = startFrame + segment.images.length - 1;

          return {
            startElement,
            endElement,
            startOffset: Math.max(0, segment.start.afterFrames ?? 0),
            endOffset: Math.max(0, segment.end.afterFrames ?? 0),
            startFrame,
            endFrame,
            frameCount: segment.images.length,
            startTrigger: segment.start.trigger,
            endTrigger: segment.end.trigger,
          };
        })
        .filter(
          (segment): segment is NonNullable<typeof segment> => segment !== null,
        );

      if (segments.length === activeVideoSegments!.length) {
        /**
         * Retorna a posição de entrada da seção no scroll.
         * Equivale ao alinhamento "top bottom".
         */
        const getEntryScrollY = (element: Element) =>
          element.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight;

        /**
         * Calcula os limites de cada vídeo independentemente.
         *
         * A velocidade de referência é baseada na distância entre
         * as seções daquele vídeo, e não em `duration`.
         *
         * Portanto, alterar `duration` não antecipa o término
         * dos vídeos configurados em `videoSegments`.
         */
        const getPositions = () =>
          segments.map((segment) => {
            const sectionStart = getEntryScrollY(segment.startElement);
            const sectionEnd = getEntryScrollY(segment.endElement);

            const sectionDistance = sectionEnd - sectionStart;

            if (sectionDistance <= 0) {
              console.warn(
                `[ImageSequenceFixed] A seção final "${segment.endTrigger}" precisa estar depois da seção inicial "${segment.startTrigger}".`,
              );
            }

            // Distância de scroll de referência por frame deste vídeo.
            const scrollPerFrame =
              Math.max(1, sectionDistance) /
              Math.max(1, segment.frameCount - 1);

            // O início pode ter um offset opcional em frames.
            const start = sectionStart + segment.startOffset * scrollPerFrame;

            // O vídeo termina no ponto da seção final acrescido
            // do offset configurado em end.afterFrames.
            const end = sectionEnd + segment.endOffset * scrollPerFrame;

            return {
              start,
              end,
              startFrame: segment.startFrame,
              endFrame: segment.endFrame,
              startTrigger: segment.startTrigger,
              endTrigger: segment.endTrigger,
            };
          });

        /**
         * Atualiza o frame de acordo com a posição do scroll.
         * Todos os frames do segmento são interpolados entre
         * os limites calculados para ele.
         */
        const updateSegmentedSequence = (scrollY: number) => {
          const positions = getPositions();
          let activeIndex = -1;

          // Os segmentos devem estar na ordem em que aparecem na página.
          for (let index = 0; index < positions.length; index += 1) {
            if (scrollY >= positions[index].start) {
              activeIndex = index;
            } else {
              break;
            }
          }

          if (activeIndex < 0) {
            playhead.frame = 0;
            updateImage();
            return;
          }

          const segment = positions[activeIndex];

          if (segment.end <= segment.start) {
            playhead.frame = segment.endFrame;
            updateImage();
            return;
          }

          // Progresso de 0 a 1 entre o início e o fim deste vídeo.
          const progress = Math.max(
            0,
            Math.min(
              1,
              (scrollY - segment.start) / (segment.end - segment.start),
            ),
          );

          playhead.frame =
            segment.startFrame +
            (segment.endFrame - segment.startFrame) * progress;

          updateImage();
        };

        segmentedSequenceTrigger = ScrollTrigger.create({
          trigger: document.documentElement,
          start: 0,
          end: () => Math.max(1, ScrollTrigger.maxScroll(window)),
          invalidateOnRefresh: true,
          onUpdate: (self) => updateSegmentedSequence(self.scroll()),
          onRefresh: (self) => updateSegmentedSequence(self.scroll()),
        });

        updateSegmentedSequence(window.scrollY);
      }
    } else {
      const validTransitions = activeFrameTransitions.filter(
        (item) =>
          typeof item.trigger === "string" &&
          item.trigger.length > 0 &&
          Number.isFinite(item.afterFrames) &&
          item.afterFrames >= 0,
      );

      const hasSeparateSequences = Boolean(activeImageSequences?.length);
      const expectedTransitionCount = hasSeparateSequences
        ? Math.max(0, activeImageSequences!.length - 1)
        : 0;

      if (validTransitions.length > 0 && !hasSeparateSequences) {
        console.warn(
          "[ImageSequenceFixed] Para sincronizar trocas de vídeo sem informar índices de frames, passe os vídeos separados em imageSequences (um array por vídeo). Com apenas images plano, os limites entre os vídeos não podem ser inferidos.",
        );
      }

      if (
        hasSeparateSequences &&
        validTransitions.length === expectedTransitionCount &&
        typeof activeAnimationStart === "number"
      ) {
        // Calcula automaticamente o frame de cada troca a partir do tamanho
        // das sequências. O usuário só precisa indicar seção + afterFrames.
        let cumulativeFrames = 0;
        const transitionBoundaries = validTransitions.map(
          (transition, index) => {
            cumulativeFrames += activeImageSequences![index].length;
            return {
              frame: cumulativeFrames,
              getPosition: () => getTransitionScrollY(transition),
            };
          },
        );

        const boundaries: Array<{
          frame: number;
          getPosition: () => number | null;
        }> = [
          { frame: 0, getPosition: () => getSequenceStart() },
          ...transitionBoundaries,
          {
            frame: effectiveImages.length - 1,
            getPosition: () => getBaseSequenceEnd(),
          },
        ];

        // Cada segmento de vídeo é interpolado até a próxima troca. A posição
        // de scroll é recalculada quando ScrollTrigger faz refresh/resizing.
        for (let index = 0; index < boundaries.length - 1; index += 1) {
          const from = boundaries[index];
          const to = boundaries[index + 1];

          const startPosition = () => from.getPosition() ?? getSequenceStart();
          const endPosition = () => {
            const startY = startPosition();
            const endY = to.getPosition();
            if (endY === null) return startY + 1;
            return Math.max(startY + 1, endY);
          };

          const tween = gsap.fromTo(
            playhead,
            { frame: from.frame },
            {
              frame: to.frame,
              ease: "none",
              scrollTrigger: {
                trigger: document.documentElement,
                start: startPosition,
                end: endPosition,
                scrub: activeScrub,
                pin: false,
                invalidateOnRefresh: true,
              },
              onUpdate: updateImage,
            },
          );

          sequenceTweens.push(tween);
        }
      } else {
        if (
          hasSeparateSequences &&
          validTransitions.length !== expectedTransitionCount
        ) {
          console.warn(
            `[ImageSequenceFixed] Você forneceu ${validTransitions.length} frameTransitions, mas ${activeImageSequences!.length} sequências exigem ${expectedTransitionCount} pontos de troca. Adicione exatamente um frameTransition para cada limite entre vídeos.`,
          );
        }

        // Sem uma configuração completa de trocas, preserva a animação global.
        const tween = gsap.to(playhead, {
          frame: effectiveImages.length - 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: activeAnimationStart,
            end: useFullPageDistance
              ? () =>
                  `+=${Math.max(
                    1,
                    document.documentElement.scrollHeight -
                      window.innerHeight -
                      (typeof activeAnimationStart === "number"
                        ? activeAnimationStart
                        : 0),
                  )}`
              : () => `+=${Math.max(1, activeDuration)}`,
            scrub: activeScrub,
            pin: false,
            invalidateOnRefresh: true,
          },
          onUpdate: updateImage,
        });
        sequenceTweens.push(tween);
      }
    }

    /**
     * Cria os overlays do breakpoint ativo.
     *
     * unit: "px" usa distâncias fixas em pixels.
     * unit: "vh" usa porcentagem da altura da viewport.
     * unit: "section" usa porcentagem da altura da própria seção.
     * Para alinhar visualmente em telefones de alturas diferentes, prefira
     * "section"; os offsets são recalculados no refresh/resizing.
     */
    const overlayTimelines: gsap.core.Timeline[] = [];

    activeOverlayIntervals.forEach((interval, index) => {
      const overlay = overlayRefs.current[breakpoint][index];
      const triggerElement = document.querySelector(interval.trigger);

      if (!overlay || !triggerElement) {
        console.warn(
          `[ImageSequenceFixed] Não foi possível encontrar o overlay ${index} ou sua seção "${interval.trigger}".`,
        );
        return;
      }

      const { start, peak, holdEnd, end } = interval;
      const unit = interval.unit ?? "px";

      if (
        ![start, peak, holdEnd, end].every(Number.isFinite) ||
        !(0 <= start && start < peak && peak <= holdEnd && holdEnd < end) ||
        !(unit === "px" || unit === "vh" || unit === "section")
      ) {
        console.warn(
          `[ImageSequenceFixed] Intervalo inválido para "${interval.trigger}".`,
        );
        return;
      }

      // Converte cada offset para pixels usando a unidade escolhida.
      // "section" é a opção recomendada para manter os pontos proporcionais
      // à própria seção em telefones com alturas diferentes.
      const getSectionHeight = () =>
        Math.max(1, triggerElement.getBoundingClientRect().height);

      const toPixels = (value: number) => {
        if (unit === "vh") return (value * window.innerHeight) / 100;
        if (unit === "section") return (value * getSectionHeight()) / 100;
        return value;
      };

      gsap.set(overlay, { opacity: 0 });

      // O próprio ScrollTrigger começa no offset start da seção. Não há uma
      // fase invisível dentro da timeline, que poderia dar a impressão de
      // atraso quando a altura da viewport muda.
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // A seção começa a ser medida quando seu topo encontra a borda
          // inferior da viewport, consistente com os pontos de troca.
          start: () => `top+=${toPixels(start)} bottom`,
          end: () => `top+=${toPixels(end)} bottom`,
          scrub: true,
          invalidateOnRefresh: true,

          // Recalcula estes gatilhos depois dos de prioridade padrão.
          refreshPriority: -1,
        },
      });

      timeline
        .to(overlay, {
          opacity: 1,
          duration: peak - start,
          ease: "none",
        })
        .to(overlay, {
          opacity: 1,
          duration: holdEnd - peak,
          ease: "none",
        })
        .to(overlay, {
          opacity: 0,
          duration: end - holdEnd,
          ease: "none",
        });

      overlayTimelines.push(timeline);
    });

    ScrollTrigger.refresh();

    return () => {
      isDisposed = true;
      resizeObserver.disconnect();

      sequenceTweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
      segmentedSequenceTrigger?.kill();

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
    activeScrub,
    activeClear,
    activeFit,
    activeObjectPosition,
    activeOverlayIntervals,
    activeFrameTransitions,
    activeVideoSegments,
    activeImageSequences,
    responsive,
  ]);

  return (
    <section
      ref={sectionRef}
      className={`pointer-events-none fixed inset-0 z-0 h-screen w-full overflow-hidden ${activeClassName}`}
      style={{ backgroundColor: activeBackground }}
    >
      <canvas
        ref={canvasRef}
        width={activeCanvasWidth}
        height={activeCanvasHeight}
        className={`absolute inset-0 h-full w-full ${activeCanvasClassName}`}
        style={activeCanvasStyle}
      />

      {activeOverlayIntervals.map((interval, index) => (
        <div
          key={`${interval.trigger}-${index}`}
          ref={(element) => {
            overlayRefs.current[breakpoint][index] = element;
          }}
          className="absolute inset-0"
          style={{
            backgroundColor: interval.color ?? "#000000",
            opacity: 0,
          }}
        />
      ))}
    </section>
  );
}

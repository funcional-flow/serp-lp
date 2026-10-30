import {
  video_serp_1,
  video_serp_2,
  video_serp_3,
} from "@/config/videos_frames";

import type { ImageSequenceConfig } from "@/components/gsap/ImageSequenceFixed";

export const imageSequenceDesktop = {
  duration: 100000,
  animationStart: 0,
  fullPageScroll: false,
  scrub: true,
  background: "transparent",
  className: "z-0",
  canvasWidth: 1080,
  canvasHeight: 1920,
  canvasClassName: "w-full",
  fit: "cover",
  objectPosition: "top",
  overlayIntervals: [
    {
      trigger: "#modelos",
      start: 50,
      peak: 85,
      holdEnd: 100,
      end: 105,
      unit: "section",
      color: "#000000",
    },
    {
      trigger: "#qualidade1",
      start: 25,
      peak: 65,
      holdEnd: 100,
      end: 150,
      unit: "section",
      color: "#18181b",
    },
    {
      trigger: "#simbologia",
      start: 40,
      peak: 75,
      holdEnd: 199,
      end: 200,
      unit: "section",
      color: "#EBEBEB",
    },
  ],
  videoSegments: [
    {
      images: video_serp_1,
      start: {
        trigger: "#manifesto",
      },
      end: {
        trigger: "#modelos",
        afterFrames: 50,
      },
    },
    {
      images: video_serp_2.slice(50, 150),
      start: {
        trigger: "#faixaInferior",
      },
      end: {
        trigger: "#qualidade1",
        afterFrames: 100,
      },
    },
    {
      images: video_serp_3.slice(104),
      start: {
        trigger: "#divisao31",
      },
      end: {
        trigger: "#simbologia",
        afterFrames: 50,
      },
    },
  ],
  // o slice é o intervalo que quer os frames, poderia ser slice(50,120) - primeiro e ultimo-1.
  // E se for o numero sozinho slice(30) significa que começa a partir dele até o final do array.
  //   images: [
  //     ...video_serp_1.slice(40),
  //     ...video_serp_2.slice(65, 120),
  //     ...video_serp_3.slice(104),
  //   ],
} satisfies ImageSequenceConfig;

export const imageSequenceMobile = {
  duration: 10000,
  animationStart: 0,
  fullPageScroll: false,
  scrub: true,
  background: "transparent",
  className: "z-0",
  canvasWidth: 1280,
  canvasHeight: 720,
  canvasClassName: "w-full",
  fit: "cover",
  objectPosition: "top",
  overlayIntervals: [
    {
      trigger: "#divisao11",
      start: 125,
      peak: 139,
      holdEnd: 141,
      end: 142,
      unit: "section",
      color: "#000000",
    },
    {
      trigger: "#qualidade1",
      start: 25,
      peak: 70,
      holdEnd: 110,
      end: 150,
      unit: "section",
      color: "#EBEBEB",
    },
    {
      trigger: "#qualidade2",
      start: 25,
      peak: 70,
      holdEnd: 110,
      end: 150,
      unit: "section",
      color: "#18181b",
    },
    {
      trigger: "#qualidade3",
      start: 25,
      peak: 70,
      holdEnd: 110,
      end: 150,
      unit: "section",
      color: "#EBEBEB",
    },
    {
      trigger: "#simbologia",
      start: 25,
      peak: 70,
      holdEnd: 200,
      end: 201,
      unit: "section",
      color: "#EBEBEB",
    },
    // Teste pra bug do lado direito colorido na tela de celular.
    {
      trigger: "#lifestyle",
      start: 40,
      peak: 75,
      holdEnd: 9999,
      end: 10000,
      unit: "section",
      color: "#000000",
    },
  ],
  videoSegments: [
    {
      images: video_serp_1,
      start: {
        trigger: "#manifesto",
      },
      end: {
        trigger: "#modelos",
        afterFrames: 30,
      },
    },
    {
      images: video_serp_2,
      start: {
        trigger: "#faixaInferior",
      },
      end: {
        trigger: "#final",
        afterFrames: 0,
      },
    },
    
    {
      images: video_serp_3.slice(20),
      start: {
        trigger: "#divisao31",
      },
      end: {
        trigger: "#final",
        afterFrames: 0,
      },
    },
  ],
  // o slice é o intervalo que quer os frames, poderia ser slice(50,120) - primeiro e ultimo-1.
  // E se for o numero sozinho slice(30) significa que começa a partir dele até o final do array.
  //   images: [
  //     ...video_serp_1.slice(0,120),
  //     ...video_serp_2.slice(0,120),
  //     ...video_serp_3.slice(0,120),
  // ...video_serp_3.slice(104),
  //   ],
} satisfies ImageSequenceConfig;

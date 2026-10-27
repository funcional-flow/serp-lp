import {
  video_serp_1,
  video_serp_2,
  video_serp_3,
} from "@/config/videos_frames";

import type { ImageSequenceConfig } from "@/components/gsap/ImageSequenceFixed";

export const imageSequenceDesktop = {
  duration: 9000,
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
      trigger: "#divisao11",
      start: 3299,
      peak: 3300,
      holdEnd: 3400,
      end: 3450,
      color: "#000000",
    },
    // {
    //   start: 5300,
    //   peak: 5750,
    //   holdEnd: 5900,
    //   end: 6600,
    //   color: "#18181b",
    // },
    // {
    //   start: 7700,
    //   peak: 8250,
    //   holdEnd: 9500,
    //   end: 9600,
    //   color: "#EBEBEB",
    // },
  ],
  // o slice é o intervalo que quer os frames, poderia ser slice(50,120) - primeiro e ultimo-1.
  // E se for o numero sozinho slice(30) significa que começa a partir dele até o final do array.
  images: [
    ...video_serp_1.slice(40),
    ...video_serp_2.slice(65, 120),
    ...video_serp_3.slice(104),
  ],
} satisfies ImageSequenceConfig;

export const imageSequenceMobile = {
  duration: 50000,
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
      peak: 60,
      holdEnd: 80,
      end: 150,
      unit: "section",
      color: "#EBEBEB",
    },
    {
      trigger: "#qualidade2",
      start: 25,
      peak: 60,
      holdEnd: 80,
      end: 150,
      unit: "section",
      color: "#18181b",
    },
    {
      trigger: "#qualidade3",
      start: 25,
      peak: 60,
      holdEnd: 80,
      end: 150,
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
        afterFrames: 5,
      },
    },
    {
      images: video_serp_2,
      start: {
        trigger: "#faixaInferior",
      },
      end: {
        trigger: "#qualidade3",
        afterFrames: 5,
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

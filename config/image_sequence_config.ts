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
      start: 2750,
      peak: 3300,
      holdEnd: 3400,
      end: 3450,
      color: "#000000",
    },
    {
      start: 5300,
      peak: 5750,
      holdEnd: 5900,
      end: 6600,
      color: "#18181b",
    },
    {
      start: 7700,
      peak: 8250,
      holdEnd: 9500,
      end: 9600,
      color: "#EBEBEB",
    },
  ],
  images: [
    ...video_serp_1.slice(40),
    ...video_serp_2.slice(65, 120),
    ...video_serp_3.slice(104),
  ], // o slice é o intervalo que quer os frames, poderia ser slice(50,120) - primeiro e ultimo-1
} satisfies ImageSequenceConfig;


export const imageSequenceMobile = {
  duration: 16000,
  animationStart: 970,
  fullPageScroll: true,
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
      start: 4000,
      peak: 4290,
      holdEnd: 4400,
      end: 4500,
      color: "#000000",
    },
    {
      start: 6900,
      peak: 7400,
      holdEnd: 7700,
      end: 8050,
      color: "#EBEBEB",
    },
    {
      start: 7900,
      peak: 8400,
      holdEnd: 8700,
      end: 9050,
      color: "#18181b",
    },
    {
      start: 8900,
      peak: 9400,
      holdEnd: 9700,
      end: 10050,
      color: "#EBEBEB",
    },
    // {
    //   start: 7700,
    //   peak: 8250,
    //   holdEnd: 8450,
    //   end: 9000,
    //   color: "#EBEBEB",
    // },
  ],
  images: [
    ...video_serp_1.slice(0, 50),
    ...video_serp_2.slice(50, 120),
    ...video_serp_3.slice(104),
  ], // o slice é o intervalo que quer os frames, poderia ser slice(50,120) - primeiro e ultimo-1
} satisfies ImageSequenceConfig;

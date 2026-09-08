"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const themes = [
    {
      color: "bg-black",
      image: "/Preloader/serp-marca-extensa-branca1.png",
      text: "text-white/50",
      bar_empty: "bg-white/20",
      bar_full: "bg-white",
    },
    // {
    //   color: "bg-purple1",
    //   image: "/Preloader/serp-marca-extensa-amarela.png",
    //   text: "text-yellow1",
    //   bar_empty: "bg-yellow1/20",
    //   bar_full: "bg-yellow1",
    // },
  ];

  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.overflow = "hidden";

    setTheme(randomTheme);
  }, []);

  useEffect(() => {
    const duration = 2500;
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);
    // document.documentElement.style.scrollbarGutter = "stable"; // faz a barra de rolagem ocupar espaço fixo

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setExit(true);

            // Libera o scroll antes de remover o componente
            document.body.style.overflow = "";
            setTimeout(() => {
              onComplete();
            }, 700);
          }, 300);

          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      // Segurança: sempre libera o scroll
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-9999 flex w-full flex-col items-center justify-center ${theme.color} transition-all duration-700 ${exit ? "pointer-events-none opacity-0" : "opacity-100"} `}
    >
      {/* Logo */}
      <div
        className={`mb-3 text-5xl font-bold text-white transition-all duration-700 ${exit ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"} `}
      >
        <Image
          src={theme.image}
          alt="SERPENTIZE"
          width={618}
          height={343}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="h-auto w-full xl:w-96"
        />
      </div>

      <div className="mb-5 text-center text-white/90 uppercase">
        boas vindas ao movimento
      </div>

      {/* Barra */}
      <div className={`h-0.5 w-64 overflow-hidden ${theme.bar_empty}`}>
        <div
          className={`h-full ${theme.bar_full} transition-all duration-100 ease-linear`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Porcentagem */}
      <span className={`font-montserrat mt-3 text-sm ${theme.text}`}>
        {Math.floor(progress)}%
      </span>
    </div>
  );
}

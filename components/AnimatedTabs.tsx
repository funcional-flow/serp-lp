"use client";

import { motion } from "motion/react";
import { ReactNode, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { EffectFlip } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";

interface Tab {
  label: string;
  content: ReactNode;
}

type AnimationType = "slide" | "flip";

type TabsAlign = "left" | "center" | "right";

type TabsPosition = "top" | "bottom";

interface AnimatedTabsProps {
  tabs: Tab[];

  animation?: AnimationType;

  tabsAlign?: TabsAlign;

  tabsPosition?: TabsPosition;

  textColor?: string;

  textSecondaryColor?: string;

  lineColor?: string;

  activeColor?: string;
}

export default function AnimatedTabs({
  tabs,

  animation = "slide",

  tabsAlign = "center",

  tabsPosition = "top",

  textColor = "text-foreground",

  textSecondaryColor = "text-muted-foreground",

  lineColor = "bg-foreground",

  activeColor = "bg-foreground",
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const tabsAlignmentClass = {
    left: "justify-start",

    center: "justify-center",

    right: "justify-end",
  }[tabsAlign];

  const tabsNavigation = (
    <div
      className={`flex gap-8 border-b ${lineColor} mb-8 ${tabsAlignmentClass}`}
    >
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;

        return (
          <button
            key={tab.label}
            type="button"
            onClick={() => {
              swiperInstance?.slideTo(index);
            }}
            className="relative pb-4 text-sm"
          >
            <span
              className={`transition-colors duration-300 ${
                isActive ? textColor : textSecondaryColor
              }`}
            >
              {tab.label}
            </span>

            <motion.span
              className={`${activeColor} absolute right-0 -bottom-0.5 left-0 h-0.5 origin-center`}
              initial={false}
              animate={{
                scaleX: isActive ? 1 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </button>
        );
      })}
    </div>
  );

  const content = (
    <Swiper
      modules={[EffectFlip]}
      effect={animation === "flip" ? "flip" : "slide"}
      grabCursor
      onSwiper={setSwiperInstance}
      onSlideChange={(swiper) => {
        setActiveTab(swiper.activeIndex);
      }}
      className="w-full"
    >
      {tabs.map((tab) => (
        <SwiperSlide key={tab.label}>
          {/* <div className="flex items-center justify-center">{tab.content}</div> */}
          <div>{tab.content}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="flex w-full flex-col">
      {tabsPosition === "top" ? (
        <>
          {tabsNavigation}
          {content}
        </>
      ) : (
        <>
          {content}
          {tabsNavigation}
        </>
      )}
    </div>
  );
}

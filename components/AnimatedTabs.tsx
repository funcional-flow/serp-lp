"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

type AnimationType = "slide" | "fold" | "rotate";
type TabsAlign = "left" | "center" | "right";
type TabsPosition = "top" | "bottom";

interface AnimatedTabsProps {
  tabs: Tab[];
  animation?: AnimationType;
  tabsAlign?: TabsAlign;
  tabsPosition?: TabsPosition;
  activeColor?: string;
  textColor?: string;
  textSecondaryColor?: string;
  lineColor?: string;
}

export default function AnimatedTabs({
  tabs,
  animation = "slide",
  tabsAlign = "center",
  tabsPosition = "top",
  activeColor = "bg-foreground",
  textColor = "text-foreground",
  textSecondaryColor = "text-foreground/50",
  lineColor = "border-white",
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);

  function handleTabChange(index: number) {
    if (index === activeTab) return;

    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  }

  const active = tabs[activeTab];

  /* -------------------------------------------------- */
  /* SLIDE */
  /* -------------------------------------------------- */

  const slideVariants = {
    initial: {
      opacity: 0,
      x: direction * 80,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: direction * -80,
    },
  };

  /* -------------------------------------------------- */
  /* FOLD */
  /* -------------------------------------------------- */

  const foldVariants = {
    initial: {
      opacity: 0,
      rotateY: direction * 90,
      transformOrigin: direction === 1 ? "right center" : "left center",
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      transformOrigin: "center center",
    },
    exit: {
      opacity: 0,
      rotateY: direction * -90,
      transformOrigin: direction === 1 ? "left center" : "right center",
    },
  };

  /* -------------------------------------------------- */
  /* ROTATE */
  /* -------------------------------------------------- */

  const rotateVariants = {
    initial: {
      rotateY: direction > 0 ? -180 : 180,
      opacity: 1,
    },
    animate: {
      rotateY: 0,
      opacity: 1,
    },
    exit: {
      rotateY: direction > 0 ? 180 : -180,
      opacity: 1,
    },
  };

  /* -------------------------------------------------- */
  /* ANIMATION */
  /* -------------------------------------------------- */

  const variants =
    animation === "rotate"
      ? rotateVariants
      : animation === "fold"
        ? foldVariants
        : slideVariants;

  /* -------------------------------------------------- */
  /* TRANSITION */
  /* -------------------------------------------------- */

  const transition =
    animation === "rotate"
      ? {
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1] as const,
        }
      : animation === "fold"
        ? {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as const,
          }
        : {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1] as const,
          };

  /* -------------------------------------------------- */
  /* TABS ALIGNMENT */
  /* -------------------------------------------------- */

  const tabsAlignmentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[tabsAlign];

  /* -------------------------------------------------- */
  /* CONTENT */
  /* -------------------------------------------------- */

  const tabsNavigation = (
    <div className={`flex gap-8 border-b ${lineColor} ${tabsAlignmentClass}`}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;

        return (
          <button
            key={tab.label}
            type="button"
            onClick={() => handleTabChange(index)}
            className="relative pb-4 text-sm"
          >
            <span
              className={`transition-colors duration-300 ${
                isActive ? textColor : textSecondaryColor
              }`}
            >
              {tab.label}
            </span>

            {/* Underline */}
            <motion.span
              className={`${activeColor} absolute right-0 -bottom-px left-0 h-0.5 origin-center`}
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
    <div
      className="relative overflow-hidden"
      style={{
        perspective: animation === "slide" ? undefined : 1200,
      }}
    >
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.div
          key={activeTab}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="py-12"
          style={{
            transformOrigin:
              animation === "rotate" ? "center center" : undefined,
            transformStyle: animation === "slide" ? undefined : "preserve-3d",
            backfaceVisibility: animation === "slide" ? undefined : "hidden",
          }}
        >
          {active.content}
        </motion.div>
      </AnimatePresence>
    </div>
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

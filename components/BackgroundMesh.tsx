"use client";

import { MeshGradient } from "@paper-design/shaders-react";

interface BackgroundMeshProps {
  colors?: string[];
  maxPixelCount?: number;
  speed?: number;
}

export default function BackgroundMesh({
  colors = ["#130821", "#0d001a", "#000000", "#18092a"],
  maxPixelCount = 720 * 480,
  speed = 0.5,
}: BackgroundMeshProps) {
  return (
    <div className="absolute inset-0 z-0">
      <MeshGradient
        width={1920}
        height={1080}
        colors={colors}
        distortion={0.8}
        swirl={0.1}
        speed={speed}
        minPixelRatio={1}
        maxPixelCount={maxPixelCount}
        // speed={motionEnabled ? 1 : 0}
      />
    </div>
  );
}

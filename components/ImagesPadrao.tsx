"use client";
import Image from "next/image";

interface ImagesPadraoProps {
  src: string;
  alt: string;
  className: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ImagesPadrao({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
}: ImagesPadraoProps) {
  return (
    <div>
      {fill ? (
        <Image
          //   src="/fundo1.jpg"
          src={src}
          alt={alt}
          fill
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className={className}
        />
      ) : (
        <Image
          //   src="/fundo1.jpg"
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className={className}
        />
      )}
    </div>
  );
}

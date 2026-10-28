import Image from "next/image";

interface SimbologiaCarouselProps {
  src: string;
  alt?: string;
}

export default function SimbologiaCarousel({
  src,
  alt,
}: SimbologiaCarouselProps) {
  return (
    <div className="relative flex h-[40vh] w-full lg:h-180">
      <Image
        src={src}
        alt={alt || "Modelo"}
        fill
        sizes="(max-width: 768px) 100vw"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="object-cover"
      />
    </div>
  );
}

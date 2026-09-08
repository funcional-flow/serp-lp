import Image from "next/image";

interface ConteudoCarouselProps {
  src: string;
}

export default function ConteudoCarousel({ src }: ConteudoCarouselProps) {
  return (
    <div className="flex h-svh w-full items-center justify-center">
      <Image
        src={src}
        alt=""
        width={660}
        height={366}
        className="h-auto w-xl"
      />
    </div>
  );
}

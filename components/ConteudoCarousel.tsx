import Image from "next/image";

interface ConteudoCarouselProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ConteudoCarousel({
  src,
  width = 660,
  height = 366,
  className = "w-xl",
}: ConteudoCarouselProps) {
  return (
    <div className="relative flex h-svh w-full items-center justify-center">
      <div className="bg-black border border-white p-6 rounded-2xl font-montserrat absolute left-40 z-10 w-xs text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id ipsam
        rem repellendus. Incidunt inventore praesentium esse, explicabo velit ea
        in vitae ipsam fuga quia sequi voluptatem laborum, laudantium nihil.
      </div>
      <div className="relative">
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className={`h-auto rounded-xl ${className}`}
        />
      </div>
    </div>
  );
}

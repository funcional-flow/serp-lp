import Image from "next/image";

interface HeroProps {
  image: string;
  background: string;
}

export default function Hero({ image, background }: HeroProps) {
  return (
    <div className={`flex h-screen items-center justify-center ${background}`}>
      <Image
        src={image}
        alt="SERP"
        width={660}
        height={366}
        className="h-auto w-lg object-cover"
      />
    </div>
  );
}

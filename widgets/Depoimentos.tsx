import LogoLoop from "@/components/reactbits/LogoLoop";
import TestimonialsCard from "@/components/TestimonialsCard";
import Image from "next/image";

export default function Depoimentos() {
  return (
    <div className="relative flex h-[115svh] min-h-[115svh] w-full flex-col items-center justify-center bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/chao2.jpg"
          alt="Chão"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative flex flex-col items-center gap-2 pb-10">
        <h1 className="font-metrim text-6xl uppercase">serpentize</h1>
        <span className="text-lg uppercase">MOVEMENT WITH INTENTION</span>
      </div>
      <div className="relative mb-3 h-auto w-full">
        <LogoLoop
          logos={[
            { node: <TestimonialsCard key="1" title="Depoimento Card 1" /> },
            { node: <TestimonialsCard key="2" title="Depoimento Card 2" /> },
            { node: <TestimonialsCard key="3" title="Depoimento Card 3" /> },
            { node: <TestimonialsCard key="4" title="Depoimento Card 4" /> },
            { node: <TestimonialsCard key="5" title="Depoimento Card 5" /> },
            { node: <TestimonialsCard key="6" title="Depoimento Card 6" /> },
          ]}
          fadeOut={true}
          fadeOutColor="#000000"
          direction="left"
          altura="h-65"
        />
      </div>
      <div className="relative h-auto w-full">
        <LogoLoop
          logos={[
            { node: <TestimonialsCard key="1" title="Depoimento Card 1" /> },
            { node: <TestimonialsCard key="2" title="Depoimento Card 2" /> },
            { node: <TestimonialsCard key="3" title="Depoimento Card 3" /> },
            { node: <TestimonialsCard key="4" title="Depoimento Card 4" /> },
            { node: <TestimonialsCard key="5" title="Depoimento Card 5" /> },
            { node: <TestimonialsCard key="6" title="Depoimento Card 6" /> },
          ]}
          fadeOut={true}
          fadeOutColor="#000000"
          direction="right"
          altura="h-65"
        />
      </div>
      <div className="relative">
        <button className="mt-20 rounded-xl bg-white px-16 py-4 text-lg font-bold text-black uppercase transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
          Lorem ipsum dolor
        </button>
      </div>
    </div>
  );
}

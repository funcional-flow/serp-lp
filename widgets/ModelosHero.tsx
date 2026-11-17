import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";

interface ModeloHeroProps {
  preTitle: string;
  title: string;
  description: string;
  textColor?: string;
  textSecondaryColor?: string;
}

export default function ModelosHero({
  preTitle,
  title,
  description,
  textColor="text-white",
  textSecondaryColor="text-gray-300"
}: ModeloHeroProps) {
  return (
    <ScaleOnScroll
      scale={{ from: 1, to: 1 }}
      opacity={{ from: 0, to: 1 }}
      pin
      pinDuration={1500}
    >
      <div className={`relative z-1 flex min-h-screen flex-col justify-center px-6 ${textColor} md:px-16`}>
        <div className="w-full">
          <div className="text-sm tracking-[0.2em] uppercase">{preTitle}</div>

          <h2 className="mt-6 text-4xl md:text-7xl">{title}</h2>

          <p className={`mt-6 max-w-3xl text-lg ${textSecondaryColor}`}>{description}</p>
        </div>
      </div>
    </ScaleOnScroll>
  );
}

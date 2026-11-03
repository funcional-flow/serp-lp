import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";

export default function QualidadeHero() {
  return (
    <ScaleOnScroll
      scale={{ from: 0, to: 1 }}
      opacity={{ from: 0, to: 1 }}
      pin
      pinDuration={1500}
    >
      <div className="relative z-1 text-white flex min-h-screen flex-col justify-center px-6 md:px-16">
        <div className="max-w-3xl">
          <span className="text-sm tracking-[0.2em] uppercase">
            Nossa essência
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-7xl">
            Qualidade que se revela em cada detalhe.
          </h2>

          <p className="text-gray-300 mt-6 max-w-xl text-lg">
            Conheça o cuidado, os materiais e os processos que fazem parte de
            cada peça.
          </p>
        </div>
      </div>
    </ScaleOnScroll>
  );
}

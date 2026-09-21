import AnimatedTabs from "@/components/AnimatedTabs";
import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";
import QualidadeCard from "@/components/QualidadeCard";

export default function Qualidade() {
  return (
    <ScaleOnScroll
      startAnimation="200px"
      opacity={0}
      scale={0}
      endAnimation="+=900px"
      background={{
        // from: "transparent",
        to: "#000000",
      }}
      className="flex min-h-[120svh] w-full flex-col items-center bg-linear-to-t from-black to-zinc-600"
      contentClassName=""
    >
      <div className="relative h-auto w-400 pt-20">
        <AnimatedTabs
          activeColor="bg-white"
          lineColor="border-white/20"
          textColor="text-white"
          textSecondaryColor="text-white/60"
          grabCursor={false}
          classNameSwiper="rounded-2xl"
          tabs={[
            {
              label: "Modelo Boxy",
              content: (
                <QualidadeCard
                  title="Modelo Boxy"
                  image1="/qualidade/camisa_cabide11.png"
                  image2="/qualidade/camisa_cabide11.png"
                />
              ),
            },
            {
              label: "Modelo Classica",
              content: (
                <QualidadeCard
                  title="Modelo Classica"
                  image1="/qualidade/camisa_cabide11.png"
                  image2="/qualidade/camisa_cabide11.png"
                />
              ),
            },
            {
              label: "Modelo Regata",
              content: (
                <QualidadeCard
                  title="Modelo Regata"
                  image1="/qualidade/camisa_cabide11.png"
                  image2="/qualidade/camisa_cabide11.png"
                />
              ),
            },
          ]}
        />
      </div>
    </ScaleOnScroll>
  );
}

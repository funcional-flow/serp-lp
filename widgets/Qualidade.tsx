import AnimatedTabs from "@/components/AnimatedTabs";
import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";
import QualidadeCard from "@/components/QualidadeCard";

export default function Qualidade() {
  return (
    <div className="flex min-h-[120svh] w-full flex-col items-center">
      <div className="relative h-auto pt-20 xl:w-300 2xl:w-400">
        <AnimatedTabs
          activeColor="bg-white"
          lineColor="border-white/20"
          textColor="text-white"
          textSecondaryColor="text-white/60"
          grabCursor={false}
          classNameSwiper="rounded-2xl"
          labelSize="text-base"
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
    </div>
  );
}
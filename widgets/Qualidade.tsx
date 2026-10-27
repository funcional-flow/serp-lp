import AnimatedTabs from "@/components/AnimatedTabs";
// import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";
import QualidadeCard from "@/components/QualidadeCard";
import QualidadeCardMobile from "@/components/QualidadeCardMobile";

export default function Qualidade() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Desktop */}
      <div className="relative hidden min-h-[120svh] w-sm pt-20 lg:block xl:w-300 2xl:w-400">
        <AnimatedTabs
          activeColor="bg-white"
          lineColor="border-white/20"
          textColor="text-white"
          textSecondaryColor="text-white/60"
          grabCursor={false}
          classNameSwiper="rounded-2xl"
          labelSize="text-sm lg:text-base"
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

      {/* Mobile */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="h-svh">
          <QualidadeCardMobile title="Modelo Boxy" />
        </div>
        <div className="h-svh">
          <QualidadeCardMobile
            title="Modelo Classica"
            backgroundColor="bg-white"
            titleColor="text-black"
            textColor="text-white"
          />
        </div>
        <div className="h-svh">
          <QualidadeCardMobile title="Modelo Regata" />
        </div>
      </div>
    </div>
  );
}

import AnimatedTabs from "@/components/AnimatedTabs";
import ScaleOnScroll from "@/components/gsap/ScaleOnScroll";
import QualidadeCard from "@/components/QualidadeCard";

export default function Qualidade() {
  return (
    <div className="flex min-h-[120svh] w-full flex-col items-center bg-linear-to-t from-black to-zinc-600">
      <ScaleOnScroll startAnimation="200px" opacity={0} scale={0}>
        <h1 className="pt-15 pb-8 text-center text-5xl font-bold text-white uppercase">
          Qualidade das peças
        </h1>
        <p className="w-5xl pb-8 text-center text-white/80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          praesentium earum quisquam, consequatur officia nihil, similique ut
          obcaecati eius facere ratione, consectetur voluptatem exercitationem
          voluptas sit ipsum est laboriosam commodi!
        </p>
        <div className="relative h-auto w-6xl">
          <AnimatedTabs
            activeColor="bg-white"
            lineColor="border-white/20"
            textColor="text-white"
            textSecondaryColor="text-white/60"
            grabCursor={false}
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
    </div>
  );
}

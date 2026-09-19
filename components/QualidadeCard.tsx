import Image from "next/image";
import { qualidadadeClassica } from "@/config/qualidade_dados";

interface QualidadeCardProps {
  title: string;
  image1: string;
  image2: string;
}

export default function QualidadeCard({
  title,
  image1,
  image2,
}: QualidadeCardProps) {
  return (
    <div className="relative w-full rounded-2xl bg-linear-to-b from-white to-gray-300 py-6">
      <div className="relative flex items-center justify-center">
        {/* Imagem Esquerda */}
        <div className="relative flex w-1/3 flex-col items-center">
          <div className="relative h-102 w-full">
            <Image
              src={image1}
              alt="Qualidade 1"
              fill
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-metrim text-3xl uppercase">serp</span>
        </div>
        {/* Texto do Meio */}
        <div className="flex w-1/3 flex-col gap-4">
          <h2 className="font-metrim mx-auto mb-2 w-2xs rounded-lg bg-black py-2 text-center text-3xl tracking-widest text-white uppercase">
            {title}
          </h2>
          {qualidadadeClassica.map((item) => (
            <div className="flex flex-col gap-6 ml-20" key={item.titulo}>
              <div className="flex items-center gap-5">
                <item.icone className="h-8 w-8" />
                <div className="flex flex-col">
                  <h3 className="font-bold uppercase">{item.titulo}</h3>
                  <span>{item.descricao}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Imagem Direita */}
        <div className="relative flex w-1/3 flex-col items-center">
          <div className="relative h-102 w-full">
            <Image
              src={image2}
              alt="Qualidade 1"
              fill
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-metrim text-3xl uppercase">minimal</span>
        </div>
      </div>
    </div>
  );
}

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
    <div className="h-[75svh] w-full bg-linear-to-b from-white to-gray-300 py-6 select-none">
      <div className="flex items-center justify-center">
        {/* Imagem Esquerda */}
        <div className="flex w-1/3 flex-col items-center gap-5">
          <div className="relative h-140 w-full">
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
          <h2 className="font-metrim mx-auto mb-8 max-w-full rounded-lg bg-black px-4 py-2 text-center text-3xl tracking-widest text-white uppercase shadow-lg shadow-gray-500">
            {title}
          </h2>
          {qualidadadeClassica.map((item) => (
            <div
              className="mx-auto flex min-w-58 flex-col gap-6"
              key={item.titulo}
            >
              <div className="flex items-center gap-5">
                <item.icone className="h-7 w-7" />
                <div className="flex flex-col">
                  <h3 className="text-base font-bold uppercase">
                    {item.titulo}
                  </h3>
                  <span className="text-sm">{item.descricao}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Imagem Direita */}
        <div className="flex w-1/3 flex-col items-center gap-5">
          <div className="relative h-140 w-full">
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

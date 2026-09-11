import Image from "next/image";
import BackgroundMesh from "./BackgroundMesh";

interface CardDetailsProps {
  src: string;
  width: number;
  height: number;
  texto: string;
  imgAntes?: boolean;
  alt?: string;
  background?: string;
  corTexto?: string;
  larguraTexto?: string;
  classNameImage?: string;
  tamanhoImagem?: string;
  backgroundMeshColors?: string[];
  resolucaoMaximaMesh?: number;
}

export default function CardDetails({
  src,
  alt = "",
  width,
  height,
  texto,
  imgAntes = true,
  background = "bg-white",
  corTexto = "text-black",
  larguraTexto = "w-full",
  classNameImage,
  tamanhoImagem = "w-2xl",
  backgroundMeshColors = ["#130821", "#0d001a", "#000000", "#18092a"],
  resolucaoMaximaMesh = 720 * 480,
}: CardDetailsProps) {
  return (
    <div className={`${background} relative flex h-svh items-center`}>
      <BackgroundMesh
        maxPixelCount={resolucaoMaximaMesh}
        colors={backgroundMeshColors}
      />
      <div className="relative container mx-auto flex items-center gap-10">
        <div
          className={`${imgAntes ? "order-1" : "order-2"} ${tamanhoImagem} h-auto`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${classNameImage} ${tamanhoImagem} h-auto rounded-2xl`}
          />
        </div>
        <div
          className={`text-lg ${larguraTexto} ${corTexto} ${imgAntes ? "order-2" : "order-1"}`}
        >
          {texto}
        </div>
      </div>
    </div>
  );
}

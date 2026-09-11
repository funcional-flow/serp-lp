import Image from "next/image";
import BackgroundMesh from "./BackgroundMesh";

interface CardDetailsProps {
  img_principal: string;
  img_secundaria1?: string;
  img_secundaria2?: string;
  img_secundaria3?: string;
  img_secundaria4?: string;
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
  img_principal,
  img_secundaria1 = img_principal,
  img_secundaria2 = img_principal,
  img_secundaria3 = img_principal,
  img_secundaria4 = img_principal,
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
    <div className={`${background} select-none relative flex h-svh items-center`}>
      <BackgroundMesh
        maxPixelCount={resolucaoMaximaMesh}
        colors={backgroundMeshColors}
      />
      <div className="relative flex items-center gap-10 px-15">
        <div className="absolute inset-0 top-1/2 left-1/2 h-auto w-xl -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/Details/serp-simbolo-preto.png"
            alt=""
            fill
            className={`object-contain opacity-10`}
          />
        </div>
        <div
          className={`relative ${imgAntes ? "order-1" : "order-3"} ${tamanhoImagem} h-auto`}
        >
          <Image
            src={img_principal}
            alt={alt}
            width={width}
            height={height}
            className={`${classNameImage} ${tamanhoImagem} h-auto rounded-2xl`}
          />
        </div>
        <div className={`text-lg ${larguraTexto} ${corTexto} gap-5 order-2 text-center flex flex-col`}>
          <h1 className="font-metrim text-7xl uppercase [-webkit-text-stroke:1px_black]">serpentize</h1>
          <h2 className="uppercase text-2xl">Lorem Ipsum Dolor</h2>
          <span>{texto}</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg w-sm mx-auto mt-10">Saiba mais</button>
        </div>

        {/* Molduras com quatro imagens */}
        <div className={`relative ${imgAntes ? "order-3" : "order-1"}`}>
          <div className="bg-red-transparent h-[80svh] w-md" />
          {/* coluna 1 */}
          <div
            className={`absolute top-0 left-0 h-120 w-55 overflow-hidden rounded-2xl border-5`}
          >
            <Image
              src={img_secundaria1}
              alt=""
              fill
              sizes=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={`absolute top-122 left-0 h-62 w-55 overflow-hidden rounded-2xl border-5`}
          >
            <Image
              src={img_secundaria1}
              alt=""
              fill
              className="h-full w-full object-cover"
            />
          </div>
          {/* coluna 2 */}
          <div
            className={`absolute top-0 right-0 h-90 w-55 overflow-hidden rounded-2xl border-5`}
          >
            <Image
              src={img_secundaria1}
              alt=""
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={`absolute top-92 right-0 h-92 w-55 overflow-hidden rounded-2xl border-5`}
          >
            <Image
              src={img_secundaria1}
              alt=""
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

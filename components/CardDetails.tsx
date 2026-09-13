"use client"
import Image from "next/image";
import BackgroundMesh from "./BackgroundMesh";
import AnimatedTabs from "./AnimatedTabs";

interface CardDetailsProps {
  img_principal1: string;
  img_principal2?: string;
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
  borderColor?: string;
  logoColor?: string;
  //   Tabs
  corTextoSecundario?: string;
  activeTabColor?: string;
  lineColor?: string;
}

export default function CardDetails({
  img_principal1,
  img_principal2 = img_principal1,
  img_secundaria1 = img_principal1,
  img_secundaria2 = img_secundaria1,
  img_secundaria3 = img_secundaria1,
  img_secundaria4 = img_secundaria1,
  alt = "",
  width,
  height,
  texto,
  imgAntes = true,
  background = "bg-white",
  corTexto = "text-black",
  corTextoSecundario = "text-black/50",
  larguraTexto = "w-full",
  classNameImage,
  tamanhoImagem = "w-2xl",
  backgroundMeshColors = ["#130821", "#0d001a", "#000000", "#18092a"],
  resolucaoMaximaMesh = 720 * 480,
  borderColor = "border-white",
  logoColor = "black",
  activeTabColor = "bg-background",
  lineColor = "border-black/25",
}: CardDetailsProps) {
  return (
    <div
      className={`${background} relative flex h-svh items-center select-none`}
    >
      <BackgroundMesh
        maxPixelCount={resolucaoMaximaMesh}
        colors={backgroundMeshColors}
      />
      <div className="relative z-1 flex items-center gap-10 px-15">
        {/* Logo de fundo */}
        <div className="absolute inset-0 top-1/2 left-1/2 z-2 h-auto w-xl -translate-x-1/2 -translate-y-1/2">
          <Image
            src={`/Details/serp-simbolo-${logoColor}.png`}
            alt=""
            fill
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`object-contain opacity-10`}
          />
        </div>
        
        {/* Imagem Principal */}
        <div
          className={`relative ${imgAntes ? "order-1" : "order-3"} ${tamanhoImagem} h-auto z-10`}
        >
          <AnimatedTabs
            animation="flip"
            tabsAlign="center"
            tabsPosition="top"
            activeColor={activeTabColor}
            textColor={corTexto}
            textSecondaryColor={corTextoSecundario}
            lineColor={lineColor}
            tabs={[
              {
                label: "Frente",
                content: (
                  <Image
                    src={img_principal1}
                    alt={alt}
                    width={width}
                    height={height}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className={`${classNameImage} ${tamanhoImagem} h-auto rounded-2xl`}
                  />
                ),
              },
              {
                label: "Verso",
                content: (
                  <Image
                    src={img_principal2}
                    alt={alt}
                    width={width}
                    height={height}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className={`${classNameImage} ${tamanhoImagem} h-auto rounded-2xl`}
                  />
                ),
              },
            ]}
          />
        </div>

        {/* Texto no Centro */}
        <div
          className={`text-lg ${larguraTexto} ${corTexto} order-2 flex flex-col gap-5 text-center`}
        >
          <h1 className="font-metrim text-7xl uppercase [-webkit-text-stroke:1px_black]">
            serpentize
          </h1>
          <h2 className="text-2xl uppercase">Lorem Ipsum Dolor</h2>
          <span>{texto}</span>
          <a
            href="#"
            className="z-10 mx-auto mt-10 w-sm rounded-lg bg-black px-4 py-2 text-white"
          >
            Saiba mais
          </a>
        </div>

        {/* Molduras com quatro imagens */}
        <div className={`relative ${imgAntes ? "order-3" : "order-1"}`}>
          <div className="bg-red-transparent h-[80svh] w-md" />
          {/* coluna 1 */}
          <div
            className={`absolute top-0 left-0 h-120 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
          >
            <Image
              src={img_secundaria1}
              alt=""
              fill
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={`absolute top-122 left-0 h-62 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
          >
            <Image
              src={img_secundaria2}
              alt=""
              fill
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-cover"
            />
          </div>
          {/* coluna 2 */}
          <div
            className={`absolute top-0 right-0 h-90 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
          >
            <Image
              src={img_secundaria3}
              alt=""
              fill
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={`absolute top-92 right-0 h-92 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
          >
            <Image
              src={img_secundaria4}
              alt=""
              fill
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

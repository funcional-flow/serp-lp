"use client";
import Image from "next/image";
import BackgroundMesh from "./BackgroundMesh";

interface CardCtaProps {
  img_principal1: string;
  width?: number;
  height?: number;
  img_secundaria1?: string;
  img_secundaria2?: string;
  img_secundaria3?: string;
  img_secundaria4?: string;
  titulo: string;
  subtitulo: string;
  texto: string;
  alt?: string;
  background?: string;
  corTexto?: string;
  larguraTexto?: string;
  classNameImage?: string;
  backgroundMeshColors?: string[];
  resolucaoMaximaMesh?: number;
  borderColor?: string;
  logoColor?: string;
  linkCamisa?: string;
  buttonTextColor?: string;
  buttonColor?: string;
}

export default function CardCta({
  img_principal1,
  width,
  height,
  img_secundaria1 = img_principal1,
  img_secundaria2 = img_secundaria1,
  img_secundaria3 = img_secundaria1,
  img_secundaria4 = img_secundaria1,
  alt = "",
  titulo,
  subtitulo,
  texto,
  background = "bg-white",
  corTexto = "text-black",
  larguraTexto = "w-full",
  classNameImage,
  backgroundMeshColors = ["#130821", "#0d001a", "#000000", "#18092a"],
  resolucaoMaximaMesh = 720 * 480,
  borderColor = "border-white",
  logoColor = "black",
  linkCamisa = "#pecas",
  buttonColor = "bg-black",
  buttonTextColor = "text-white",
}: CardCtaProps) {
  return (
    <div className={`${background} relative flex h-auto w-full`}>
      <BackgroundMesh
        maxPixelCount={resolucaoMaximaMesh}
        colors={backgroundMeshColors}
      />
      <div className="relative z-10 flex w-full">
        {/* Imagem Principal */}
        <div
          className={`relative order-1 flex h-auto w-1/3 flex-1 items-center justify-center`}
        >
          <Image
            src={img_principal1}
            alt={alt}
            width={width}
            height={height}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`${classNameImage} h-auto rounded-2xl object-contain`}
          />
        </div>

        {/* Texto no Centro */}
        <div
          className={`w-1/3 flex-1 text-lg ${larguraTexto} ${corTexto} order-2 flex flex-col justify-center gap-5 text-center`}
        >
          <h1 className="font-metrim text-7xl uppercase [-webkit-text-stroke:1px_black]">
            {titulo}
          </h1>
          <h2 className="text-2xl uppercase">{subtitulo}</h2>
          <span className="text-lg">{texto}</span>
          <a
            href={linkCamisa}
            target="_blank"
            className={`z-10 mx-auto mt-10 w-sm rounded-lg ${buttonTextColor} ${buttonColor} px-4 py-2`}
          >
            Saiba mais
          </a>
        </div>

        {/* Molduras com quatro imagens */}
        <div
          className={`relative order-3 flex w-1/3 flex-1 items-center justify-center gap-3`}
        >
          {/* coluna 1 */}
          <div className="relative flex flex-col gap-3">
            <div
              className={`relative h-120 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
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
              className={`relative h-62 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
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
          </div>
          {/* coluna 2 */}
          <div className="relative flex flex-col gap-3">
            <div
              className={`relative h-90 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
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
              className={`relative h-92 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
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

      {/* Logo de fundo */}
      <div className="absolute inset-0 top-1/2 left-1/2 z-1 h-auto w-xl -translate-x-1/2 -translate-y-1/2">
        <Image
          src={`/Details/serp-simbolo-${logoColor}.png`}
          alt=""
          fill
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className={`object-contain opacity-12`}
        />
      </div>
      <div className="absolute inset-0 top-1/2 left-1/2 z-0 h-auto w-xl -translate-x-1/2 -translate-y-1/2">
        <Image
          src={`/Details/serp-simbolo-black.png`}
          alt=""
          fill
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className={`object-contain`}
        />
      </div>
    </div>
  );
}

// {/* Molduras com quatro imagens */}
//         <div className={`relative order-3 flex w-1/3 flex-1`}>
//           {/* coluna 1 */}
//           <div
//             className={`absolute top-0 left-0 h-120 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
//           >
//             <Image
//               src={img_secundaria1}
//               alt=""
//               fill
//               draggable={false}
//               onContextMenu={(e) => e.preventDefault()}
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className={`absolute top-122 left-0 h-62 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
//           >
//             <Image
//               src={img_secundaria2}
//               alt=""
//               fill
//               draggable={false}
//               onContextMenu={(e) => e.preventDefault()}
//               className="h-full w-full object-cover"
//             />
//           </div>
//           {/* coluna 2 */}
//           <div
//             className={`absolute top-0 right-0 h-90 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
//           >
//             <Image
//               src={img_secundaria3}
//               alt=""
//               fill
//               draggable={false}
//               onContextMenu={(e) => e.preventDefault()}
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className={`absolute top-92 right-0 h-92 w-55 overflow-hidden rounded-2xl border-5 ${borderColor}`}
//           >
//             <Image
//               src={img_secundaria4}
//               alt=""
//               fill
//               draggable={false}
//               onContextMenu={(e) => e.preventDefault()}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

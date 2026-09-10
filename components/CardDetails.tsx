import Image from "next/image";

interface CardDetailsProps {
  src: string;
  width: number;
  height: number;
  texto: string;
  imgAntes?: boolean;
  alt?: string;
  background?: string;
  corTexto?: string;
  classNameImage?: string;
  tamanhoImagem?: string;
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
  classNameImage,
  tamanhoImagem = "w-2xl",
}: CardDetailsProps) {
  return (
    <div className={`${background} relative flex h-svh items-center`}>
      <div className="relative container mx-auto flex items-center gap-10">
        <div className={`${imgAntes ? "order-1" : "order-2"} ${tamanhoImagem}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${classNameImage} ${tamanhoImagem} rounded-2xl`}
          />
        </div>
        <div
          className={`text-lg ${corTexto} ${imgAntes ? "order-2" : "order-1"}`}
        >
          {texto}
        </div>
      </div>
    </div>
  );
}

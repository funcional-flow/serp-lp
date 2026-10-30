import Image from "next/image";
import { qualidadadeClassica } from "@/config/qualidade_dados";

interface QualidadeCardMobileProps {
  textColor?: string;
  titleColor?: string;
  backgroundColor?: string;
  title: string;
}

export default function QualidadeCardMobile({
  title,
  titleColor = "text-white",
  textColor = "text-black",
  backgroundColor = "bg-black",
}: QualidadeCardMobileProps) {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <h2
        className={`font-metrim mx-auto mb-8 max-w-full rounded-lg ${backgroundColor} px-4 py-2 text-center text-3xl tracking-widest ${titleColor} uppercase shadow-lg shadow-gray-500`}
      >
        {title}
      </h2>
      {qualidadadeClassica.map((item) => (
        <div className="mx-auto flex min-w-58 flex-col gap-6" key={item.titulo}>
          <div className="flex items-center gap-5">
            <item.icone className={`${textColor} h-7 w-7`} />
            <div className={`flex flex-col ${textColor}`}>
              <h3 className="text-base font-bold uppercase">{item.titulo}</h3>
              <span className="text-sm">{item.descricao}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

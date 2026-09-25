import { Tamanhos } from "@/types/pecas";

interface ProdutoInfoProps {
  titulo: string;
  descricao: string;
  preco: number;
  tamanhos: Tamanhos[];
}

export default function ProdutoInfo({
  titulo,
  descricao,
  preco,
  tamanhos,
}: ProdutoInfoProps) {
  const precoFinal = (preco / 100).toFixed(2);
  return (
    <div className="flex w-full flex-col bg-white p-6">
      <h1 className="text-2xl font-bold uppercase">{titulo}</h1>
      <span className="pt-3 text-gray-600">{descricao}</span>
      <p className="flex gap-5 pt-5">
        {tamanhos.map((tamanho, index) =>
          tamanho.available ? (
            <span key={index} className="bg-gray-200 px-3 py-1 font-bold">
              {tamanho.tamanho}
            </span>
          ) : (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 font-bold line-through opacity-50"
            >
              {tamanho.tamanho}
            </span>
          ),
        )}
      </p>
      <p className="font-montserrat flex flex-col pt-10 text-2xl font-bold">
        <span>R$ {precoFinal}</span>
        <span className="text-sm font-normal">Até 4x de R$ 49,98</span>
      </p>
      <a
        href="#"
        className="mt-5 flex w-full items-center justify-center rounded-lg bg-black py-2 text-white"
      >
        Comprar Agora
      </a>
    </div>
  );
}

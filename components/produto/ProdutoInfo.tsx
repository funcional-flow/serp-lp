import { Tamanhos } from "@/types/pecas";

import { Cor } from "@/types/pecas";

interface ProdutoInfoProps {
  titulo: string;
  descricao: string;
  preco: number;
  tamanhos: Tamanhos[];
  cores: Cor[];
}

export default function ProdutoInfo({
  titulo,
  descricao,
  preco,
  tamanhos,
  cores,
}: ProdutoInfoProps) {
  const precoFinal = (preco / 100).toFixed(2).toString().replace(".", ",");
  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="text-2xl font-bold uppercase">{titulo}</h1>
      <span className="text-gray-600">{descricao}</span>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold">Cores:</span>
        <div className="flex gap-5">
          {cores.map((cor, index) =>
            cor.available ? (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                  <div
                    className={`absolute z-1 h-7 w-7 rounded-full ${cor.hex}`}
                  />
                </div>
                <span className="text-sm text-gray-500">{cor.cor}</span>
              </div>
            ) : (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                  <div
                    className={`absolute z-1 h-7 w-7 rounded-full ${cor.hex}`}
                  />
                </div>
                <span className="text-sm text-gray-500 line-through opacity-50">
                  {cor.cor}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold">Selecione um tamanho:</span>
        <div className="flex gap-5">
          {tamanhos.map((tamanho, index) =>
            tamanho.available ? (
              <span
                key={index}
                className="rounded-md bg-gray-200 px-3 py-1 font-bold"
              >
                {tamanho.tamanho}
              </span>
            ) : (
              <span
                key={index}
                className="rounded-md bg-gray-200 px-3 py-1 font-bold line-through opacity-50"
              >
                {tamanho.tamanho}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="flex w-min items-center">
        <span className="font-bold">Quantidade:</span>
        <input
          type="number"
          min={1}
          max={10}
          defaultValue={1}
          className="font-montserrat ml-2 w-12 rounded border border-gray-300 py-1 pl-3 text-sm font-bold"
        />
      </div>
      <p className="font-montserrat flex flex-col text-2xl font-bold">
        <span>R$ {precoFinal}</span>
        <span className="text-sm font-bold">No PIX com 15% de Desconto</span>
        <span className="pt-2 text-sm font-normal">
          Ou R$ 199,90 no cartão em até 4x de R$ 49,98 sem juros.
        </span>
      </p>
      <a
        href="#"
        className="mt-5 flex w-full items-center justify-center rounded-lg bg-black py-3 text-white uppercase"
      >
        Encomendar Agora
      </a>
      <div className="flex items-center gap-2">
        <div className="text-sm font-bold">Calcular Frete:</div>
        <input
          type="text"
          placeholder="CEP"
          maxLength={9}
          className="font-montserrat w-28 rounded border border-gray-300 px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}

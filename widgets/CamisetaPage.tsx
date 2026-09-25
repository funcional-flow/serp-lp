"use client";
import { Product } from "@/types/pecas";
import ProdutoGaleria from "@/components/produto/ProdutoGaleria";
import ProdutoInfo from "@/components/produto/ProdutoInfo";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface CamisetaPageProps {
  product: Product;
}

export default function CamisetaPage({ product }: CamisetaPageProps) {
  const router = useRouter();
  return (
    // <div className="flex min-h-svh w-full flex-col bg-linear-to-b from-black to-zinc-800">
    <div className="relative flex min-h-svh w-full flex-col bg-linear-to-b from-gray-100 to-gray-300">
      <button
        onClick={() => router.back()}
        className="absolute left-0 flex h-15 w-min cursor-pointer items-center transition-transform duration-300 hover:scale-105"
      >
        <ChevronLeft className="ml-3 size-6 text-gray-500" />
        <span className="mx-2 text-gray-500">Voltar</span>
      </button>
      <div className="mx-auto mt-15 flex gap-5 rounded-xl bg-white p-10">
        <div className="h-180 w-180">
          <ProdutoGaleria product={product} />
        </div>
        <div className="w-2xl">
          <ProdutoInfo
            titulo={product.name}
            descricao={product.description}
            preco={product.price}
            tamanhos={product.sizes}
          />
        </div>
      </div>
    </div>
  );
}

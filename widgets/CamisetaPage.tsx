"use client";
import { Product } from "@/types/pecas";
import ProdutoGaleria from "@/components/produto/ProdutoGaleria";
import ProdutoInfo from "@/components/produto/ProdutoInfo";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        className="group fixed left-0 z-100 flex h-15 w-min cursor-pointer items-center transition-all duration-200 hover:font-bold"
      >
        <ChevronLeft className="ml-3 size-6 text-gray-500 transition-all duration-200 group-hover:stroke-3" />
        <span className="mx-2 text-gray-500">Voltar</span>
      </button>

      <div className="mx-auto mt-15 flex flex-col gap-5 rounded-xl bg-white p-10">
        {/* Card inicial com foto e descrição do lado */}
        <div className="flex">
          <div className="h-180 w-180">
            <ProdutoGaleria product={product} />
          </div>
          <div className="w-2xl">
            <ProdutoInfo
              titulo={product.name}
              descricao={product.description}
              preco={product.price}
              tamanhos={product.sizes}
              cores={product.cores}
            />
          </div>
        </div>

        {/* Descrição */}
        <div className="mx-auto flex h-auto w-6xl max-w-6xl flex-col pt-13 pb-40">
          <h1 className="text-center text-5xl font-bold">Detalhes</h1>
          <Accordion
            multiple
            className="w-full"
            defaultValue={[
              product.details[0].titulo,
              product.details[1].titulo,
            ]}
          >
            {product.details.map((text, index) => (
              <AccordionItem key={index} value={text.titulo}>
                <AccordionTrigger
                  className={
                    "text-xl font-bold capitalize hover:cursor-pointer"
                  }
                >
                  {text.titulo}
                </AccordionTrigger>
                <AccordionContent className={"text-base text-zinc-600"}>
                  {text.texto}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

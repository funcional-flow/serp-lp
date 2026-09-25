import { Product } from "@/types/pecas";
import ProdutoGaleria from "@/components/produto/ProdutoGaleria";
import ProdutoInfo from "@/components/produto/ProdutoInfo";

interface CamisetaPageProps {
  product: Product;
}

export default function CamisetaPage({ product }: CamisetaPageProps) {
  return (
    <div className="flex min-h-svh w-full flex-col bg-linear-to-b from-white to-gray-300">
      <div className="flex h-15 w-full bg-gray-300"></div>
      <div className="mx-auto flex gap-5 pt-10">
        <div className="h-165 w-165">
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

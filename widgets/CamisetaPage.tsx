import { Product } from "@/types/pecas";
import ProdutoDetalhes from "@/components/produto/ProdutoDetalhes";
import ProdutoGaleria from "@/components/produto/ProdutoGaleria";
import ProdutoInfo from "@/components/produto/ProdutoInfo";

interface CamisetaPageProps {
  product: Product;
}

export default function CamisetaPage({ product }: CamisetaPageProps) {
  return (
    <div className="flex min-h-svh w-full flex-col bg-linear-to-b from-white to-gray-300">
      <ProdutoGaleria product={product} />
      <ProdutoInfo
        titulo={product.name}
        descricao={product.description}
        preco={product.price}
        tamanhos={product.sizes}
      />
    </div>
  );
}

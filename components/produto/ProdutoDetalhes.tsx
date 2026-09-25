import SlideWithThumb from "../SlideWithThumb";
import { Product } from "@/types/pecas";

interface ProdutoDetalhesProps {
    product: Product
}

export default function ProdutoDetalhes({ product }: ProdutoDetalhesProps) {
  return (
    <div>
      <div className="h-150 w-150">
        <SlideWithThumb images={product.images} navigationLength="lg" />
      </div>
    </div>
  );
}

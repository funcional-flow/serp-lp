import SlideWithThumb from "../SlideWithThumb";
import { Product } from "@/types/pecas";

interface ProdutoGaleriaProps {
  product: Product;
}

export default function ProdutoGaleria({ product }: ProdutoGaleriaProps) {
  return (
    <div className="h-150 w-150">
      <SlideWithThumb
        dragabble={false}
        images={product.images}
        navigationLength="lg"
      />
    </div>
  );
}

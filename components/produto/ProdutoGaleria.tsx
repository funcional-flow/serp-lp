import SlideWithThumb from "../SlideWithThumb";
import { Product } from "@/types/pecas";

interface ProdutoGaleriaProps {
  product: Product;
}

export default function ProdutoGaleria({ product }: ProdutoGaleriaProps) {
  return (
    <div className="h-full w-full">
      <SlideWithThumb
        dragabble={false}
        images={product.images}
        navigationLength="lg"
        navigationColor="text-black"
        activeThumbClassName="border-black/15"
        imageClassName="object-contain"
        // cardClassName=""
        // thumbClassName="bg-black"
      />
    </div>
  );
}

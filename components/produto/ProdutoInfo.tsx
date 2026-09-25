import { Product, Tamanhos } from "@/types/pecas";

interface ProdutoInfoProps {
    titulo: string;
    descricao: string;
    preco: number;
    tamanhos: Tamanhos[];
}

export default function ProdutoInfo({ titulo, descricao, preco, tamanhos }: ProdutoInfoProps) {
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <p>{preco}</p>
        </div>
    )
}
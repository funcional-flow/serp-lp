import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-muted-foreground text-sm font-medium">
        Produto não encontrado
      </p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Ops! Esse produto não existe.
      </h1>

      <p className="text-muted-foreground mt-4 max-w-md">
        O produto que você está procurando não existe ou não está mais
        disponível.
      </p>

      <Button className="mt-8">
        <Link href="/">Ver produtos</Link>
      </Button>
    </main>
  );
}

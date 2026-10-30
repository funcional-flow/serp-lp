"use client";

import { Star } from "lucide-react";

interface TestimonialsCard {
  title: string;
  rate?: number;
  description?: string;
}
export default function DepoimentoCard({
  title,
  rate,
  description,
}: TestimonialsCard) {
  return (
    <div className="flex max-w-45 flex-col rounded-lg bg-zinc-900 p-2.5 text-white outline outline-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-white lg:w-lg lg:p-6">
      <h1 className="pb-1 text-base font-bold lg:text-2xl">{title}</h1>
      <h2 className="flex pb-2">
        {Array.from({ length: rate || 0 }, (_, index) => (
          <Star key={index} className="h-3 w-3 fill-white" />
        ))}
      </h2>
      <span className="text-xs text-zinc-300 lg:text-base">{description}</span>
    </div>
  );
}

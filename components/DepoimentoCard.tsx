interface TestimonialsCard {
  title: string;
  subtitle?: string;
  description?: string;
}
export default function DepoimentoCard({
  title,
  subtitle,
  description,
}: TestimonialsCard) {
  return (
    <div className="flex w-xs flex-col rounded-lg bg-zinc-900 p-2.5 text-white outline outline-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-white lg:w-lg lg:p-6">
      <h1 className="pb-1 text-base font-bold lg:text-2xl">{title}</h1>
      <h2 className="pb-2 text-sm lg:pb-4 lg:text-xl">{subtitle}</h2>
      <span className="text-xs text-zinc-300 lg:text-base">{description}</span>
    </div>
  );
}

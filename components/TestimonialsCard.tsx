interface TestimonialsCard {
  title: string;
  subtitle?: string;
  description?: string;
}
export default function TestimonialsCard({
  title,
  subtitle,
  description,
}: TestimonialsCard) {
  return (
    <div className="flex w-lg flex-col rounded-lg outline outline-zinc-700 bg-zinc-900 p-6 hover:shadow-md hover:shadow-white hover:scale-105 text-white transition-all duration-300">
      <h1 className="pb-1 text-2xl font-bold">{title}</h1>
      <h2 className="pb-4 text-xl">Lorem Ipsum Dolor</h2>
      <span className="text-base text-zinc-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe
        labore minima! Ducimus hic iure necessitatibus iste facilis laudantium
        tenetur natus nihil minima. Expedita esse obcaecati dignissimos sint
        non! Impedit?
      </span>
    </div>
  );
}

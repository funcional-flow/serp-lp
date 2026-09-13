import { ScrollSections } from "@/components/gsap/ScrollSections";

export default function page() {
  return (
    <div className="flex flex-col">
      <ScrollSections
        content={[
          <div key="1" className="h-svh w-full bg-red-500">
            Lore
          </div>,
          <div key="2" className="h-svh w-full bg-blue-500">
            Lore
          </div>,
        ]}
      />
      <div className="h-[1/3vh] w-full bg-green-500"></div>
      <div className="h-[1/3vh] w-full bg-yellow-500"></div>
    </div>
  );
}

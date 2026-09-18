import Image from "next/image";

export default function Qualidade() {
  return (
    <div className="relative flex min-h-svh w-full flex-col bg-linear-to-b from-white to-gray-300 px-24">
      <h1 className="mx-auto pt-20 text-5xl">Qualidade das peças</h1>
      <div className="flex w-full">
        <div className="relative flex flex-col">
          <div className="relative w-xl">
            <Image
              src="/qualidade/camisa_cabide1.png"
              alt="Qualidade 1"
              width={500}
              height={500}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col"></div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Details() {
  return (
    <div className="flex h-[110svh] w-full items-center justify-center gap-0 bg-white px-24">
      <h1 className="flex w-2/3 text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
        repellendus minus assumenda harum est esse, excepturi repellat.
      </h1>
      <div className="relative flex w-1/3 items-center justify-center">
        <Image
          src="/camisa2_transparente.png"
          alt="Serpentize"
          width={1254}
          height={1254}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}

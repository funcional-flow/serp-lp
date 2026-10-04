import Image from "next/image";

export default function Manifesto() {
  return (
    <div className="relative flex h-svh w-full flex-col items-center justify-center gap-10 bg-linear-to-b from-white to-gray-300 px-6 lg:h-[110svh] lg:flex-row lg:gap-0 lg:px-24">
      <h1 className="order-2 flex text-center text-2xl lg:order-1 lg:w-2/3 lg:text-start lg:text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
        repellendus minus assumenda harum est esse, excepturi repellat.
      </h1>
      <div className="relative order-1 flex items-center justify-center lg:order-2 lg:w-1/3">
        <Image
          src="/manifesto/camisa2_transparente.png"
          alt="Serpentize"
          width={1254}
          height={1254}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function PreLoaderStatic() {
  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black transition-all duration-700`}
    >
      {/* Logo */}
      {/* <div className={`mb-8 text-5xl font-bold text-white transition-all duration-700 translate-y-0 opacity-100`}>
        SERPENTIZEserp-marca-extensa-branca
      </div> */}
      <div className={`relative mb-8 text-5xl font-bold text-white`}>
        <Image
          src="/Hero/serp-marca-extensa-branca.png"
          alt="SERPENTIZE"
          width={618}
          height={343}
          className="w-full xl:w-96 h-auto"
        />
      </div>

      {/* Barra */}
      <div className="h-0.5 w-64 overflow-hidden bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `89%`,
          }}
        />
      </div>

      {/* Porcentagem */}
      <span className="mt-3 text-sm text-white/50">89%</span>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex h-lvh w-full flex-col items-center justify-center bg-zinc-900 px-6 text-white lg:justify-start lg:px-12">
      {/* Parte superior */}
      <div className="mt-10 flex flex-col gap-10 lg:mt-20 lg:flex-row lg:gap-20">
        {/* Coluna 1 */}
        <div className="flex flex-col items-center gap-2 text-center lg:mr-50 lg:items-start lg:gap-5 lg:text-start">
          <Link
            href={"#inicio"}
            className="group flex w-fit items-center gap-4"
          >
            <div className="flex aspect-square items-center rounded-full bg-white px-1 transition-all duration-200">
              <Image
                src="/logos/preta/logo_serp_preta (3).png"
                alt="Serpentize"
                width={100}
                height={100}
                className="h-auto w-10 transition-all duration-200 group-hover:w-10"
              />
            </div>
            <span className="text-3xl transition-all duration-100 group-hover:font-bold">
              Serpentize
            </span>
          </Link>
          <span className="text-white/40">
            © Copyright Serpentize 2026. Todos os direitos reservados.
          </span>
        </div>

        <div className="flex justify-center gap-10 lg:justify-start lg:gap-20">
          {/* Coluna 2 */}
          <div className="flex flex-col gap-2">
            <h2 className="pb-3 text-lg font-bold">Sessões</h2>
            <a
              href={"#inicio"}
              className="w-fit text-zinc-200 hover:text-white"
            >
              Inicio
            </a>
            <a
              href={"#manifesto"}
              className="w-fit text-zinc-200 hover:text-white"
            >
              Sobre
            </a>
            <a
              href={"#modelosSerp"}
              className="w-fit text-zinc-200 hover:text-white"
            >
              Peças
            </a>
            <a
              href={"#qualidadeBoxy"}
              className="w-fit text-zinc-200 hover:text-white"
            >
              Qualidade das Peças
            </a>
            <a
              href={"#simbologia"}
              className="w-fit text-zinc-200 hover:text-white"
            >
              Simbologia
            </a>
            <a
              href={"#lifestyle"}
              className="w-fit text-zinc-200 hover:text-white"
            >
              Lifestyle
            </a>
            <a
              href={"#depoimentos"}
              className="w-fit text-zinc-200 hover:text-white"
            >
              Depoimentos
            </a>
            <a href={"#faq"} className="w-fit text-zinc-200 hover:text-white">
              FAQ
            </a>
            <a href={"#cta"} className="w-fit text-zinc-200 hover:text-white">
              CTA
            </a>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col gap-2">
            <h2 className="pb-3 text-lg font-bold">Social</h2>
            <a href={"#contato"}>Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Parte Inferior */}
      <div className="relative flex flex-col items-center gap-5 pt-20 lg:pt-40">
        <div className="absolute top-19 z-2 h-[10vh] w-full bg-linear-to-b from-zinc-900 to-transparent lg:top-39 lg:h-50" />
        <h1 className="font-metrim z-1 text-5xl tracking-widest text-white/10 uppercase lg:text-9xl">
          Serpentize
        </h1>
        <p className="text-xs tracking-[0.5em] text-white/20 uppercase lg:text-xl">
          Movement with intention
        </p>
      </div>
    </div>
  );
}

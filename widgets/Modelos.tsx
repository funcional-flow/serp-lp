import CardModelo from "@/components/CardModelo";
import LogoLoop from "@/components/LogoLoop";

export default function Modelos() {
  const logosBranca = [
    { src: "/logo_loop/branca/logo_loop_branca (1).png", alt: "Tech 1" },
    { src: "/logo_loop/branca/logo_loop_branca (2).png", alt: "Tech 2" },
    { src: "/logo_loop/branca/logo_loop_branca (3).png", alt: "Tech 3" },
    { src: "/logo_loop/branca/logo_loop_branca (4).png", alt: "Tech 4" },
  ];
  //   const logosAmarela = [
  //     { src: "/logo_loop/amarela/logo_loop_amarela (1).png", alt: "Tech 1" },
  //     { src: "/logo_loop/amarela/logo_loop_amarela (2).png", alt: "Tech 2" },
  //     { src: "/logo_loop/amarela/logo_loop_amarela (3).png", alt: "Tech 3" },
  //     { src: "/logo_loop/amarela/logo_loop_amarela (4).png", alt: "Tech 4" },
  //   ];
  //   const logosRoxa = [
  //     { src: "/logo_loop/roxa/logo_loop_roxa (1).png", alt: "Tech 1" },
  //     { src: "/logo_loop/roxa/logo_loop_roxa (2).png", alt: "Tech 2" },
  //     { src: "/logo_loop/roxa/logo_loop_roxa (3).png", alt: "Tech 3" },
  //     { src: "/logo_loop/roxa/logo_loop_roxa (4).png", alt: "Tech 4" },
  //   ];
  const logosPreta = [
    { src: "/logo_loop/preta/logo_loop_preta (1).png", alt: "Tech 1" },
    { src: "/logo_loop/preta/logo_loop_preta (2).png", alt: "Tech 2" },
    { src: "/logo_loop/preta/logo_loop_preta (3).png", alt: "Tech 3" },
    { src: "/logo_loop/preta/logo_loop_preta (4).png", alt: "Tech 4" },
  ];

  return (
    <div className="relative">
      {/* ====== Card ====== */}
      <div className="relative">
        <LogoLoop
          logos={logosBranca}
          fadeOut
          fadeOutColor="var(--color-black)"
          ariaLabel="Serpentize"
          className="bg-black"
        />
      </div>
      <div className="relative">
        <CardModelo
          img_principal1="/camisa1.jpg"
          img_principal2="/camisa2.jpg"
          img_secundaria1="/Details/modelo_man2.png"
          width={1254}
          height={1254}
          titulo="Boxy"
          subtitulo="Lorem Ipsum Dolor"
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={true}
          tamanhoImagem="w-md"
          corTexto="text-black"
          corTextoSecundario="text-black/50"
          background="bg-white"
          borderColor="border-black"
          buttonTextColor="text-white"
          buttonColor="bg-black"
          lineColor="border-black/25"
          linkCamisa="/boxy"
          //   Mesh colors for background gradient
          backgroundMeshColors={["#FFFFFF", "#DFDFDF", "#C0C0C0"]}
        />
      </div>
      {/* ====== Card ====== */}
      <div className="relative">
        <LogoLoop
          logos={logosPreta}
          fadeOut
          fadeOutColor="var(--color-white)"
          ariaLabel="Serpentize"
          className="bg-white"
        />
      </div>
      <div className="relative">
        <CardModelo
          img_principal1="/camisa2.jpg"
          img_principal2="/camisa1.jpg"
          img_secundaria1="/Details/modelo_man3.png"
          tamanhoImagem="w-md"
          width={1254}
          height={1254}
          titulo="Padrao"
          subtitulo="Lorem Ipsum Dolor"
          buttonTextColor="text-black"
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={false}
          background="bg-black"
          corTexto="text-white"
          corTextoSecundario="text-white/50"
          backgroundMeshColors={["#000000", "#0C0C0C", "#141414"]}
          logoColor="white"
          buttonColor="bg-white"
          borderColor="border-white"
          lineColor="border-white/25"
          linkCamisa="/padrao"
        />
      </div>
      {/* ====== Card ====== */}
      <div className="relative">
        <LogoLoop
          logos={logosBranca}
          fadeOut
          fadeOutColor="var(--color-black)"
          ariaLabel="Serpentize"
          className="bg-black"
        />
      </div>
      <div className="relative">
        <CardModelo
          img_principal1="/camisa1.jpg"
          img_principal2="/camisa2.jpg"
          img_secundaria1="/Details/modelo_man2.png"
          width={1254}
          height={1254}
          titulo="regata"
          subtitulo="Lorem Ipsum Dolor"
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={true}
          tamanhoImagem="w-md"
          corTexto="text-black"
          corTextoSecundario="text-black/50"
          background="bg-white"
          backgroundMeshColors={["#FFFFFF", "#DFDFDF", "#C0C0C0"]}
          borderColor="border-black"
          buttonColor="bg-black"
          buttonTextColor="text-white"
          lineColor="border-black/25"
          linkCamisa="/regata"
        />
      </div>
      {/* Card 1 */}
      {/* <div className="relative">
        <LogoLoop
          logos={logosAmarela}
          fadeOut
          fadeOutColor="var(--color-black)"
          ariaLabel="Serpentize"
          className="bg-black"
        />
      </div> */}
      {/* <div className="relative">
        <CardModelo
          img_principal1="/Details/modelo_woman3.png"
          img_secundaria1="/Details/modelo_woman3.png"
          width={859}
          height={858}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={true}
          background="bg-black"
          corTexto="text-white"
          classNameImage="max-w-md"
          larguraTexto="max-w-4xl"
          backgroundMeshColors={["#dc9f38", "#FFAD20", "#D48700"]}
        />
      </div> */}
      {/* Card 2 */}
      {/* <div className="relative">
        <LogoLoop
          logos={logosRoxa}
          fadeOut
          fadeOutColor="var(--color-white)"
          ariaLabel="Serpentize"
          className="bg-white"
        />
      </div>
      <div className="relative">
        <CardModelo
          img_principal1="/Details/modelo_man1.png"
          width={507}
          height={859}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={true}
          background="bg-purple1"
          corTexto="text-white"
          classNameImage=""
          backgroundMeshColors={["#3a1f61", "#311A52", "#401A75"]}
        />
      </div> */}
      {/* Card 4 */}
      {/* <div className="relative">
        <LogoLoop
          logos={logosAmarela}
          fadeOut
          fadeOutColor="var(--color-black)"
          ariaLabel="Serpentize"
          className="bg-black"
        />
      </div>
      <div className="relative">
        <CardModelo
          img_principal1="/Details/modelo_woman4.png"
          width={1053}
          height={823}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={true}
          background="bg-yellow-600"
          corTexto="text-white"
          classNameImage="max-w-md"
          larguraTexto="max-w-4xl"
          backgroundMeshColors={["#dc9f38", "#FFAD20", "#D48700"]}
        />
      </div> */}
    </div>
  );
}

import CardCta from "@/components/CardCta";

export default function Cta() {
  return (
    <div className="relative flex min-h-[115svh] w-full">
      <CardCta
        img_principal1="/modelos/modelo_principal_frente.png"
        width={940}
        height={1672}
        img_secundaria1="/Details/modelo_man2.png"
        classNameImage="w-96"
        titulo="CTA"
        subtitulo="Lorem Ipsum Dolor"
        texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
        corTexto="text-white"
        background="bg-black"
        borderColor="border-white"
        buttonTextColor="text-black"
        buttonColor="bg-white"
        linkCamisa="/boxy"
        logoColor="white"
        //   Mesh colors for background gradient
        backgroundMeshColors={["#000000", "#131313", "#000000", "#161616"]}
      />
    </div>
  );
}

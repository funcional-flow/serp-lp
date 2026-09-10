import CardDetails from "@/components/CardDetails";

export default function Details() {
  return (
    <div className="relative">
      <div className="relative">
        <CardDetails
          src="/Details/modelo_man1.png"
          width={507}
          height={859}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={true}
          background="bg-purple1"
          corTexto="text-white"
          classNameImage=""
        />
      </div>
      <div className="relative">
        <CardDetails
          src="/Details/modelo_man2.png"
          width={507}
          height={859}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempora, at, dolorem officiis culpa iste obcaecati quas blanditiis ad eos fuga assumenda incidunt error, suscipit temporibus dolorum atque quisquam. Ipsam!"
          imgAntes={false}
          background="bg-white"
        />
      </div>
    </div>
  );
}

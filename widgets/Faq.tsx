// criar sessao de SAC tbm

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faq_data } from "@/config/faq_dados";

export default function Faq() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center bg-linear-to-b from-white to-gray-300 px-24 text-lg select-none">
      <h1 className="mb-5 text-5xl font-bold uppercase">
        Perguntas Frequentes
      </h1>
      <h2 className="mb-15 max-w-6xl">
        We are here to help you with any questions you may have. If you dont
        find what you need, please contact us. support@example.com
      </h2>
      <div className="relative">
        <Accordion className="w-6xl" defaultValue={[faq_data[0].titulo]}>
          {faq_data.map((text, index) => (
            <AccordionItem key={index} value={text.titulo}>
              <AccordionTrigger
                className={"text-2xl font-bold capitalize hover:cursor-pointer"}
              >
                {text.titulo}
              </AccordionTrigger>
              <AccordionContent className={"text-lg text-zinc-600"}>
                {text.descricao}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

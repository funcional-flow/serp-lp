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
    <div className="flex min-h-svh w-full flex-col justify-center bg-linear-to-b from-white to-gray-300 px-6 py-20 select-none lg:items-center lg:px-24 lg:text-lg">
      <h1 className="mb-5 text-center text-xl font-bold uppercase lg:text-5xl">
        Perguntas Frequentes
      </h1>
      <h2 className="mb-10 text-sm text-zinc-600 lg:mb-15 lg:max-w-6xl">
        We are here to help you with any questions you may have. If you dont
        find what you need, please contact us. support@example.com
      </h2>
      <div className="relative">
        <Accordion
          className="w-full lg:w-4xl"
          defaultValue={[faq_data[0].titulo]}
        >
          {faq_data.map((text, index) => (
            <AccordionItem key={index} value={text.titulo}>
              <AccordionTrigger
                className={
                  "text-sm font-bold capitalize hover:cursor-pointer lg:text-2xl"
                }
              >
                {text.titulo}
              </AccordionTrigger>
              <AccordionContent className={"text-sm text-zinc-600 lg:text-lg"}>
                {text.descricao}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

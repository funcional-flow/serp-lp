import {
  Blocks,
  LensConcave,
  Printer,
  Scale,
  Spool,
  StarCheck,
} from "lucide-react";

export type QualidadeItem = {
  titulo: string;
  descricao: string;
  icone: typeof Printer;
};

export const qualidadadeClassica: QualidadeItem[] = [
  {
    titulo: "Composição:",
    descricao: "100% Algodão Premium",
    icone: StarCheck,
  },
  {
    titulo: "Gramatura:",
    descricao: "180g/m²",
    icone: Scale,
  },
  {
    titulo: "Tecido:",
    descricao: "Malha Penteada Fio 30.1",
    icone: LensConcave,
  },
  {
    titulo: "Modelagem",
    descricao: "Ajuste Clássico",
    icone: Blocks,
  },
  {
    titulo: "Acabamento:",
    descricao: "Costuras Reforçadas",
    icone: Spool,
  },
  {
    titulo: "Processo de Estampa:",
    descricao: "Impressão Digital DTG",
    icone: Printer,
  },
];

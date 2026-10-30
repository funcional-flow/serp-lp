export type depoimento = {
  key: string;
  title: string;
  rate: number;
  description: string;
};

const descriptions = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe labore minima! Ducimus hic iure necessitatibus iste facilis laudantium tenetur natus nihil minima. Expedita esse obcaecati dignissimos sint non! Impedit?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe labore minima! Ducimus hic iure necessitatibus iste facilis laudantium tenetur natus nihil minima.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe labore minima!",
  "Similique saepe labore minima! Ducimus hic iure necessitatibus iste facilis laudantium tenetur natus nihil minima. Expedita esse obcaecati dignissimos sint non! Impedit?",
  "Ducimus hic iure necessitatibus iste facilis laudantium tenetur natus nihil minima. Expedita esse obcaecati dignissimos sint non! Impedit?",
  "Expedita esse obcaecati dignissimos sint non! Impedit?",
  "Lorem",
];

export const depoimentos: depoimento[] = [
  {
    key: "1",
    title: "Depoimento 1",
    rate: 5,
    description: descriptions[0],
  },
  {
    key: "2",
    title: "Depoimento 2",
    rate: 4,
    description: descriptions[1],
  },
  {
    key: "3",
    title: "Depoimento 3",
    rate: 5,
    description: descriptions[2],
  },
  {
    key: "4",
    title: "Depoimento 4",
    rate: 3,
    description: descriptions[3],
  },
  {
    key: "5",
    title: "Depoimento 5",
    rate: 5,
    description: descriptions[4],
  },
  {
    key: "6",
    title: "Depoimento 6",
    rate: 4,
    description: descriptions[5],
  },
  {
    key: "7",
    title: "Depoimento 7",
    rate: 5,
    description: descriptions[6],
  },
];

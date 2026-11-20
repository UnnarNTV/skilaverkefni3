export type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

export const questions = [
  {
    id: 1,
    question: "What is the capital of Assyria?",
    options: ["Assur", "Reykjavík", "Keflavík", "I don't know that!"],
    correctIndex: 0,
  },
  {
    id: 2,
    question: "What is the air speed velocity of an unladen swallow?",
    options: [
      "40km/h",
      "69.8km/h",
      "88mph",
      "What do you mean? An African or a European swallow?",
    ],
    correctIndex: 3,
  },
  {
    id: 3,
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Yellow", "Dead Salmon"],
    correctIndex: 3,
  },
  // ... fleiri spurningar
];

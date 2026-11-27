export type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

export const questions = [
  {
    id: 1,
    question: "What is your name?",
    options: [
      "Sir Lancelot of Camelot.",
      'I am the knight who says: "NI!"',
      "Sir Not-Appearing-In-This-Quiz.",
      "There are some who call me... Tim?",
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    question: "What is your quest?",
    options: [
      "To find a shrubbery. One that looks nice. And isn't too expensive.",
      "To seek the holy grail!",
      "To purchase a parrot that isn't dead.",
      "To find a cheese shop that actually sells cheese.",
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    question: "What is your favorite color?",
    options: ["Red.", "Blue.", "Yellow.", "Møøse brøwn."],
    correctIndex: 1,
  },
  {
    id: 4,
    question: "What is the capital of Assyria?",
    options: [
      "Assur, obviously.",
      "Reykjavík.",
      "Keflavík.",
      "I don't know that!",
    ],
    correctIndex: 0,
  },
  {
    id: 5,
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
    id: 6,
    question:
      "NOBODY EXPECTS THE SPANISH INQUISITION!!!\nNow, how do you plead?",
    options: [
      "We're innocent!",
      "I didn't expect a kind of Spanish Inquisition.",
      "I CONFESS! I CONFESS!",
      "This is a lingerie shop, sir.",
    ],
    correctIndex: 2,
  },
];

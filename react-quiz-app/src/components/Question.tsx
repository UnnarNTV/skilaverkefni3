import type { Question } from "../data/questions";

type QuestionProps = {
  question: Question;
  answered: boolean;
  currentSelected: number | null;
  onAnswerQuestion: (index: number) => void;
};

export function Question({
  question,
  answered,
  currentSelected,
  onAnswerQuestion,
}: QuestionProps) {
  return (
    <div className="question">
      <p>{question.question}</p>
      {question.options.map((option, i) => (
        // Maps each answer option to a ui element row
        <div
          onClick={() => onAnswerQuestion(i)}
          key={i}
          className={`answer ${answered ? (i === question.correctIndex ? "correct" : i === currentSelected ? "incorrect" : "") : ""}`}
        >
          <p>
            {i + 1}: {option}
          </p>
        </div>
      ))}
    </div>
  );
}

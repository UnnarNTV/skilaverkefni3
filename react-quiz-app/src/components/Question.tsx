import type { Question } from "../data/questions";

type QuestionProps = {
  question: Question;
  answered: boolean;
  currentSelected: number | null;
  onNextQuestion: () => void;
  onAnswerQuestion: (index: number) => void;
};

export function Question({
  question,
  answered,
  currentSelected,
  onNextQuestion,
  onAnswerQuestion,
}: QuestionProps) {
  return (
    <div className="question">
      <p>Q: {question.question}</p>
      {question.options.map((option, i) => (
        <div
          key={i}
          className={`answer ${answered ? (i === question.correctIndex ? "correct" : i === currentSelected ? "incorrect" : "") : ""}`}
          // className={`answer ${answered && i === question.correctIndex ? "correct" : ""}`}
        >
          <p>
            {i + 1}: {option}
          </p>
          <button onClick={() => onAnswerQuestion(i)}>⬅</button>
        </div>
      ))}
      <button onClick={onNextQuestion}>Next question</button>
    </div>
  );
}

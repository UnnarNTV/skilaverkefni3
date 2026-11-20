import type { Question } from "../data/questions";

type QuestionProps = {
  question: Question;
  answered: boolean;
  onNextQuestion: () => void;
  onAnswerQuestion: () => void;
};

export function Question({
  question,
  answered,
  onNextQuestion,
  onAnswerQuestion,
}: QuestionProps) {
  return (
    <div className="question">
      <p>Q: {question.question}</p>
      {question.options.map((option, i) => (
        <div
          key={i}
          className={`answer ${answered && i === question.correctIndex ? "correct" : ""}`}
        >
          <p>
            {i + 1}: {option}
          </p>
          <button onClick={onAnswerQuestion}>⬅</button>
        </div>
      ))}
      <button onClick={onNextQuestion}>Next question</button>
    </div>
  );
}

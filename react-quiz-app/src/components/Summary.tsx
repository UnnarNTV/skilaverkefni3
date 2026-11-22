import type { Question } from "../data/questions";
import failure from "../assets/failure.gif";
import grail from "../assets/grail.webp";

type SummaryProps = {
  questions: Question[];
  correctlyAnswered: number;
  incorrectlyAnswered: number;
};

export function Summary({
  questions,
  correctlyAnswered,
  incorrectlyAnswered,
}: SummaryProps) {
  return (
    <>
      {correctlyAnswered < 3 ? (
        <>
          <img
            src={failure}
            alt="You have failed and are cast into the Gorge of Eternal Peril!"
          />
          <h2>You have failed!</h2>
          <p>
            You answered{" "}
            {correctlyAnswered <= 0 ? "none" : `only ${correctlyAnswered}`} out
            of {questions.length} questions correctly, with{" "}
            {incorrectlyAnswered} wrong, and you are cast into the Gorge of
            Eternal Peril!
          </p>
        </>
      ) : (
        <>
          <img
            src={grail}
            alt="You have passed the Bridge of Death. The Quest for the Holy Grail can continue!"
          />
          <h2>You have prevailed!</h2>
          <p>
            You have answered {correctlyAnswered} out of {questions.length}{" "}
            questions correctly, with {incorrectlyAnswered} wrong, and you may
            continue your quest! Right. Off you go.
          </p>
        </>
      )}
    </>
  );
}

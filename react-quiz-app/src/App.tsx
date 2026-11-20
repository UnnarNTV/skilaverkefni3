import { useState } from "react";
import "./App.css";
import { questions } from "./data/questions";
import { Question } from "./components/Question";
import failure from "./images/failure.gif";

function App() {
  type Screen = "greeting" | "quiz" | "summary";
  const [screen, setScreen] = useState<Screen>("greeting");
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];
  const [answers, setAnswers] = useState<boolean[]>([]);
  const answered = answers.length > questionIndex;
  const correctlyAnswered = answers.filter(
    (answeredCorrectly) => answeredCorrectly,
  ).length;
  const [currentSelected, setCurrentSelected] = useState<number | null>(null);
  const isLastQuestion = questionIndex >= questions.length - 1;

  // Changes between states in the quiz
  function handleScreenChange() {
    if (screen === "greeting") {
      setScreen("quiz");
    } else if (screen === "quiz") {
      setScreen("summary");
    } else {
      setScreen("greeting");
    }
  }

  // Resets the quiz interface and data
  function handleReset() {
    setQuestionIndex(0);
    setAnswers([]);
    setCurrentSelected(null);
    setScreen("greeting");
  }

  // Changes to the next question in the quiz
  function handleNextQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
    setCurrentSelected(null);
  }

  // Handles the feedback and management of user answering questions
  function handleAnswerQuestion(index: number) {
    if (!answered) {
      setCurrentSelected(index);

      // Records whether or not the user answered correctly or not
      setAnswers([...answers, index === currentQuestion.correctIndex]);
    }
  }

  return (
    <>
      <h1>Bridge of Death</h1>
      <section>
        {screen === "greeting" && (
          <>
            <p>
              Stop! Who would cross the Bridge of Death must answer me these
              questions five, ere the other side he see!
            </p>
            <button onClick={handleScreenChange}>Ask me the questions!</button>
          </>
        )}
        {screen === "quiz" && (
          <>
            <Question
              question={currentQuestion}
              answered={answered}
              currentSelected={currentSelected}
              onAnswerQuestion={handleAnswerQuestion}
            />
            <p>
              Question {questionIndex + 1} of {questions.length}
            </p>
            <button
              onClick={isLastQuestion ? handleScreenChange : handleNextQuestion}
              disabled={!answered}
            >
              {isLastQuestion ? "Finish quest!" : "Next question!"}
            </button>
          </>
        )}
        {screen === "summary" && (
          <>
            {correctlyAnswered < 3 ? (
              <>
                <img
                  src={failure}
                  alt="You have failed and are cast into the Pit of Eternal Peril!"
                />
                <h2>You have failed!</h2>
                <p>
                  You answered{" "}
                  {correctlyAnswered <= 0
                    ? "none"
                    : `only ${correctlyAnswered}`}{" "}
                  out of {questions.length} questions correctly, and are cast
                  into the Pit of Eternal Peril!
                </p>
              </>
            ) : (
              <>
                <h2>You have prevailed!</h2>
                <p>
                  You have completed the quest and answered {correctlyAnswered}{" "}
                  out of {questions.length} questions correctly!
                </p>
              </>
            )}
            <button onClick={handleReset}>Restart quest!</button>
          </>
        )}
      </section>
    </>
  );
}

export default App;

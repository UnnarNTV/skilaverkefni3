import { useState } from "react";
import "./App.css";
import { questions } from "./data/questions";
import { Question } from "./components/Question";
import failure from "./images/failure.gif";

import grail from "./images/grail.webp";
import { Greeting } from "./components/Greeting";
import { Summary } from "./components/Summary";

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
  const incorrectlyAnswered = answers.length - correctlyAnswered;
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
      <main>
        <h1>Bridge of Death</h1>
        {screen === "greeting" && (
          <>
            <Greeting />
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
            <Summary
              questions={questions}
              correctlyAnswered={correctlyAnswered}
              incorrectlyAnswered={incorrectlyAnswered}
            />
            <button onClick={handleReset}>Restart quest!</button>
          </>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export default App;

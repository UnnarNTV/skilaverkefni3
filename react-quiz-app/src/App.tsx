import { useState } from "react";
import "./App.css";
import { questions } from "./data/questions";
import { Question } from "./components/Question";
import { Greeting } from "./components/Greeting";
import { Summary } from "./components/Summary";
import siSound from "./assets/si.mp3";

function App() {
  type Screen = "greeting" | "quiz" | "summary"; // Possible screens
  const [screen, setScreen] = useState<Screen>("greeting"); // Controls which screen of the app to render
  const [questionIndex, setQuestionIndex] = useState(0); // An index of the current question
  const currentQuestion = questions[questionIndex]; // The question currently being asked
  const [answers, setAnswers] = useState<boolean[]>([]); // Tracks whether questions have been answered correctly or incorrectly
  const answered = answers.length > questionIndex; // Indicates if the current question has been answered
  const correctlyAnswered = answers.filter(
    (answeredCorrectly) => answeredCorrectly,
  ).length; // Tracks the number of correct answers
  const incorrectlyAnswered = answers.length - correctlyAnswered; // Tracks the number of incorrect answers
  const [currentSelected, setCurrentSelected] = useState<number | null>(null); // The currently selected answer to a question
  const isLastQuestion = questionIndex >= questions.length - 1; // Indicates if we are on the last question
  const sound = new Audio(siSound); // A sound effect

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

    if (questionIndex === 4) {
      try {
        sound.play();
      } catch (error) {
        console.log("Could not play sound effect!");
      }
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

        {/* The greeting screen */}
        {screen === "greeting" && (
          <>
            <Greeting />
            <button onClick={handleScreenChange}>Ask me the questions!</button>
          </>
        )}

        {/* The main quiz screen */}
        {screen === "quiz" && (
          <>
            <Question
              question={currentQuestion}
              answered={answered}
              currentSelected={currentSelected}
              onAnswerQuestion={handleAnswerQuestion}
            />
            <p>
              Question {questionIndex + 1} of{" "}
              {isLastQuestion ? questions.length + "?!?" : questions.length - 1}
            </p>
            <button
              onClick={isLastQuestion ? handleScreenChange : handleNextQuestion}
              disabled={!answered}
            >
              {isLastQuestion || questionIndex === 4
                ? "Finish quiz!"
                : "Next question!"}
              {isLastQuestion && " (For real)"}
            </button>
          </>
        )}

        {/* The summary screen */}
        {screen === "summary" && (
          <>
            <Summary
              questions={questions}
              correctlyAnswered={correctlyAnswered}
              incorrectlyAnswered={incorrectlyAnswered}
            />
            <button onClick={handleReset}>Restart!</button>
          </>
        )}
      </main>
    </>
  );
}

export default App;

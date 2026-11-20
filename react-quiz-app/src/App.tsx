import { useState } from "react";
import "./App.css";
import { questions } from "./data/questions";
import { Question } from "./components/Question";

function App() {
  type Screen = "greeting" | "quiz" | "summary";
  const [screen, setScreen] = useState<Screen>("greeting");
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];
  const [answers, setAnswers] = useState<boolean[]>([]);
  const answered = answers.length > questionIndex;
  const [currentSelected, setCurrentSelected] = useState<number | null>(null);

  // changes between states in the quiz
  function handleScreenChange() {
    if (screen === "greeting") {
      setScreen("quiz");
      console.log(currentQuestion);
    } else if (screen === "quiz") {
      setScreen("summary");
    } else {
      setScreen("greeting");
    }
  }

  // changes to the next question in the quiz
  function handleNextQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
    setCurrentSelected(null);
  }

  // handles the feedback and management of user answering questions
  function handleAnswerQuestion(index: number) {
    if (!answered) {
      setCurrentSelected(index);

      // Records wheter or not the user answered correctly or not
      setAnswers([
        ...answers,
        currentSelected === currentQuestion.correctIndex,
      ]);
    }
  }

  return (
    <>
      <h1>Bridge of Death</h1>
      <section>
        {screen === "greeting" && (
          <p>
            Stop! Who would cross the Bridge of Death must answer me these
            questions five, ere the other side he see!
          </p>
        )}
        {screen === "quiz" && (
          <Question
            question={currentQuestion}
            answered={answered}
            currentSelected={currentSelected}
            onNextQuestion={handleNextQuestion}
            onAnswerQuestion={handleAnswerQuestion}
          />
        )}
        {screen === "summary" && <p>You have completed the quest</p>}
      </section>
      <button onClick={handleScreenChange}>Change Screen</button>
    </>
  );
}

export default App;

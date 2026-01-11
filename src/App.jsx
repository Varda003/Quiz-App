import { useState, useEffect } from "react";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import ReportPage from "./components/ReportPage";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});


  useEffect(() => {
    if (screen === "quiz") {
      fetch("https://opentdb.com/api.php?amount=15")
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data.results);
        });
    }
  }, [screen]);

  return (
    <>
      {screen === "start" && (
        <StartPage
          email={email}
          setEmail={setEmail}
          onStart={() => setScreen("quiz")}
        />
      )}

      {screen === "quiz" && (
  <QuizPage
    questions={questions}
    answers={answers}
    setAnswers={setAnswers}
    onFinish={() => setScreen("report")}
  />
)}

      {screen === "report" && (
  <ReportPage
    questions={questions}
    answers={answers}
    onRestart={() => setScreen("start")}
  />
)}

    </>
  );
}

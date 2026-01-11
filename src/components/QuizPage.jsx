import { useState, useEffect } from "react";
export default function QuizPage({ questions, answers, setAnswers, onFinish }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30 * 60);

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        onFinish();
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

console.log(questions);   
const currentQuestion = questions[currentIndex];

if (!currentQuestion) {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center text-neutral-300">
      Loading questions...
    </div>
  );
}
const options = [
  currentQuestion.correct_answer,
  ...currentQuestion.incorrect_answers,
].sort(() => Math.random() - 0.5);

const handleSelect = (option) => {
  setAnswers((prev) => ({
    ...prev,
    [currentIndex]: option,
  }));
};

const goToQuestion = (index) => {
  setCurrentIndex(index);
};

const goNext = () => {
  if (currentIndex < questions.length - 1) {
    setCurrentIndex((prev) => prev + 1);
  }
};

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

  return (
    <div className="min-h-screen bg-neutral-900 p-5">
      <div className="max-w-2xl mx-auto py-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="text-neutral-500 text-sm mb-1">Question {currentIndex + 1}</div>
            <div className="text-neutral-300">out of {questions.length}</div>
          </div>
          <div className="text-right">
            <div className="text-neutral-500 text-sm mb-1">Time left</div>
            <div className="text-2xl text-neutral-100 font-mono">{formatTime(timeLeft)}
</div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl text-neutral-100 leading-relaxed mb-8">
            <div dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />

          </h2>

          <div className="space-y-3">

               {options.map((option, idx) => {
                const isSelected = answers[currentIndex] === option;

                  return (
                      <label
                       key={idx}
                       onClick={() => handleSelect(option)}
                       className={`flex items-center gap-4 p-5 rounded-lg cursor-pointer border-2 transition-all
                     ${
                         isSelected
                          ? "bg-violet-600 border-violet-500 text-white"
                         : "bg-neutral-800 border-transparent hover:border-violet-500"
                      }`}
    >
                    <div className="w-5 h-5 rounded-full border-2 border-neutral-600 flex-shrink-0"></div>
                    <span
                     className="text-lg"
                     dangerouslySetInnerHTML={{ __html: option }}
                     />
                  </label>
                      );
                    })}

          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {questions.map((_, i) => {
  const isCurrent = i === currentIndex;
  const isAnswered = answers[i];

  return (
    <button
      key={i}
      onClick={() => goToQuestion(i)}
      className={`w-12 h-12 rounded-lg transition-colors
  ${
    isCurrent
      ? "bg-violet-600 text-white"
      : isAnswered
      ? "bg-emerald-600 text-white"
      : "bg-neutral-700 text-neutral-300 hover:bg-violet-600 hover:text-white"
  }`}
    >
      {i + 1}
    </button>
  );
})}

          </div>
          {currentIndex < questions.length - 1 && (
  <button
    onClick={goNext}
    className="mr-4 bg-neutral-700 text-white px-6 py-3 rounded-lg hover:bg-neutral-600"
  >
    Next
  </button>
)}
          <button
            onClick={onFinish}
  disabled={Object.keys(answers).length === 0}
  className={`px-8 py-3 rounded-lg font-medium transition-colors
    ${
      Object.keys(answers).length === 0
        ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
        : "bg-emerald-600 text-white hover:bg-emerald-500"
    }`}
>
            Submit answers
          </button>
        </div>
      </div>
    </div>
  );
}

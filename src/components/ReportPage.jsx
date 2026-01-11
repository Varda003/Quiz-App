export default function ReportPage({ questions, answers, onRestart }) {
  const score = questions.reduce((acc, q, i) => {
    return acc + (answers[i] === q.correct_answer ? 1 : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-neutral-900 p-5">
      <div className="max-w-2xl mx-auto py-8">
        <div className="mb-10">
          <h1 className="text-3xl text-neutral-100 mb-4">Quiz Complete</h1>
          <div className="inline-block bg-neutral-800 px-6 py-3 rounded-lg">
            <span className="text-neutral-400 mr-3">Score:</span>
            <span className="text-2xl text-emerald-400 font-semibold">
              {score}/{questions.length}
            </span>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.correct_answer;

            return (
              <div key={i} className="bg-neutral-800 p-6 rounded-lg">
                <p
                  className="text-neutral-100 text-lg mb-4"
                  dangerouslySetInnerHTML={{ __html: q.question }}
                />

                <div className="space-y-2">
                  <div>
                    <span className="text-neutral-500 text-sm">
                      Your answer:{" "}
                    </span>
                    <span
                      className={`font-medium ${
                        isCorrect
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: answers[i] || "Not answered",
                      }}
                    />
                  </div>

                  {!isCorrect && (
                    <div>
                      <span className="text-neutral-500 text-sm">
                        Correct:{" "}
                      </span>
                      <span
                        className="text-emerald-400 font-medium"
                        dangerouslySetInnerHTML={{
                          __html: q.correct_answer,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onRestart}
          className="bg-violet-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-violet-500 transition-colors"
        >
          Take another quiz
        </button>
      </div>
    </div>
  );
}

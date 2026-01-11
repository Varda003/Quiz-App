export default function StartPage({ onStart }) {
  return (
    <div className="min-h-screen bg-neutral-900 p-6">
      <div className="max-w-lg mx-auto pt-24">
        <div className="mb-12">
          <h1 className="text-4xl text-neutral-100 mb-3">Quiz Time</h1>
          <p className="text-neutral-400">15 questions waiting for you</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter email to start"
            className="w-full px-5 py-4 bg-neutral-800 text-neutral-100 rounded-lg border-2 border-neutral-700 focus:outline-none focus:border-violet-500"
          />
          <button
            onClick={onStart}
            className="w-full bg-violet-600 text-white py-4 rounded-lg font-medium hover:bg-violet-500 transition-colors"
          >
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
}

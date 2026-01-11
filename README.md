# Quiz Application 

This project is a simple quiz application. The goal was to implement a complete quiz flow focusing on correctness, clarity, and clean code rather than over-engineering.

---

## 🎥 Demo  
(quiz-1wnhkbiua-varda-s-projects.vercel.app)  

---

## 🚀 Features

- Start page with email input
- Fetches 15 quiz questions from OpenTDB API
- Multiple-choice questions with shuffled options
- One question displayed at a time
- Question navigation panel showing current and attempted questions
- 30-minute countdown timer with auto-submit on timeout
- Answer selection persistence while navigating questions
- Final report page showing:
  - Each question
  - User’s selected answer
  - Correct answer
  - Final score

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6)

---

## 📂 Project Structure

- `App.jsx` – Manages overall application flow and shared state
- `StartPage.jsx` – Email input and quiz start
- `QuizPage.jsx` – Core quiz logic, timer, navigation, and answer selection
- `ReportPage.jsx` – Displays results and score summary

---

## ⚙️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-link>

2. Install dependencies:
      npm install

3. Run the application:
   npm run dev
 
4. Open in browser:
http://localhost:5173

## 📡 API Used

Open Trivia Database
https://opentdb.com/api.php?amount=15

- The question, correct_answer, and incorrect_answers fields are used to render quiz content.

## 🔮 Improvements with More Time

* Persist quiz progress using localStorage
* Add accessibility enhancements (keyboard navigation, ARIA labels)
* Improve mobile responsiveness further
* Add unit tests for core logic

## 📬 Contact

* Developer: Varda Hanwant
* 📧 Email: varda.hanwant03@gmail.com
* 🔗 GitHub: (https://github.com/Varda003)

## 🪪 License
This project is released under the MIT License.
It is provided for evaluation and educational purposes.


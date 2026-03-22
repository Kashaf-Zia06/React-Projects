import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {

  const navigate = useNavigate()

  const questions = [
    {
      id: 1,
      question: "What is React?",
      options: ["Library", "Framework", "Language", "Tool"],
      answer: "Library"
    },
    {
      id: 2,
      question: "What is JSX?",
      options: ["HTML in JS", "CSS", "Database", "API"],
      answer: "HTML in JS"
    },
    {
      id: 3,
      question: "Which hook is used for state?",
      options: ["useRef", "useEffect", "useState", "useMemo"],
      answer: "useState"
    },
    {
      id: 4,
      question: "React is developed by?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook"
    },
    {
      id: 5,
      question: "Which is used for routing?",
      options: ["Axios", "Redux", "React Router", "Node"],
      answer: "React Router"
    }
  ];

  const [currentQues, setCurrentQues] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleSelect = (option) => {
    const updated = [...answers]
    updated[currentQues] = option
    setAnswers(updated)
  }

  const nextQues = () => {
    if (currentQues < questions.length - 1) {
      setCurrentQues(currentQues + 1)
    }
  }

  const prevQues = () => {
    if (currentQues > 0) {
      setCurrentQues(currentQues - 1)
    }
  }

  const handleSubmit = () => {
    let score = 0;

    answers.forEach((ans, index) => {
      if (ans === questions[index].answer) {
        score++;
      }
    });

    // 👉 Send score to Result page
    navigate("/result", { state: { score, total: questions.length } });
  }

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="border p-6 rounded-lg w-96 text-center shadow">

        <h1 className="text-xl font-bold mb-4">
          {questions[currentQues].question}
        </h1>

        <ul>
          {questions[currentQues].options.map((opt, i) => (
            <li
              key={i}
              onClick={() => handleSelect(opt)}
              className={`mb-2 p-2 border rounded cursor-pointer 
              ${answers[currentQues] === opt ? "bg-green-300" : ""}`}
            >
              {opt}
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-4">
          <button onClick={prevQues}>Prev</button>
          <button onClick={nextQues}>Next</button>
        </div>

        {currentQues === questions.length - 1 && (
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}

      </div>
    </div>
  )
}

export default Quiz
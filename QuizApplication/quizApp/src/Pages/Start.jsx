import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-96">
        <h1 className="text-2xl font-bold mb-4">
          React Quiz App
        </h1>

        <p className="mb-6 text-gray-600">
          Test your knowledge with 5 questions!
        </p>

        <button
          onClick={() => navigate("/quiz")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Start Quiz
        </button>
      </div>

    </div>
  );
};

export default Start;
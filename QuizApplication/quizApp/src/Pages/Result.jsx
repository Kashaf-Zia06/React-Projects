import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 5;

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-white shadow-lg p-8 rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-4">
          Your Score: {score} / {total}
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Restart Quiz
        </button>
      </div>

    </div>
  );
};

export default Result;
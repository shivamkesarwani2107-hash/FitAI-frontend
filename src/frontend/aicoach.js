import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AiCoach() {
  const navigate = useNavigate();
  const location = useLocation();

  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const exercise = location.state?.exercise;
  const bodyPart = location.state?.bodyPart;

  useEffect(() => {
    generateWorkoutPlan();
  }, []);

  const generateWorkoutPlan = async () => {
    try {
      setLoading(true);
      setError("");

      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        setError("User information not found. Please login again.");
        setLoading(false);
        return;
      }

      const user = JSON.parse(storedUser);

      if (!user.id) {
        setError("User ID not found. Please login again.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "http://localhost:4000/ai/workout-plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to generate workout plan");
      }

      setPlan(data.plan);
    } catch (error) {
      console.error("AI WORKOUT ERROR:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/my-workout")}
          className="mb-6 rounded-lg bg-gray-800 px-5 py-2 text-white hover:bg-gray-700"
        >
          ← Back to My Workout
        </button>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              FitAI Workout Coach
            </h1>

            {exercise && (
              <p className="mt-2 text-gray-600">
                Exercise: <span className="font-semibold">{exercise}</span>
                {bodyPart && (
                  <>
                    {" "}
                    • Body Part:{" "}
                    <span className="font-semibold">{bodyPart}</span>
                  </>
                )}
              </p>
            )}
          </div>

          {loading && (
            <div className="py-10 text-center">
              <p className="text-lg font-medium text-gray-700">
                AI is creating your personalized workout plan...
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Please wait a few seconds.
              </p>
            </div>
          )}

          {error && (
            <div className="rounded-lg bg-red-100 p-4 text-red-700">
              {error}
            </div>
          )}

          {!loading && !error && plan && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Your AI Workout Plan
              </h2>

              <div className="rounded-xl bg-gray-50 p-5">
                <div className="whitespace-pre-wrap leading-7 text-gray-700">
                  {plan}
                </div>
              </div>

              <button
                onClick={generateWorkoutPlan}
                className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
              >
                Generate Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AiCoach;
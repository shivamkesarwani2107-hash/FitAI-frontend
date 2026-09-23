import { useState } from "react";
import { useNavigate } from "react-router-dom";

const workoutExercises = {
  Chest: [
    "Bench Press",
    "Incline Bench Press",
    "Decline Bench Press",
    "Dumbbell Press",
    "Incline Dumbbell Press",
    "Chest Fly",
    "Cable Crossover",
    "Pec Deck",
    "Push Ups",
    "Dumbbell Pullover",
  ],

  Back: [
    "Lat Pulldown",
    "Pull Ups",
    "Chin Ups",
    "Barbell Row",
    "Dumbbell Row",
    "Seated Cable Row",
    "T-Bar Row",
    "Deadlift",
    "Straight Arm Pulldown",
    "Machine Row",
  ],

  Shoulder: [
    "Overhead Press",
    "Dumbbell Shoulder Press",
    "Arnold Press",
    "Lateral Raise",
    "Front Raise",
    "Rear Delt Fly",
    "Face Pull",
    "Upright Row",
    "Machine Shoulder Press",
    "Cable Lateral Raise",
  ],

  Legs: [
    "Squats",
    "Leg Press",
    "Lunges",
    "Walking Lunges",
    "Leg Extension",
    "Leg Curl",
    "Romanian Deadlift",
    "Calf Raises",
    "Bulgarian Split Squat",
    "Hack Squat",
  ],

  Biceps: [
    "Barbell Curl",
    "Dumbbell Curl",
    "Hammer Curl",
    "Preacher Curl",
    "Concentration Curl",
    "Incline Dumbbell Curl",
    "Cable Curl",
    "EZ Bar Curl",
    "Spider Curl",
    "Reverse Curl",
  ],

  Triceps: [
    "Tricep Pushdown",
    "Overhead Tricep Extension",
    "Skull Crushers",
    "Close Grip Bench Press",
    "Dumbbell Kickback",
    "Cable Overhead Extension",
    "Bench Dips",
    "Rope Pushdown",
    "Single Arm Pushdown",
    "Machine Tricep Extension",
  ],

  Arms: [
    "Barbell Curl",
    "Hammer Curl",
    "Preacher Curl",
    "Tricep Pushdown",
    "Skull Crushers",
    "Overhead Extension",
    "Close Grip Bench Press",
    "Cable Curl",
    "Concentration Curl",
    "Dips",
  ],

  Abs: [
    "Crunches",
    "Bicycle Crunches",
    "Leg Raises",
    "Hanging Leg Raises",
    "Plank",
    "Russian Twists",
    "Mountain Climbers",
    "Reverse Crunches",
    "Heel Touches",
    "Ab Wheel Rollout",
  ],
};

function Workout() {
  const navigate = useNavigate();

  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [sets, setSets] = useState("3 × 10");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleBodyPartChange = (e) => {
    setSelectedBodyPart(e.target.value);
    setSelectedExercise("");
    setMessage("");
    setError("");
  };

  const handleAddExercise = async () => {
    setMessage("");
    setError("");

    if (!selectedBodyPart || !selectedExercise) {
      setError("Please select body part and exercise.");
      return;
    }

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      navigate("/login");
      return;
    }

    let user;

    try {
      user = JSON.parse(savedUser);
    } catch (error) {
      localStorage.removeItem("user");
      navigate("/login");
      return;
    }

    if (!user?.id) {
      setError("User information not found. Please login again.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/workouts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            bodyPart: selectedBodyPart,
            exercise: selectedExercise,
            sets,
          }),
        });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add exercise"
        );
      }

      setMessage(`${selectedExercise} added to your workout.`);
      setSelectedExercise("");
    } catch (error) {
      console.error("ADD EXERCISE ERROR:", error);
      setError(error.message || "Failed to add exercise");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-lime-500"></span>

            <p className="text-xs font-black uppercase tracking-widest text-lime-700">
              FITAI WORKOUT
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Build your
            <span className="text-lime-500"> workout.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Choose a body part, select your exercise and add it to your
            personal workout.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl">
              🏋️
            </div>

            <div>
              <h2 className="text-xl font-black text-slate-950">
                Choose Your Exercise
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select a body part and choose an exercise to add.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div>
              <label className="text-sm font-bold text-slate-700">
                Body Part
              </label>

              <select
                value={selectedBodyPart}
                onChange={handleBodyPartChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
              >
                <option value="">
                  Select Body Part
                </option>

                {Object.keys(workoutExercises).map((bodyPart) => (
                  <option
                    key={bodyPart}
                    value={bodyPart}
                  >
                    {bodyPart}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">
                Exercise
              </label>

              <select
                value={selectedExercise}
                onChange={(e) => setSelectedExercise(e.target.value)}
                disabled={!selectedBodyPart}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-lime-500 focus:ring-2 focus:ring-lime-100 disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                <option value="">
                  {selectedBodyPart
                    ? "Select Exercise"
                    : "Select Body Part First"}
                </option>

                {selectedBodyPart &&
                  workoutExercises[selectedBodyPart].map(
                    (exercise) => (
                      <option
                        key={exercise}
                        value={exercise}
                      >
                        {exercise}
                      </option>
                    )
                  )}
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">
                Sets & Reps
              </label>

              <select
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
              >
                <option value="3 × 8">
                  3 × 8
                </option>

                <option value="3 × 10">
                  3 × 10
                </option>

                <option value="3 × 12">
                  3 × 12
                </option>

                <option value="4 × 8">
                  4 × 8
                </option>

                <option value="4 × 10">
                  4 × 10
                </option>

                <option value="4 × 12">
                  4 × 12
                </option>
              </select>
            </div>

          </div>

          {error && (
            <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          {message && (
            <div className="mt-5 rounded-xl bg-lime-50 px-4 py-3 text-sm font-semibold text-lime-700">
              ✓ {message}
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <button
              onClick={handleAddExercise}
              disabled={saving}
              className="rounded-xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-lime-500 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Adding..." : "Add Exercise +"}
            </button>

            <button
              onClick={() => navigate("/my-workout")}
              className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-black text-slate-700 transition hover:bg-slate-100"
            >
              See My Workout →
            </button>

          </div>

        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {Object.entries(workoutExercises).map(
            ([bodyPart, exercises]) => (
              <div
                key={bodyPart}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-950">
                    {bodyPart}
                  </h3>

                  <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-black text-lime-700">
                    {exercises.length}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  10 exercises available
                </p>
              </div>
            )
          )}

        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-black uppercase tracking-widest text-lime-400">
                YOUR WORKOUT
              </p>

              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Build it your way.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Add exercises from different body parts. Your selected
                exercises will be saved to your FitAI account.
              </p>
            </div>

            <button
              onClick={() => navigate("/my-workout")}
              className="shrink-0 rounded-xl bg-lime-500 px-6 py-3.5 font-black text-slate-950 transition hover:bg-lime-400"
            >
              My Workout →
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Workout;
import { useState } from "react";

function Workout() {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [showPlan, setShowPlan] = useState(false);

  const calculateBMI = () => {
    if (!height || !weight) return 0;

    const heightMeter = Number(height) / 100;

    return (
      Number(weight) /
      (heightMeter * heightMeter)
    ).toFixed(1);
  };

  const bmi = calculateBMI();

  const getCategory = () => {
    if (!bmi) return "";

    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";

    return "Obese";
  };

  const getWorkoutPlan = () => {
    if (!bmi) return [];

    if (bmi < 18.5) {
      return [
        ["Full Body Strength", "3 × 10"],
        ["Squats", "3 × 10"],
        ["Bench Press", "3 × 10"],
        ["Lat Pulldown", "3 × 12"],
      ];
    }

    if (bmi < 25) {
      return [
        ["Bench Press", "4 × 10"],
        ["Lat Pulldown", "4 × 10"],
        ["Squats", "4 × 10"],
        ["Shoulder Press", "3 × 10"],
      ];
    }

    if (bmi < 30) {
      return [
        ["Squats", "3 × 12"],
        ["Push Ups", "3 × 12"],
        ["Lat Pulldown", "3 × 12"],
        ["Walking", "20–30 min"],
      ];
    }

    return [
      ["Walking", "20–30 min"],
      ["Bodyweight Squats", "3 × 10"],
      ["Wall Push Ups", "3 × 10"],
      ["Light Cycling", "15–20 min"],
    ];
  };

  const handleGenerate = () => {
    if (!gender || !height || !weight) {
      alert("Please enter all details");
      return;
    }

    setShowPlan(true);
  };

  const workoutPlan = getWorkoutPlan();

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-6xl">

        <p className="font-bold text-lime-600">
          FITAI WORKOUT
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-5xl">
          AI Workout Plan
        </h1>

        <p className="mt-3 text-slate-500">
          Enter your body details to generate a workout plan.
        </p>

        {/* Form */}
        <div className="mt-8 rounded-xl border border-slate-200 p-5 sm:p-6">

          <h2 className="text-xl font-black">
            Your Body Profile
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div>
              <label className="text-sm font-semibold">
                Gender
              </label>

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 outline-none focus:border-lime-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Height (cm)
              </label>

              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="175"
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 outline-none focus:border-lime-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Weight (kg)
              </label>

              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 outline-none focus:border-lime-500"
              />
            </div>

          </div>

          <button
            onClick={handleGenerate}
            className="mt-5 w-full rounded-lg bg-slate-950 px-6 py-3 font-bold text-white hover:bg-lime-500 hover:text-slate-950 sm:w-auto"
          >
            Generate Workout
          </button>

        </div>

        {/* Result */}
        {showPlan && (
          <div className="mt-8">

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

              <div className="rounded-xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">
                  Height
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {height} cm
                </h3>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">
                  Weight
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {weight} kg
                </h3>
              </div>

              <div className="col-span-2 rounded-xl border border-lime-200 bg-lime-50 p-5 md:col-span-1">
                <p className="text-sm text-slate-500">
                  BMI
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {bmi}
                </h3>

                <p className="text-sm font-semibold text-lime-700">
                  {getCategory()}
                </p>
              </div>

            </div>

            <h2 className="mt-10 text-2xl font-black sm:text-3xl">
              Your Workout
            </h2>

            <div className="mt-5 space-y-3">

              {workoutPlan.map(([exercise, sets]) => (
                <div
                  key={exercise}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
                >
                  <h3 className="font-bold">
                    {exercise}
                  </h3>

                  <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-700">
                    {sets}
                  </span>
                </div>
              ))}

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Workout;
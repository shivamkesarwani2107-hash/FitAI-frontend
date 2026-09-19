import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nutrition() {
  const navigate = useNavigate();

  const [dietType, setDietType] = useState("veg");

  const meals = {
    veg: [
      {
        meal: "Breakfast",
        emoji: "🥣",
        food: "Oats + Milk + Banana + Almonds",
      },
      {
        meal: "Lunch",
        emoji: "🍛",
        food: "Rice + Dal + Paneer + Salad",
      },
      {
        meal: "Snack",
        emoji: "🥜",
        food: "Fruits + Nuts + Greek Yogurt",
      },
      {
        meal: "Dinner",
        emoji: "🥗",
        food: "Roti + Paneer + Vegetables",
      },
    ],

    nonVeg: [
      {
        meal: "Breakfast",
        emoji: "🍳",
        food: "Eggs + Oats + Banana + Milk",
      },
      {
        meal: "Lunch",
        emoji: "🍗",
        food: "Chicken + Rice + Salad",
      },
      {
        meal: "Snack",
        emoji: "🥛",
        food: "Greek Yogurt + Fruits + Nuts",
      },
      {
        meal: "Dinner",
        emoji: "🍗",
        food: "Chicken + Roti + Vegetables",
      },
    ],
  };

  const currentMeals = meals[dietType];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold transition hover:border-lime-400 hover:bg-lime-50"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="font-black text-lime-600">
            FITAI NUTRITION
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Smart Nutrition
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Choose your food preference and get simple meal suggestions
            according to your diet.
          </p>
        </div>

        {/* Diet Selection */}
        <section className="mt-8">
          <h2 className="text-2xl font-black">
            Choose Your Diet
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Select whether you prefer vegetarian or non-vegetarian meals.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            {/* Veg */}
            <button
              onClick={() => setDietType("veg")}
              className={`rounded-2xl border-2 p-6 text-left transition ${
                dietType === "veg"
                  ? "border-lime-400 bg-lime-50"
                  : "border-slate-200 bg-white hover:border-lime-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                  🥗
                </div>

                <div>
                  <h3 className="text-lg font-black">
                    Vegetarian
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Plant-based meals with dairy options.
                  </p>
                </div>
              </div>

              {dietType === "veg" && (
                <p className="mt-4 text-sm font-black text-lime-600">
                  ✓ Selected
                </p>
              )}
            </button>

            {/* Non Veg */}
            <button
              onClick={() => setDietType("nonVeg")}
              className={`rounded-2xl border-2 p-6 text-left transition ${
                dietType === "nonVeg"
                  ? "border-lime-400 bg-lime-50"
                  : "border-slate-200 bg-white hover:border-lime-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                  🍗
                </div>

                <div>
                  <h3 className="text-lg font-black">
                    Non-Vegetarian
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Meals including eggs, chicken and dairy.
                  </p>
                </div>
              </div>

              {dietType === "nonVeg" && (
                <p className="mt-4 text-sm font-black text-lime-600">
                  ✓ Selected
                </p>
              )}
            </button>

          </div>
        </section>

        {/* Nutrition Stats */}
        <section className="mt-10">
          <h2 className="text-2xl font-black">
            Daily Nutrition
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">

            <NutritionCard
              emoji="🔥"
              title="Calories"
              value="2200"
              unit="kcal/day"
            />

            <NutritionCard
              emoji="🍗"
              title="Protein"
              value="150g"
              unit="per day"
            />

            <NutritionCard
              emoji="🍚"
              title="Carbs"
              value="250g"
              unit="per day"
            />

            <NutritionCard
              emoji="🥑"
              title="Fats"
              value="70g"
              unit="per day"
            />

          </div>
        </section>

        {/* Meals */}
        <section className="mt-10">
          <div>
            <h2 className="text-2xl font-black">
              Today's Meals
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {dietType === "veg"
                ? "Vegetarian meal suggestions"
                : "Non-vegetarian meal suggestions"}
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            {currentMeals.map((item) => (
              <div
                key={item.meal}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                    {item.emoji}
                  </div>

                  <div>
                    <p className="text-sm font-black text-lime-600">
                      {item.meal}
                    </p>

                    <h3 className="mt-1 font-black">
                      {item.food}
                    </h3>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* AI CTA */}
        <section className="mt-10 rounded-3xl bg-slate-950 p-6 text-white sm:p-10">

          <p className="text-sm font-black uppercase tracking-widest text-lime-400">
            FitAI Coach 🤖
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Need a personalized meal plan?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Later, FitAI can generate personalized nutrition recommendations
            based on your profile, goals, activity and food preferences.
          </p>

          <button
            onClick={() => navigate("/ai-coach")}
            className="mt-6 rounded-xl bg-lime-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-lime-300"
          >
            Ask FitAI →
          </button>

        </section>

        {/* Note */}
        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          These meal suggestions are general examples. Individual nutrition
          requirements can vary based on personal factors and activity.
        </p>

      </div>
    </div>
  );
}

function NutritionCard({ emoji, title, value, unit }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-lime-300 hover:shadow-sm">

      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-500">
          {title}
        </p>

        <span className="text-xl">
          {emoji}
        </span>
      </div>

      <h2 className="mt-3 text-2xl font-black">
        {value}
      </h2>

      <p className="mt-1 text-xs text-slate-400">
        {unit}
      </p>

    </div>
  );
}

export default Nutrition;
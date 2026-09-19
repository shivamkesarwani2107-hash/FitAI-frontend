import React from "react";
import { useNavigate } from "react-router-dom";

function Started() {
  const navigate = useNavigate();

  const goals = [
    {
      title: "Fat Loss",
      emoji: "🔥",
      description:
        "Lose body fat, improve your fitness and build a healthier body.",
      path: "/loss",
    },
    {
      title: "Muscle Gain",
      emoji: "💪",
      description:
        "Build muscle, increase strength and improve your overall physique.",
      path: "/gain",
    },
    {
      title: "Strength",
      emoji: "🏋️",
      description:
        "Build real strength with structured training and progressive overload.",
      path: "/strength",
    },
    {
      title: "General Fitness",
      emoji: "⚡",
      description:
        "Improve your stamina, mobility, strength and overall fitness.",
      path: "/fitness",
    },
  ];

  const experienceLevels = [
    {
      title: "Beginner",
      emoji: "🌱",
      years: "0–2 Years",
      description:
        "Build your foundation with proper technique, consistency and simple training.",
      path: "/beginner",
    },
    {
      title: "Intermediate",
      emoji: "🚀",
      years: "2–4 Years",
      description:
        "Take your training to the next level with structured workouts and progression.",
      path: "/intermediate",
    },
    {
      title: "Advanced",
      emoji: "🔥",
      years: "4–6 Years",
      description:
        "Optimize your training, performance and recovery with advanced strategies.",
      path: "/advance",
    },
    {
      title: "Expert",
      emoji: "👑",
      years: "6–8+ Years",
      description:
        "Use advanced programming, performance data and personalized strategies.",
      path: "/expert",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-black tracking-tight"
          >
            Fit<span className="text-lime-500">AI</span>
          </button>

          {/* Back */}
          <button
            onClick={() => navigate("/")}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold transition hover:border-lime-400 hover:bg-lime-50"
          >
            ← Back
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-bold text-lime-700">
            🚀 Personalize Your Fitness Journey
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let's build your
            <span className="block text-lime-500">FitAI journey.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Choose your fitness goal and training experience to explore a plan
            designed around your journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        {/* STEP 01 - Goal */}
        <section>
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-600">
              Step 01
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              What's your main goal?
            </h2>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Choose what you want to achieve with FitAI.
            </p>
          </div>

          {/* Goal Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <GoalCard
                key={goal.title}
                emoji={goal.emoji}
                title={goal.title}
                description={goal.description}
                onClick={() => navigate(goal.path)}
              />
            ))}
          </div>
        </section>

        {/* STEP 02 - Experience */}
        <section className="mt-16">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-600">
              Step 02
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              What's your workout experience?
            </h2>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Pick the level that best describes your current experience.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experienceLevels.map((level) => (
              <ExperienceCard
                key={level.title}
                emoji={level.emoji}
                title={level.title}
                years={level.years}
                description={level.description}
                onClick={() => navigate(level.path)}
              />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
                Your journey starts here
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Train smarter. Get stronger. 💪
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Select your goal and experience level above to explore your
                personalized fitness path.
              </p>
            </div>

            <button
              onClick={() => navigate("/")}
              className="w-full rounded-xl bg-lime-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-lime-300 sm:w-auto"
            >
              Back to Home
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================
   Goal Card
========================= */

function GoalCard({ emoji, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-50 hover:shadow-md"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition group-hover:bg-lime-100">
        {emoji}
      </div>

      <h3 className="mt-5 text-lg font-black">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <p className="mt-5 text-sm font-black text-lime-600">
        Explore →
      </p>
    </div>
  );
}

/* =========================
   Experience Card
========================= */

function ExperienceCard({
  emoji,
  title,
  years,
  description,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-50 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl transition group-hover:bg-lime-100">
          {emoji}
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
          {years}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-black">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <p className="mt-5 text-sm font-black text-lime-600">
        Explore →
      </p>
    </div>
  );
}

export default Started;
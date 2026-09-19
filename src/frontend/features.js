function Features() {
  const features = [
    {
      title: "AI Workout Plans",
      text: "Get personalized workout plans based on your goals, experience and equipment.",
    },
    {
      title: "Smart Nutrition",
      text: "Get calorie and nutrition recommendations according to your fitness goals.",
    },
    {
      title: "Progress Tracking",
      text: "Track your weight, measurements and workout progress over time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-6xl">

        <p className="font-bold text-lime-600">
          FITAI
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-5xl">
          Features
        </h1>

        <p className="mt-3 text-slate-500">
          Everything you need for a smarter fitness journey.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 p-6"
            >
              <h2 className="text-xl font-black">
                {feature.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Features;
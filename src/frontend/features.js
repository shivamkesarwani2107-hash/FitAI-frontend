function Features() {
  const features = [
    {
      number: "01",
      icon: "⚡",
      title: "AI Workout Plans",
      text: "Get personalized workout plans based on your goals, experience and available equipment.",
    },
    {
      number: "02",
      icon: "🥗",
      title: "Smart Nutrition",
      text: "Get calorie and nutrition recommendations designed around your fitness goals.",
    },
    {
      number: "03",
      icon: "📈",
      title: "Progress Tracking",
      text: "Track your weight, measurements and workout progress and stay consistent.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-lime-500"></span>

            <p className="text-xs font-black uppercase tracking-widest text-lime-700">
              FITAI FEATURES
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">
            Everything you need to
            <span className="block text-lime-500">
              become stronger.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Train smarter, eat better and track your progress with an AI-powered
            fitness experience built around your goals.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-2xl hover:shadow-lime-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                <span className="text-sm font-black text-slate-300">
                  {feature.number}
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-black text-slate-950">
                {feature.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {feature.text}
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm font-black text-slate-950">
                Explore feature

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-lime-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}

        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-slate-950 p-7 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-xl">
              <p className="text-sm font-black uppercase tracking-widest text-lime-500">
                Built for your goals
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Your fitness.
                <span className="text-lime-500"> Your plan.</span>
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Whether you want to lose fat, build muscle or improve your
                overall fitness, FitAI keeps everything in one place.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <div className="rounded-2xl bg-white px-5 py-4 text-center">
                <p className="text-2xl font-black text-slate-950">AI</p>
                <p className="text-xs font-bold text-slate-500">Powered</p>
              </div>

              <div className="rounded-2xl bg-lime-500 px-5 py-4 text-center">
                <p className="text-2xl font-black text-slate-950">24/7</p>
                <p className="text-xs font-bold text-slate-950">Fitness</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Features;
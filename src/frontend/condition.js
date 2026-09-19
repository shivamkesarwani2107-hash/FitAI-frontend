function Condition() {
  const sections = [
    {
      title: "Use of FitAI",
      text: "FitAI provides fitness and wellness tools including workout, nutrition and progress tracking features.",
    },
    {
      title: "AI Recommendations",
      text: "AI-generated fitness and nutrition recommendations are for general wellness purposes and should not replace professional medical advice.",
    },
    {
      title: "Account Responsibility",
      text: "Users are responsible for keeping their account information secure and using FitAI responsibly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-4xl">

        <p className="font-bold text-lime-600">
          FITAI
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mt-3 text-slate-500">
          Please read these terms before using FitAI.
        </p>

        <div className="mt-8 space-y-4">

          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-slate-200 p-5"
            >
              <h2 className="text-lg font-bold">
                {section.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {section.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Condition;
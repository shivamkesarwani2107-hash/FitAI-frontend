function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      text: "We may collect information such as your name, email, fitness profile and activity information to provide FitAI services.",
    },
    {
      title: "How We Use Your Information",
      text: "Your information may be used to provide personalized workouts, nutrition recommendations and progress tracking.",
    },
    {
      title: "Data Security",
      text: "We take reasonable measures to protect your account and personal information.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-4xl">

        <p className="font-bold text-lime-600">
          FITAI
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-3 text-slate-500">
          Your privacy is important to us.
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

export default Privacy;
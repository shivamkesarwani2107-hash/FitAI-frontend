function Help() {
  const questions = [
    {
      title: "How do I create an account?",
      text: "Go to the Signup page and enter your name, email and password.",
    },
    {
      title: "How does FitAI create workout plans?",
      text: "FitAI uses your fitness profile, goals and preferences to provide personalized recommendations.",
    },
    {
      title: "Need more help?",
      text: "Contact our support team for further assistance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-4xl">

        <p className="font-bold text-lime-600">
          FITAI SUPPORT
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-5xl">
          Help Center
        </h1>

        <p className="mt-3 text-slate-500">
          Find answers to common FitAI questions.
        </p>

        <div className="mt-8 space-y-4">

          {questions.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h2 className="text-lg font-bold">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Help;
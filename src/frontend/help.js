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
      title: "Can I use FitAI without AI Coach?",
      text: "Yes. You can use FitAI's normal workout, nutrition, progress and fitness features without using the AI Coach.",
    },
    {
      title: "What can I ask the AI Coach?",
      text: "You can ask general fitness, workout, exercise and nutrition-related questions and get AI-powered guidance.",
    },
    {
      title: "How do I track my progress?",
      text: "Use the Progress section to keep track of your weight, measurements, workouts and fitness progress.",
    },
    {
      title: "Need more help?",
      text: "Contact our support team using the phone number or email provided below.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <p className="font-bold text-lime-600">
          FITAI SUPPORT
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-5xl">
          Help Center
        </h1>

        <p className="mt-3 text-slate-500">
          Find answers to common FitAI questions or contact our support team.
        </p>

        {/* Contact Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* Phone */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-3xl">📞</div>

            <h2 className="mt-3 font-black">
              Call Support
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Speak with our support team.
            </p>

            <a
              href="tel:9336991973"
              className="mt-3 block font-bold text-lime-600"
            >
              9336991973
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-3xl">✉️</div>

            <h2 className="mt-3 font-black">
              Email Support
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Send us your questions anytime.
            </p>

            <a
              href="mailto:fitai@gmail.com"
              className="mt-3 block break-all font-bold text-lime-600"
            >
              fitai@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-3xl">📍</div>

            <h2 className="mt-3 font-black">
              Visit Us
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              FitAI Support Office
            </p>

            <p className="mt-2 font-bold text-slate-800">
              Civil Lines, Prayagraj,
              <br />
              Uttar Pradesh, India
            </p>
          </div>

        </div>

        {/* Support Hours */}
        <div className="mt-8 rounded-2xl bg-black p-6 text-white">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-bold text-lime-400">
                CUSTOMER SUPPORT
              </p>

              <h2 className="mt-1 text-2xl font-black">
                We're here to help.
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Have a question about FitAI? Reach out to our support team.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-4">
              <p className="text-sm text-slate-400">
                Support Hours
              </p>

              <p className="mt-1 font-bold">
                Monday – Saturday
              </p>

              <p className="text-sm text-lime-400">
                10:00 AM – 7:00 PM
              </p>
            </div>

          </div>
        </div>

        {/* FAQs */}
        <div className="mt-10">

          <p className="font-bold text-lime-600">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Common questions
          </h2>

          <div className="mt-6 space-y-4">

            {questions.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-lime-400"
              >
                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Emergency / Disclaimer */}
        <div className="mt-8 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
          <h3 className="font-bold text-slate-900">
            Important Note
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            FitAI provides general fitness and wellness information.
            For medical conditions, injuries, or health concerns, please
            consult a qualified healthcare professional.
          </p>
        </div>

        {/* Footer Contact */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center">
          <p className="text-sm text-slate-500">
            Need assistance?
          </p>

          <p className="mt-1 font-bold">
            📞 9336991973 &nbsp; • &nbsp; ✉️ fitai@gmail.com
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Civil Lines, Prayagraj, Uttar Pradesh, India
          </p>
        </div>

      </div>
    </div>
  );
}

export default Help;
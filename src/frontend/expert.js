import { useNavigate } from "react-router-dom";

function Expert() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">

      <div className="mx-auto max-w-4xl">

        <button
          onClick={() => navigate("/started")}
          className="mb-6 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-sm"
        >
          ← Back
        </button>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <div className="bg-slate-950 p-8 text-center text-white sm:p-12">
            <div className="text-6xl">👑</div>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Expert
            </h1>

            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              6–8+ years of workout experience
            </p>
          </div>

          <div className="p-6 sm:p-8">

            <h2 className="text-2xl font-black">
              Train With Precision 🎯
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Experienced trainees can use highly personalized training
              approaches based on their goals, performance, training history
              and recovery.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Card
                icon="🧠"
                title="Personalization"
                text="Adjust training based on individual response and goals."
              />

              <Card
                icon="📊"
                title="Performance Data"
                text="Track long-term performance and progression."
              />

              <Card
                icon="⚡"
                title="Training Strategy"
                text="Manage training volume, intensity and frequency."
              />

              <Card
                icon="😴"
                title="Recovery"
                text="Pay close attention to recovery and fatigue."
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-3 font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {text}
      </p>
    </div>
  );
}

export default Expert;
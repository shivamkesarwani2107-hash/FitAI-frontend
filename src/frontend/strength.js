import { useNavigate } from "react-router-dom";

function Strength() {
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
            <div className="text-6xl">🏋️</div>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Strength
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
              Improve your strength through structured resistance training
              and progressive overload.
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">

            <InfoCard
              icon="🏋️"
              title="Heavy Lifts"
              text="Focus on controlled compound and resistance exercises."
            />

            <InfoCard
              icon="📈"
              title="Progression"
              text="Gradually improve your training performance over time."
            />

            <InfoCard
              icon="😴"
              title="Recovery"
              text="Recovery is important when training for strength."
            />

          </div>

          <div className="border-t border-slate-200 p-6 sm:p-8">

            <h2 className="text-2xl font-black">
              Your Focus 🎯
            </h2>

            <div className="mt-5 space-y-3">

              <Point text="Track your exercises, sets and weights" />
              <Point text="Use progressive overload gradually" />
              <Point text="Maintain proper exercise technique" />
              <Point text="Allow adequate recovery between sessions" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-3 font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function Point({ text }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="text-lime-600">✓</span>
      <p className="text-sm font-medium text-slate-600">{text}</p>
    </div>
  );
}

export default Strength;
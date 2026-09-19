import { useNavigate } from "react-router-dom";

function Loss() {
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

          <div className="bg-lime-500 p-8 text-center sm:p-12">
            <div className="text-6xl">🔥</div>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Fat Loss
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-slate-800 sm:text-base">
              Reduce body fat while maintaining muscle, strength and energy.
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">

            <InfoCard
              icon="🥗"
              title="Nutrition"
              text="Focus on a sustainable calorie deficit and enough protein."
            />

            <InfoCard
              icon="🏋️"
              title="Training"
              text="Strength training helps maintain muscle while losing fat."
            />

            <InfoCard
              icon="🚶"
              title="Activity"
              text="Walking and daily movement can support your calorie goals."
            />

          </div>

          <div className="border-t border-slate-200 p-6 sm:p-8">

            <h2 className="text-2xl font-black">
              Your Focus 🎯
            </h2>

            <div className="mt-5 space-y-3">

              <Point text="Maintain a consistent workout routine" />
              <Point text="Prioritize protein-rich foods" />
              <Point text="Track your progress regularly" />
              <Point text="Focus on sustainable habits" />

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

export default Loss;
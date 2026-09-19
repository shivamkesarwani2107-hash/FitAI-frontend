import { useNavigate } from "react-router-dom";

function Intermediate() {
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
            <div className="text-6xl">🚀</div>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Intermediate
            </h1>

            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              2–4 years of workout experience
            </p>
          </div>

          <div className="p-6 sm:p-8">

            <h2 className="text-2xl font-black">
              Build Your Progress 📈
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Intermediate trainees can use more structured programming
              and track training performance to continue progressing.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Card icon="📊" title="Track Progress" text="Monitor exercises, sets and weights." />

              <Card icon="🏋️" title="Structured Training" text="Follow a consistent training split." />

              <Card icon="📈" title="Progressive Overload" text="Gradually increase training demands." />

              <Card icon="🥗" title="Nutrition" text="Match nutrition with your training goal." />

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
      <h3 className="mt-3 font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{text}</p>
    </div>
  );
}

export default Intermediate;
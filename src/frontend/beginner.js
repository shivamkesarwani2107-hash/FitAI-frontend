import { useNavigate } from "react-router-dom";

function Beginner() {
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
            <div className="text-6xl">🌱</div>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Beginner
            </h1>

            <p className="mt-3 text-sm sm:text-base">
              0–2 years of workout experience
            </p>
          </div>

          <div className="p-6 sm:p-8">

            <h2 className="text-2xl font-black">
              Build Your Foundation 🧱
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Beginners should focus on learning exercise technique,
              building consistency and gradually increasing training
              difficulty.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Card icon="🎯" title="Technique" text="Learn correct exercise form." />

              <Card icon="📅" title="Consistency" text="Create a sustainable workout routine." />

              <Card icon="💪" title="Strength" text="Build basic strength gradually." />

              <Card icon="😴" title="Recovery" text="Give your body enough time to recover." />

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

export default Beginner;
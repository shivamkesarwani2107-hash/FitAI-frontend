import { useNavigate } from "react-router-dom";

function Progress() {
  const navigate = useNavigate();

  const weightData = [
    {
      date: "01 Sep",
      weight: 78,
    },
    {
      date: "08 Sep",
      weight: 76.8,
    },
    {
      date: "15 Sep",
      weight: 75.9,
    },
    {
      date: "18 Sep",
      weight: 75.2,
    },
  ];

  const workouts = [
    {
      name: "Chest & Triceps",
      date: "Today",
      duration: "58 min",
      exercises: 6,
    },
    {
      name: "Back & Biceps",
      date: "Yesterday",
      duration: "52 min",
      exercises: 7,
    },
    {
      name: "Leg Day",
      date: "16 Sep",
      duration: "64 min",
      exercises: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">

      {/* Header */}
      <section className="bg-slate-100 px-5 py-12 sm:px-8 sm:py-16">

        <div className="mx-auto max-w-7xl">

          <p className="font-black text-lime-600">
            YOUR FITNESS JOURNEY
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            TRACK YOUR
            <br />
            <span className="text-lime-500">
              PROGRESS.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Track your weight, workouts and body measurements
            to see how far you have come.
          </p>

        </div>

      </section>


      {/* Stats */}
      <section className="px-5 py-10 sm:px-8">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">

          <ProgressCard
            title="Current Weight"
            value="75.2"
            unit="kg"
            change="-2.8 kg"
            positive
          />

          <ProgressCard
            title="Starting Weight"
            value="78"
            unit="kg"
            change="Since 01 Sep"
          />

          <ProgressCard
            title="Workouts"
            value="18"
            unit="sessions"
            change="This month"
          />

          <ProgressCard
            title="Consistency"
            value="86"
            unit="%"
            change="Last 30 days"
          />

        </div>

      </section>


      {/* Weight Progress */}
      <section className="px-5 pb-12 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

              <div>
                <p className="text-sm font-bold text-lime-600">
                  BODY WEIGHT
                </p>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Weight Progress
                </h2>
              </div>

              <div className="rounded-lg bg-lime-100 px-4 py-2 text-sm font-bold text-lime-700">
                -2.8 kg
              </div>

            </div>


            {/* Simple Chart */}
            <div className="mt-8">

              <div className="flex h-64 items-end gap-3 border-b border-l border-slate-200 px-2 sm:gap-8">

                {weightData.map((item) => {

                  const height =
                    ((item.weight - 74) / 5) * 100;

                  return (
                    <div
                      key={item.date}
                      className="flex h-full flex-1 flex-col items-center justify-end"
                    >

                      <p className="mb-2 text-xs font-bold text-slate-500">
                        {item.weight} kg
                      </p>

                      <div
                        className="w-full max-w-16 rounded-t-lg bg-lime-500 transition hover:bg-lime-400"
                        style={{
                          height: `${Math.max(height, 15)}%`,
                        }}
                      />

                      <p className="mt-3 text-xs font-semibold text-slate-500">
                        {item.date}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Body Measurements */}
      <section className="bg-slate-100 px-5 py-14 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div>
            <p className="font-black text-lime-600">
              BODY MEASUREMENTS
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Your Measurements
            </h2>
          </div>


          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            <Measurement
              title="Chest"
              value="40"
              unit="in"
              change="+1"
            />

            <Measurement
              title="Waist"
              value="32"
              unit="in"
              change="-2"
            />

            <Measurement
              title="Arms"
              value="14"
              unit="in"
              change="+0.5"
            />

            <Measurement
              title="Thigh"
              value="22"
              unit="in"
              change="+0.5"
            />

            <Measurement
              title="Body Fat"
              value="18"
              unit="%"
              change="-2%"
            />

          </div>

        </div>

      </section>


      {/* Workout History */}
      <section className="px-5 py-14 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="font-black text-lime-600">
                WORKOUT HISTORY
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Recent Workouts
              </h2>
            </div>

            <button
              onClick={() => navigate("/workout")}
              className="w-full rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-lime-500 hover:text-slate-950 sm:w-auto"
            >
              Start Workout
            </button>

          </div>


          <div className="mt-8 space-y-4">

            {workouts.map((workout) => (

              <div
                key={workout.name}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >

                <div>

                  <h3 className="text-lg font-black">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {workout.date}
                  </p>

                </div>


                <div className="flex gap-6 text-sm">

                  <div>
                    <p className="text-slate-400">
                      Duration
                    </p>

                    <p className="mt-1 font-bold">
                      {workout.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Exercises
                    </p>

                    <p className="mt-1 font-bold">
                      {workout.exercises}
                    </p>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Goal Section */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="font-black text-lime-400">
                YOUR CURRENT GOAL
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                FAT LOSS
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                You have reduced your weight by 2.8 kg.
                Keep following your workout and nutrition plan
                consistently.
              </p>

            </div>


            <div>

              <div className="mb-3 flex justify-between text-sm font-bold">

                <span>
                  Goal Progress
                </span>

                <span className="text-lime-400">
                  56%
                </span>

              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-lime-500"
                  style={{ width: "56%" }}
                />

              </div>

              <p className="mt-3 text-sm text-slate-500">
                2.8 kg lost out of 5 kg target
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-5 py-16 text-center sm:px-8">

        <h2 className="text-3xl font-black sm:text-4xl">
          Keep pushing.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Small improvements every day create big results over time.
        </p>

        <button
          onClick={() => navigate("/workout")}
          className="mt-6 rounded-lg bg-lime-500 px-7 py-3 font-black text-slate-950 hover:bg-lime-400"
        >
          CONTINUE TRAINING →
        </button>

      </section>

    </div>
  );
}


/* Progress Card */
function ProgressCard({
  title,
  value,
  unit,
  change,
  positive,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <p className="text-sm font-semibold text-slate-500">
        {title}
      </p>

      <div className="mt-3 flex items-end gap-2">

        <h3 className="text-3xl font-black">
          {value}
        </h3>

        <span className="mb-1 text-sm font-semibold text-slate-500">
          {unit}
        </span>

      </div>

      <p
        className={`mt-2 text-xs font-bold ${
          positive
            ? "text-lime-600"
            : "text-slate-400"
        }`}
      >
        {change}
      </p>

    </div>
  );
}


/* Measurement */
function Measurement({
  title,
  value,
  unit,
  change,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">

      <p className="text-sm font-semibold text-slate-500">
        {title}
      </p>

      <div className="mt-2 flex items-end gap-1">

        <h3 className="text-2xl font-black">
          {value}
        </h3>

        <span className="mb-1 text-xs text-slate-500">
          {unit}
        </span>

      </div>

      <p className="mt-2 text-xs font-bold text-lime-600">
        {change}
      </p>

    </div>
  );
}


export default Progress;
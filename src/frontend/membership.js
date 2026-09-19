import { useNavigate } from "react-router-dom";

function Membership() {
  const navigate = useNavigate();

  const plans = [
    {
      duration: "1 Month",
      price: 1500,
    },
    {
      duration: "3 Months",
      price: 4000,
      popular: true,
    },
    {
      duration: "6 Months",
      price: 7500,
    },
  ];

  const features = [
    "Workout plans",
    "Nutrition guidance",
    "AI recommendations",
    "Progress tracking",
    "Exercise library",
    "AI Coach",
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <p className="font-bold text-lime-600">
            FITAI MEMBERSHIP
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Choose Your Plan
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            Get access to FitAI workouts, nutrition and AI coaching.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.duration}
              className={`relative rounded-xl border p-6 ${
                plan.popular
                  ? "border-lime-500"
                  : "border-slate-200"
              }`}
            >

              {plan.popular && (
                <span className="absolute right-4 top-4 rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-700">
                  POPULAR
                </span>
              )}

              <h2 className="text-xl font-black">
                {plan.duration}
              </h2>

              <p className="mt-4 text-3xl font-black">
                ₹{plan.price.toLocaleString("en-IN")}
              </p>

              <div className="mt-6 space-y-3">

                {features.map((feature) => (
                  <p
                    key={feature}
                    className="text-sm text-slate-600"
                  >
                    ✓ {feature}
                  </p>
                ))}

              </div>

              <button
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      type: "membership",
                      duration: plan.duration,
                      price: plan.price,
                    },
                  })
                }
                className="mt-7 w-full rounded-lg bg-slate-950 py-3 font-bold text-white hover:bg-lime-500 hover:text-slate-950"
              >
                Choose Plan
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Membership;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Membership() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [membership, setMembership] = useState(null);
  const [loading, setLoading] = useState(true);

  const plans = [
    {
      duration: "1 Month",
      price: 1500,
      label: "Starter",
    },
    {
      duration: "3 Months",
      price: 4000,
      label: "Most Popular",
      popular: true,
    },
    {
      duration: "6 Months",
      price: 7500,
      label: "Best Value",
    },
  ];

  const features = [
    "Personalized workout plans",
    "Smart nutrition guidance",
    "AI recommendations",
    "Progress tracking",
    "Exercise library",
    "AI Coach",
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user?.id) return;

    const fetchMembership = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/memberships/user/${user.id}`
        );

        const data = await response.json();

        if (data.success && data.memberships?.length > 0) {
          const activeMembership = data.memberships.find(
            (item) => item.status === "active"
          );

          setMembership(activeMembership || null);
        }
      } catch (error) {
        console.error("MEMBERSHIP FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembership();
  }, [user]);

  const handleChoosePlan = (plan) => {
    if (!user) {
      navigate("/login");
      return;
    }

    navigate("/checkout", {
      state: {
        type: "membership",
        duration: plan.duration,
        price: plan.price,
      },
    });
  };

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-lime-500"></span>

            <p className="text-xs font-black uppercase tracking-widest text-lime-700">
              FITAI MEMBERSHIP
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Train harder.
            <span className="text-lime-500"> Get stronger.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Choose the membership that fits your fitness goals and get access
            to the complete FitAI experience.
          </p>
        </div>

        {loading ? (
          <div className="mt-12 flex justify-center">
            <div className="rounded-2xl bg-white px-8 py-6 shadow-sm">
              <p className="font-bold text-slate-500">
                Loading membership...
              </p>
            </div>
          </div>
        ) : (
          <>
            {membership && (
              <div className="mt-12 overflow-hidden rounded-3xl bg-slate-950 shadow-xl">
                <div className="p-6 sm:p-8">

                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500 text-xl">
                          ⚡
                        </span>

                        <p className="text-sm font-black uppercase tracking-widest text-lime-400">
                          Your Active Membership
                        </p>
                      </div>

                      <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                        {membership.duration}
                      </h2>

                      <p className="mt-2 text-sm text-slate-400">
                        Your FitAI membership is currently active.
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-lime-500 px-4 py-2 text-xs font-black text-slate-950">
                      ACTIVE
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        Plan
                      </p>

                      <p className="mt-2 text-lg font-black text-white">
                        {membership.duration}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        Amount Paid
                      </p>

                      <p className="mt-2 text-lg font-black text-white">
                        ₹{membership.price?.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        Start Date
                      </p>

                      <p className="mt-2 text-lg font-black text-white">
                        {formatDate(membership.startDate)}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        End Date
                      </p>

                      <p className="mt-2 text-lg font-black text-white">
                        {formatDate(membership.endDate)}
                      </p>
                    </div>

                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => navigate("/")}
                      className="rounded-xl bg-lime-500 px-6 py-3 font-black text-slate-950 transition hover:bg-lime-400"
                    >
                      Go to Home
                    </button>

                    <button
                      onClick={() => navigate("/profile")}
                      className="rounded-xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
                    >
                      View Profile
                    </button>
                  </div>

                </div>
              </div>
            )}

            <div className="mt-14">

              <div className="text-center">
                <p className="text-sm font-black uppercase tracking-widest text-lime-600">
                  {membership ? "Explore Other Plans" : "Choose Your Plan"}
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                  Pick your membership
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  All plans include complete access to FitAI features.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                {plans.map((plan) => {
                  const isCurrentPlan =
                    membership?.duration === plan.duration;

                  return (
                    <div
                      key={plan.duration}
                      className={`relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.popular
                          ? "border-2 border-lime-500"
                          : "border border-slate-200"
                        }`}
                    >

                      {plan.popular && (
                        <div className="absolute right-5 top-5 rounded-full bg-lime-500 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-slate-950">
                          Most Popular
                        </div>
                      )}

                      {isCurrentPlan && (
                        <div className="absolute left-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                          Current Plan
                        </div>
                      )}

                      <div className={isCurrentPlan || plan.popular ? "mt-8" : ""}>
                        <p className="text-sm font-black uppercase tracking-widest text-lime-600">
                          {plan.label}
                        </p>

                        <h3 className="mt-3 text-2xl font-black text-slate-950">
                          {plan.duration}
                        </h3>

                        <div className="mt-5 flex items-end gap-1">
                          <span className="text-4xl font-black text-slate-950">
                            ₹{plan.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>

                      <div className="my-7 h-px bg-slate-200"></div>

                      <div className="space-y-4">
                        {features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-100 text-xs font-black text-lime-700">
                              ✓
                            </span>

                            <p className="text-sm font-semibold text-slate-600">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleChoosePlan(plan)}
                        disabled={isCurrentPlan}
                        className={`mt-8 w-full rounded-xl py-3.5 font-black transition ${isCurrentPlan
                            ? "cursor-not-allowed bg-slate-200 text-slate-500"
                            : "bg-slate-950 text-white hover:bg-lime-500 hover:text-slate-950"
                          }`}
                      >
                        {isCurrentPlan ? "Current Plan" : "Choose Plan"}
                      </button>

                    </div>
                  );
                })}

              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Membership;
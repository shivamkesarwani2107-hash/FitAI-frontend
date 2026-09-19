import { useState } from "react";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-950">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

          {/* Logo */}
          <h1
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl font-black tracking-tight sm:text-3xl"
          >
            Fit<span className="text-lime-500">AI</span>
          </h1>


          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            <button
              onClick={() => navigate("/workout")}
              className="font-semibold text-slate-700 transition hover:text-lime-600"
            >
              Workout
            </button>

            <button
              onClick={() => navigate("/nutrition")}
              className="font-semibold text-slate-700 transition hover:text-lime-600"
            >
              Nutrition
            </button>

            <button
              onClick={() => navigate("/membership")}
              className="font-semibold text-slate-700 transition hover:text-lime-600"
            >
              Membership
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="font-semibold text-slate-700 transition hover:text-lime-600"
            >
              Shop
            </button>

            <button
              onClick={() => navigate("/login")}
              className="rounded-lg bg-slate-950 px-5 py-2.5 font-bold text-white transition hover:bg-lime-500 hover:text-slate-950"
            >
              Login
            </button>

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              <button
                onClick={() => {
                  navigate("/workout");
                  setMenuOpen(false);
                }}
                className="rounded-lg px-4 py-3 text-left font-semibold hover:bg-slate-100"
              >
                Workout
              </button>

              <button
                onClick={() => {
                  navigate("/nutrition");
                  setMenuOpen(false);
                }}
                className="rounded-lg px-4 py-3 text-left font-semibold hover:bg-slate-100"
              >
                Nutrition
              </button>

              <button
                onClick={() => {
                  navigate("/membership");
                  setMenuOpen(false);
                }}
                className="rounded-lg px-4 py-3 text-left font-semibold hover:bg-slate-100"
              >
                Membership
              </button>

              <button
                onClick={() => {
                  navigate("/shop");
                  setMenuOpen(false);
                }}
                className="rounded-lg px-4 py-3 text-left font-semibold hover:bg-slate-100"
              >
                Shop
              </button>

              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="rounded-lg bg-slate-950 px-4 py-3 text-left font-bold text-white"
              >
                Login
              </button>

            </div>

          </div>
        )}

      </nav>


      {/* Hero Section */}
      <section className="bg-slate-100 px-5 py-20 sm:px-8 sm:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Hero Text */}
          <div>

            <p className="inline-block rounded-full bg-lime-100 px-4 py-2 text-sm font-black tracking-wide text-lime-700">
              AI POWERED FITNESS
            </p>

            <h1 className="mt-6 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
              BUILD YOUR
              <br />
              <span className="text-lime-500">
                STRONGEST
              </span>
              <br />
              VERSION.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Personalized workouts, smart nutrition and AI-powered
              fitness guidance designed around your goals.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => navigate("/started")}
                className="rounded-lg bg-lime-500 px-7 py-4 font-black text-slate-950 transition hover:bg-lime-400"
              >
                START YOUR JOURNEY
              </button>

              <button
                onClick={() => navigate("/workout")}
                className="rounded-lg border-2 border-slate-950 px-7 py-4 font-black transition hover:bg-slate-950 hover:text-white"
              >
                EXPLORE WORKOUTS
              </button>

            </div>

          </div>


          {/* Hero Visual */}
          <div className="relative">

            <div className="flex min-h-[380px] items-center justify-center overflow-hidden rounded-3xl bg-slate-950 p-8 sm:min-h-[480px]">

              <div className="text-center">

                <p className="text-sm font-bold tracking-[0.3em] text-lime-400">
                  TRAIN
                </p>

                <h2 className="mt-3 text-6xl font-black uppercase italic text-white sm:text-8xl">
                  Hard.
                </h2>

                <h2 className="text-6xl font-black uppercase italic text-lime-400 sm:text-8xl">
                  Smart.
                </h2>

                <p className="mt-6 text-sm text-slate-400">
                  Powered by FitAI
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Stats */}
      <section className="border-b border-slate-200 bg-white px-5 py-10 sm:px-8">

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">

          <Stat
            number="24/7"
            text="AI Fitness Support"
          />

          <Stat
            number="100+"
            text="Exercises"
          />

          <Stat
            number="AI"
            text="Personalized Plans"
          />

          <Stat
            number="1"
            text="Complete Fitness Platform"
          />

        </div>

      </section>


      {/* Features */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="font-black text-lime-600">
              EVERYTHING YOU NEED
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              TRAIN. EAT. TRACK.
              <br />
              <span className="text-slate-400">
                GET BETTER.
              </span>
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <FeatureCard
              number="01"
              title="AI Workout"
              description="Get personalized workout plans based on your goals, experience and available equipment."
              onClick={() => navigate("/workout")}
            />

            <FeatureCard
              number="02"
              title="Smart Nutrition"
              description="Plan your daily nutrition with calorie and protein targets designed around your fitness goal."
              onClick={() => navigate("/nutrition")}
            />

            <FeatureCard
              number="03"
              title="Track Progress"
              description="Track your body weight, measurements and workout progress as you improve."
              onClick={() => navigate("/progress")}
            />

          </div>

        </div>

      </section>


      {/* Dark CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24">

        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="font-bold text-lime-400">
              YOUR FITNESS. YOUR RULES.
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              READY TO GET
              <br />
              <span className="text-lime-400">
                STRONGER?
              </span>
            </h2>

          </div>

          <button
            onClick={() => navigate("/started")}
            className="w-full rounded-lg bg-lime-500 px-8 py-4 font-black text-slate-950 transition hover:bg-lime-400 sm:w-auto"
          >
            CREATE MY FITNESS PLAN →
          </button>

        </div>

      </section>


      {/* Footer */}
      <Footer />

    </div>
  );
}


/* Stat Component */
function Stat({ number, text }) {
  return (
    <div>
      <h3 className="text-3xl font-black sm:text-4xl">
        {number}
      </h3>

      <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
        {text}
      </p>
    </div>
  );
}


/* Feature Card */
function FeatureCard({
  number,
  title,
  description,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-xl"
    >

      <div className="flex items-center justify-between">

        <span className="text-sm font-black text-lime-600">
          {number}
        </span>

        <span className="text-xl transition group-hover:translate-x-1">
          →
        </span>

      </div>

      <h3 className="mt-8 text-2xl font-black">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {description}
      </p>

      <p className="mt-6 font-bold text-lime-600">
        Explore →
      </p>

    </div>
  );
}


export default Home;
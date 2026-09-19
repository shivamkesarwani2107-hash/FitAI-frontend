import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 px-5 py-10 text-white sm:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <h2
              onClick={() => navigate("/")}
              className="cursor-pointer text-2xl font-black"
            >
              Fit<span className="text-lime-400">AI</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Your AI fitness companion for workouts,
              nutrition and progress.
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="font-bold">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">

              <p
                onClick={() => navigate("/features")}
                className="cursor-pointer hover:text-lime-400"
              >
                Features
              </p>

              <p
                onClick={() => navigate("/workout")}
                className="cursor-pointer hover:text-lime-400"
              >
                Workouts
              </p>

              <p
                onClick={() => navigate("/nutrition")}
                className="cursor-pointer hover:text-lime-400"
              >
                Nutrition
              </p>

              <p
                onClick={() => navigate("/progress")}
                className="cursor-pointer hover:text-lime-400"
              >
                Progress
              </p>

            </div>

          </div>

          {/* Fitness */}
          <div>

            <h3 className="font-bold">
              Fitness
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">

              <p
                onClick={() => navigate("/membership")}
                className="cursor-pointer hover:text-lime-400"
              >
                Membership
              </p>

              <p
                onClick={() => navigate("/shop")}
                className="cursor-pointer hover:text-lime-400"
              >
                Shop
              </p>

              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer hover:text-lime-400"
              >
                Profile
              </p>

              <p
                onClick={() => navigate("/orders")}
                className="cursor-pointer hover:text-lime-400"
              >
                Orders
              </p>

            </div>

          </div>

          {/* Support */}
          <div>

            <h3 className="font-bold">
              Support
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">

              <p
                onClick={() => navigate("/help")}
                className="cursor-pointer hover:text-lime-400"
              >
                Help Center
              </p>

              <p
                onClick={() => navigate("/contact")}
                className="cursor-pointer hover:text-lime-400"
              >
                Contact
              </p>

              <p
                onClick={() => navigate("/privacy")}
                className="cursor-pointer hover:text-lime-400"
              >
                Privacy
              </p>

              <p
                onClick={() => navigate("/condition")}
                className="cursor-pointer hover:text-lime-400"
              >
                Terms
              </p>

            </div>

          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} FitAI. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;
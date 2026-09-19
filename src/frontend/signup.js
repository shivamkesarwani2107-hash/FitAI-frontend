import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm sm:p-8">

        <div className="text-center">

          <h1 className="text-3xl font-black">
            Fit<span className="text-lime-500">AI</span>
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Create your account
          </p>

        </div>

        <form className="mt-8 space-y-4">

          <div>
            <label className="text-sm font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-950 py-3 font-bold text-white hover:bg-lime-500 hover:text-slate-950"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}

          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-bold text-lime-600"
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Signup;
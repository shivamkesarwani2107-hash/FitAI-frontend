import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Signup failed"
        );
      }

      setSuccess(
        "Account created successfully. Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("SIGNUP ERROR:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-6 rounded-lg bg-lime-50 px-4 py-3 text-sm font-semibold text-lime-700">
            {success}
          </div>
        )}

        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-4"
        >
          <div>
            <label className="text-sm font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
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
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              minLength={6}
              required
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-slate-950 py-3 font-bold text-white hover:bg-lime-500 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
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
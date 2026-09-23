import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [hasMembership, setHasMembership] = useState(false);
  const [loadingMembership, setLoadingMembership] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setLoadingMembership(false);
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
            (membership) => membership.status === "active"
          );

          setHasMembership(Boolean(activeMembership));
        }
      } catch (error) {
        console.error("MEMBERSHIP FETCH ERROR:", error);
      } finally {
        setLoadingMembership(false);
      }
    };

    fetchMembership();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black">
            Login Required
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Please login to view your profile.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-6 w-full rounded-lg bg-slate-950 py-3 font-bold text-white hover:bg-lime-500 hover:text-slate-950"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-500 text-2xl font-black text-slate-950">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1 className="text-2xl font-black">
                {user.name}
              </h1>

              <p className="text-sm text-slate-500">
                {user.email}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">
                Full Name
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase text-slate-400">
                Email
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {user.email}
              </p>
            </div>
          </div>

          {!loadingMembership && hasMembership && (
            <button
              onClick={() => navigate("/membership")}
              className="mt-8 w-full rounded-lg bg-lime-500 py-3 font-bold text-slate-950 transition hover:bg-lime-400"
            >
              My Membership
            </button>
          )}

          <div className="mt-3 space-y-3">
            <button
              onClick={() => navigate("/orders")}
              className="w-full rounded-lg bg-slate-950 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              My Orders
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full rounded-lg border border-slate-200 py-3 font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Home
            </button>

            <button
              onClick={handleLogout}
              className="w-full rounded-lg border border-red-200 py-3 font-bold text-red-600 transition hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
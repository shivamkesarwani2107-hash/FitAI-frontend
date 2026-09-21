import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyWorkout() {
  const navigate = useNavigate();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState("");

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
          navigate("/login");
          return;
        }

        const user = JSON.parse(savedUser);

        if (!user?.id) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `http://localhost:4000/workouts/user/${user.id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch workout"
          );
        }

        setWorkout(data.workout);
      } catch (error) {
        console.error("FETCH WORKOUT ERROR:", error);
        setError(error.message || "Failed to fetch workout");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [navigate]);

  const handleRemoveExercise = async (exerciseId) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this exercise?"
    );

    if (!confirmRemove) {
      return;
    }

    if (!workout?._id || !exerciseId) {
      return;
    }

    setRemovingId(exerciseId);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:4000/workouts/${workout._id}/exercises/${exerciseId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to remove exercise"
        );
      }

      setWorkout(data.workout);
    } catch (error) {
      console.error("REMOVE EXERCISE ERROR:", error);
      setError(error.message || "Failed to remove exercise");
    } finally {
      setRemovingId("");
    }
  };

  const groupedExercises = workout?.exercises?.reduce(
    (groups, item) => {
      if (!groups[item.bodyPart]) {
        groups[item.bodyPart] = [];
      }

      groups[item.bodyPart].push(item);

      return groups;
    },
    {}
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="font-bold text-slate-500">
          Loading your workout...
        </p>
      </div>
    );
  }

  if (error && !workout) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-red-50 p-6 text-center">
            <p className="font-bold text-red-600">
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-black uppercase tracking-widest text-lime-600">
              FITAI WORKOUT
            </p>

            <h1 className="mt-2 text-4xl font-black text-slate-950 sm:text-5xl">
              My Workout
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              Exercises you selected are saved here.
            </p>
          </div>

          <button
            onClick={() => navigate("/workout")}
            className="rounded-xl bg-slate-950 px-5 py-3 font-black text-white transition hover:bg-lime-500 hover:text-slate-950"
          >
            Add Exercise +
          </button>

        </div>

        {error && workout && (
          <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        {!workout || workout.exercises?.length === 0 ? (
          <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-sm">

            <div className="text-6xl">
              🏋️
            </div>

            <h2 className="mt-5 text-2xl font-black text-slate-950">
              No Exercises Added
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Choose exercises from different body parts and build your
              personal workout.
            </p>

            <button
              onClick={() => navigate("/workout")}
              className="mt-6 rounded-xl bg-lime-500 px-6 py-3 font-black text-slate-950 transition hover:bg-lime-400"
            >
              Choose Exercises →
            </button>

          </div>
        ) : (
          <div className="mt-10">

            <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-lime-400">
                    PERSONAL WORKOUT
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    Your Exercise List
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    {workout.exercises.length} exercises added
                  </p>
                </div>

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-lime-500 text-3xl">
                  💪
                </div>

              </div>

            </div>

            <div className="mt-8 space-y-8">

              {Object.entries(groupedExercises).map(
                ([bodyPart, exercises]) => (
                  <div key={bodyPart}>

                    <div className="mb-4 flex items-center justify-between">

                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-lime-600">
                          BODY PART
                        </p>

                        <h2 className="mt-1 text-2xl font-black text-slate-950">
                          {bodyPart}
                        </h2>
                      </div>

                      <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-black text-lime-700">
                        {exercises.length} exercises
                      </span>

                    </div>

                    <div className="space-y-3">

                      {exercises.map((item, index) => (
                        <div
                          key={item._id}
                          className="rounded-2xl bg-white p-5 shadow-sm"
                        >

                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-4">

                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 font-black text-white">
                                {String(index + 1).padStart(2, "0")}
                              </div>

                              <div>
                                <h3 className="font-black text-slate-950">
                                  {item.exercise}
                                </h3>

                                <p className="mt-1 text-xs text-slate-400">
                                  {bodyPart} workout
                                </p>
                              </div>

                            </div>

                            <div className="flex flex-wrap items-center gap-3">

                              <span className="rounded-full bg-lime-100 px-4 py-2 text-xs font-black text-lime-700">
                                {item.sets}
                              </span>

                              <button
                                onClick={() =>
                                  navigate("/ai-coach", {
                                    state: {
                                      exercise: item.exercise,
                                      bodyPart,
                                    },
                                  })
                                }
                                className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white transition hover:bg-lime-500 hover:text-slate-950"
                              >
                                Ask AI →
                              </button>

                              <button
                                onClick={() =>
                                  handleRemoveExercise(item._id)
                                }
                                disabled={removingId === item._id}
                                className="rounded-xl bg-red-50 px-4 py-2.5 text-xs font-black text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                {removingId === item._id
                                  ? "Removing..."
                                  : "Remove"}
                              </button>

                            </div>

                          </div>

                        </div>
                      ))}

                    </div>

                  </div>
                )
              )}

            </div>

          </div>
        )}

        <button
          onClick={() => navigate("/profile")}
          className="mt-8 w-full rounded-xl border border-slate-200 bg-white py-3 font-bold text-slate-600 transition hover:bg-slate-100"
        >
          Back to Profile
        </button>

      </div>
    </div>
  );
}

export default MyWorkout;
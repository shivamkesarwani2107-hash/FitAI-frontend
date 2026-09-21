    import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
          navigate("/login");
          return;
        }

        const user = JSON.parse(savedUser);

        const response = await fetch(
          `http://localhost:4000/orders/user/${user.id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch orders"
          );
        }

        setOrders(data.orders || []);
      } catch (error) {
        console.error("ORDERS FETCH ERROR:", error);
        setError(error.message || "Unable to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="font-bold text-slate-500">
          Loading orders...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-lime-600">
              FITAI STORE
            </p>

            <h1 className="mt-1 text-3xl font-black">
              My Orders
            </h1>
          </div>

          <button
            onClick={() => navigate("/shop")}
            className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-lime-500 hover:text-slate-950"
          >
            Shop
          </button>
        </div>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        {orders.length === 0 && !error ? (
          <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm">
            <div className="text-6xl">
              🛒
            </div>

            <h2 className="mt-4 text-2xl font-black">
              No Orders Yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              You haven't placed any orders yet.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-6 rounded-lg bg-lime-500 px-6 py-3 font-bold text-slate-950 hover:bg-lime-400"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {orders.map((order) => (
              <div
                key={order._id}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Order ID
                    </p>

                    <p className="mt-1 break-all text-sm font-bold">
                      {order._id}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-700">
                      {order.paymentStatus?.toUpperCase()}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                      {order.orderStatus?.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {order.items?.map((item, index) => (
                    <div
                      key={`${order._id}-${index}`}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-3xl">
                        {item.image || "🥤"}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-black">
                          {item.productName}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          ₹{item.price?.toLocaleString("en-IN")} ×{" "}
                          {item.quantity}
                        </p>
                      </div>

                      <p className="font-black">
                        ₹
                        {(item.price * item.quantity).toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Ordered On
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Total Amount
                    </p>

                    <p className="mt-1 text-2xl font-black">
                      ₹{order.totalAmount?.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => navigate("/profile")}
          className="mt-8 w-full rounded-lg border border-slate-300 bg-white py-3 font-bold text-slate-700 hover:bg-slate-50"
        >
          Back to Profile
        </button>
      </div>
    </div>
  );
}

export default Order;
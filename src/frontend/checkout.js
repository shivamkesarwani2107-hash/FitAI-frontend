import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const data = location.state;

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black">
            No Checkout Data
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Please select a membership plan first.
          </p>

          <button
            onClick={() => navigate("/membership")}
            className="mt-6 w-full rounded-lg bg-slate-950 py-3 font-bold text-white hover:bg-lime-500 hover:text-slate-950"
          >
            Go to Membership
          </button>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        navigate("/login");
        return;
      }

      const user = JSON.parse(savedUser);

      const response = await fetch(
        "http://localhost:4000/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: data.price,
            type: data.type,
            duration: data.duration,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to create payment order"
        );
      }

      if (!window.Razorpay) {
        throw new Error(
          "Razorpay failed to load. Please refresh the page."
        );
      }

      const options = {
        key: "rzp_test_TFjzBqCubiX75P",
        amount: result.order.amount,
        currency: result.order.currency,
        name: "FitAI",
        description: `${data.duration} Membership`,
        order_id: result.order.id,

        prefill: {
          name: user.name,
          email: user.email,
        },

        theme: {
          color: "#84cc16",
        },

        handler: async function (paymentResponse) {
          try {
            const verifyResponse = await fetch(
              "http://localhost:4000/payment/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id:
                    paymentResponse.razorpay_order_id,

                  razorpay_payment_id:
                    paymentResponse.razorpay_payment_id,

                  razorpay_signature:
                    paymentResponse.razorpay_signature,

                  userId: user.id,

                  type: data.type,

                  duration: data.duration,

                  price: data.price,
                }),
              }
            );

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok) {
              throw new Error(
                verifyData.message ||
                  "Payment verification failed"
              );
            }

            if (verifyData.success) {
              navigate("/");
            }
          } catch (error) {
            console.error(
              "PAYMENT VERIFICATION ERROR:",
              error
            );

            setError(error.message);
            setLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("PAYMENT ERROR:", error);

      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-lg">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold text-lime-600">
            FITAI CHECKOUT
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Complete Payment
          </h1>

          <div className="mt-8 rounded-xl bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Plan
              </span>

              <span className="font-bold">
                {data.duration}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Amount
              </span>

              <span className="text-2xl font-black">
                ₹{data.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {error && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-7 w-full rounded-lg bg-slate-950 py-4 font-bold text-white transition hover:bg-lime-500 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Processing..."
              : `Pay ₹${data.price.toLocaleString("en-IN")}`}
          </button>

          <button
            onClick={() => navigate("/membership")}
            className="mt-3 w-full rounded-lg border border-slate-200 py-3 font-bold text-slate-700 hover:bg-slate-50"
          >
            Back to Membership
          </button>

          <p className="mt-4 text-center text-xs text-slate-400">
            Secure payment powered by Razorpay
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
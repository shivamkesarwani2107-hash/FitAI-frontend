import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const checkoutData = location.state;

  // Agar checkout data nahi mila
  if (!checkoutData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black">No Order Found</h1>

          <p className="mt-2 text-sm text-slate-500">
            Please select a product or membership plan first.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-lg bg-slate-950 px-6 py-3 font-bold text-white hover:bg-lime-500 hover:text-slate-950"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const isMembership = checkoutData.type === "membership";

  const price = checkoutData.price || 0;

  const handlePayment = () => {
    // Abhi dummy payment
    // Backend + Razorpay baad me connect karenge

    alert("Payment successful!");

    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div>
          <p className="font-bold text-lime-600">FITAI CHECKOUT</p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-slate-500">
            Review your order before completing the payment.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Customer Details */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h2 className="text-xl font-black">
                Customer Details
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

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

                {!isMembership && (
                  <>
                    <div>
                      <label className="text-sm font-semibold">
                        Phone
                      </label>

                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold">
                        Pincode
                      </label>

                      <input
                        type="text"
                        placeholder="Enter pincode"
                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold">
                        Address
                      </label>

                      <textarea
                        rows="3"
                        placeholder="Enter delivery address"
                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Payment */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">

              <h2 className="text-xl font-black">
                Payment Method
              </h2>

              <div className="mt-5 rounded-lg border-2 border-lime-500 bg-lime-50 p-4">
                <div className="flex items-center gap-3">

                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-lime-600">
                    <div className="h-2.5 w-2.5 rounded-full bg-lime-600" />
                  </div>

                  <div>
                    <p className="font-bold">
                      Online Payment
                    </p>

                    <p className="text-xs text-slate-500">
                      Secure payment via Razorpay
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-6 rounded-xl border border-slate-200 bg-white p-6">

              <h2 className="text-xl font-black">
                Order Summary
              </h2>

              <div className="mt-6 border-b border-slate-200 pb-5">

                {isMembership ? (
                  <>
                    <p className="text-sm text-slate-500">
                      Membership
                    </p>

                    <h3 className="mt-1 text-lg font-black">
                      FitAI {checkoutData.duration}
                    </h3>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-slate-500">
                      Product
                    </p>

                    <h3 className="mt-1 text-lg font-black">
                      {checkoutData.name || "Fitness Product"}
                    </h3>
                  </>
                )}

                <div className="mt-4 flex justify-between">
                  <span className="text-sm text-slate-500">
                    Price
                  </span>

                  <span className="font-bold">
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="text-sm text-slate-500">
                    Discount
                  </span>

                  <span className="font-bold text-lime-600">
                    ₹0
                  </span>
                </div>

              </div>

              <div className="flex justify-between py-5">

                <span className="font-black">
                  Total
                </span>

                <span className="text-xl font-black">
                  ₹{price.toLocaleString("en-IN")}
                </span>

              </div>

              <button
                onClick={handlePayment}
                className="w-full rounded-lg bg-slate-950 py-3 font-bold text-white transition hover:bg-lime-500 hover:text-slate-950"
              >
                Pay ₹{price.toLocaleString("en-IN")}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                By continuing, you agree to FitAI's terms and conditions.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
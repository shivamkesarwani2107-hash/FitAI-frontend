import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Cart() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products/${id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch product"
          );
        }

        setProduct(data.product);
      } catch (error) {
        console.error("CART PRODUCT ERROR:", error);

        setError(
          error.message || "Unable to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = product
    ? product.price * quantity
    : 0;

  const handlePayment = async () => {
    try {
      setPaymentLoading(true);
      setError("");

      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        navigate("/login");
        return;
      }

      const user = JSON.parse(savedUser);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: totalPrice,
            type: "product",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to create payment order"
        );
      }

      if (!window.Razorpay) {
        throw new Error(
          "Razorpay failed to load. Please refresh the page."
        );
      }

      const options = {
        key: "rzp_test_TFjzBqCubiX75P",
        amount: data.order.amount,
        currency: data.order.currency,
        name: "FitAI",
        description: product.name,
        order_id: data.order.id,

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
              `${process.env.REACT_APP_API_URL}/payment/verify`,
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

                  type: "product",

                  productId: product._id,

                  productName: product.name,

                  quantity,

                  price: totalPrice,
                }),
              }
            );

            const verifyData =
              await verifyResponse.json();

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
            setPaymentLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setPaymentLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("PRODUCT PAYMENT ERROR:", error);

      setError(
        error.message || "Payment could not be started"
      );

      setPaymentLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-lg font-bold">
          Loading product...
        </p>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <h2 className="text-2xl font-black text-red-500">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {error}
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-5 rounded-lg bg-slate-950 px-6 py-3 text-sm font-bold text-white"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">

        <button
          onClick={() => navigate("/shop")}
          className="mb-8 text-sm font-bold text-slate-500 hover:text-slate-950"
        >
          ← Back to Shop
        </button>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-slate-100 text-8xl sm:text-9xl">
            {product.image}
          </div>

          <div className="flex flex-col justify-center">

            <p className="font-bold text-lime-600">
              {product.category}
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              {product.name}
            </h1>

            {product.description && (
              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                {product.description}
              </p>
            )}

            <div className="mt-6">
              <span className="text-3xl font-black">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && (
                <span className="ml-3 text-lg text-slate-400 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm font-bold text-lime-600">
              {product.stock > 0
                ? `${product.stock} items available`
                : "Out of stock"}
            </p>

            <div className="mt-8">
              <p className="mb-3 text-sm font-bold">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-lg border border-slate-200">
                <button
                  onClick={decreaseQuantity}
                  className="px-5 py-3 text-lg font-bold hover:bg-slate-100"
                >
                  −
                </button>

                <span className="min-w-14 text-center font-bold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  className="px-5 py-3 text-lg font-bold hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
              <span className="font-bold">
                Total
              </span>

              <span className="text-2xl font-black">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            {error && (
              <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={
                product.stock === 0 || paymentLoading
              }
              className="mt-6 w-full rounded-lg bg-lime-500 py-4 font-black text-slate-950 hover:bg-lime-400 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              {paymentLoading
                ? "Processing..."
                : "Proceed to Payment →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
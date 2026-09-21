import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:4000/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products || []);
      } catch (error) {
        console.error("PRODUCT FETCH ERROR:", error);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">

        <div>
          <p className="font-bold text-lime-600">
            FITAI SHOP
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Fitness Store
          </h1>

          <p className="mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
            Fitness products, gym accessories and nutrition essentials.
          </p>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500 sm:max-w-md"
          />
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold ${
                category === item
                  ? "bg-lime-500 text-slate-950"
                  : "border border-slate-200 bg-white text-slate-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {filteredProducts.length} products
          </p>

          <button
            onClick={() => navigate("/cart")}
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-lime-500 hover:text-slate-950"
          >
            Cart
          </button>
        </div>

        {loading && (
          <div className="py-20 text-center">
            <p className="text-lg font-bold">
              Loading products...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="py-20 text-center">
            <p className="font-bold text-red-500">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-slate-950 px-5 py-2 text-sm font-bold text-white"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <div className="flex h-36 items-center justify-center bg-slate-100 text-5xl sm:h-48 sm:text-6xl">
                  {product.image}
                </div>

                <div className="p-4">
                  <p className="text-xs font-bold text-lime-600">
                    {product.category}
                  </p>

                  <h2 className="mt-2 text-sm font-bold sm:text-base">
                    {product.name}
                  </h2>

                  {product.description && (
                    <p className="mt-2 line-clamp-2 text-xs text-slate-500">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-3">
                    <span className="font-black">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    {product.oldPrice && (
                      <span className="ml-2 text-xs text-slate-400 line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {product.stock > 0
                      ? `${product.stock} available`
                      : "Out of stock"}
                  </p>

                  <button
                    disabled={product.stock === 0}
                    onClick={() =>
                      navigate(`/cart/${product._id}`)
                    }
                    className={`mt-4 w-full rounded-lg py-2 text-sm font-bold ${
                      product.stock > 0
                        ? "bg-slate-950 text-white hover:bg-lime-500 hover:text-slate-950"
                        : "cursor-not-allowed bg-slate-200 text-slate-400"
                    }`}
                  >
                    {product.stock > 0
                      ? "View Product"
                      : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading &&
          !error &&
          filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <h2 className="text-xl font-bold">
                No products found
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Try another search or category.
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

export default Shop;
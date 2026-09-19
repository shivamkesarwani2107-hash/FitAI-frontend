import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Shop() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Whey Protein",
      category: "Protein",
      price: 2499,
      oldPrice: 2999,
      image: "🥛",
    },
    {
      id: 2,
      name: "Gym Shaker",
      category: "Accessories",
      price: 499,
      oldPrice: 699,
      image: "🥤",
    },
    {
      id: 3,
      name: "Lifting Straps",
      category: "Accessories",
      price: 399,
      oldPrice: 599,
      image: "💪",
    },
    {
      id: 4,
      name: "Training Gloves",
      category: "Accessories",
      price: 699,
      oldPrice: 899,
      image: "🧤",
    },
    {
      id: 5,
      name: "Resistance Bands",
      category: "Equipment",
      price: 799,
      oldPrice: 999,
      image: "🏋️",
    },
    {
      id: 6,
      name: "Gym Belt",
      category: "Equipment",
      price: 999,
      oldPrice: 1299,
      image: "🥋",
    },
    {
      id: 7,
      name: "Running Shoes",
      category: "Footwear",
      price: 1999,
      oldPrice: 2499,
      image: "👟",
    },
    {
      id: 8,
      name: "Mass Gainer",
      category: "Protein",
      price: 2899,
      oldPrice: 3499,
      image: "🥤",
    },
  ];

  const categories = [
    "All",
    "Protein",
    "Accessories",
    "Equipment",
    "Footwear",
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

        {/* Header */}
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

        {/* Search */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-lime-500 sm:max-w-md"
          />
        </div>

        {/* Categories */}
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

        {/* Top Row */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {filteredProducts.length} products
          </p>

          <button
            onClick={() => navigate("/cart")}
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white"
          >
            Cart
          </button>
        </div>

        {/* Products */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
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

                <div className="mt-2">
                  <span className="font-black">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <span className="ml-2 text-xs text-slate-400 line-through">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  onClick={() =>
                    navigate(`/products/${product.id}`)
                  }
                  className="mt-4 w-full rounded-lg bg-slate-950 py-2 text-sm font-bold text-white hover:bg-lime-500 hover:text-slate-950"
                >
                  View Product
                </button>

              </div>

            </div>
          ))}

        </div>

        {filteredProducts.length === 0 && (
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
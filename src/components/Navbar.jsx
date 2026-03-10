import React, { useState } from "react";
import { ShoppingCart, SlidersHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = ({ onSort }) => {
  const [showFilter, setShowFilter] = useState(false);

  // 🔥 Get cart count from Redux store
  const count = useSelector((state) => state.counter.value);

  return (
    <header className="w-full bg-gray-900 border-b border-gray-800 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-2xl font-bold text-white tracking-wide">
          E-cart
        </div>

        {/* Search + Filter */}
        <div className="flex-1 mx-8 flex items-center gap-4 relative">
          
          {/* Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </div>

          {/* Sort Buttons */}
          <button
            onClick={() => {
              onSort("high");
              setShowFilter(false);
            }}
            className="flex items-center justify-between px-3 py-2 rounded-md border border-gray-700 bg-gray-800 hover:bg-blue-600 hover:border-blue-500 transition text-sm font-medium text-gray-200"
          >
            <span>High→Low</span>
          </button>

          <button
            onClick={() => {
              onSort("low");
              setShowFilter(false);
            }}
            className="flex items-center justify-between px-3 py-2 rounded-md border border-gray-700 bg-gray-800 hover:bg-blue-600 hover:border-blue-500 transition text-sm font-medium text-gray-200"
          >
            <span>Low→High</span>
          </button>

          {/* Dropdown */}
          {showFilter && (
            <div className="absolute top-14 right-0 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-4 z-50">
              <p className="text-sm font-semibold text-white mb-3">
                Filter by Rating
              </p>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-gray-700 hover:bg-blue-600 transition text-sm font-medium text-gray-200">
                  <span>High → Low</span>
                  <span className="text-xs text-gray-400">Top Rated</span>
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-gray-700 hover:bg-blue-600 transition text-sm font-medium text-gray-200">
                  <span>Low → High</span>
                  <span className="text-xs text-gray-400">Least Rated</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer flex items-center gap-2 text-gray-200 hover:text-blue-400 transition">
          <ShoppingCart className="w-6 h-6" />
          <span className="font-medium">Cart</span>

          {/* 🔥 Dynamic Badge from Redux */}
          <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            {count}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
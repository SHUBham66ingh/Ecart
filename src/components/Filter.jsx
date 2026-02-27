import React from "react";
import { items } from "./Data";
const Filtering = ({ sortType }) => {
  const sortedItems = [...items].sort((a, b) => {
    const priceA = Number(a.price);
    const priceB = Number(b.price);
    if (sortType === "high") {
      return priceB - priceA;
    }
    if (sortType === "low") {
      return priceA - priceB;
    }
    return 0;
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {" "}
      {sortedItems.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl shadow-md p-4 hover:shadow-lg transition"
        >
          {" "}
          <img
            src={item.imgSrc}
            alt={item.title}
            className="w-full h-48 object-contain mb-4"
          />{" "}
          <h2 className="text-lg font-semibold text-gray-800">
            {" "}
            {item.title}{" "}
          </h2>{" "}
          <p className="text-sm text-gray-500 mb-2"> {item.description} </p>{" "}
          <p className="text-blue-600 font-bold text-lg"> ₹ {item.price} </p>{" "}
          <a
            href={item.amazonLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {" "}
            Buy Now{" "}
          </a>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default Filtering;



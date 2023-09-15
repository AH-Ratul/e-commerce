import React from "react";
import { Link } from "react-router-dom";

const Items = ({ item }) => {
  const { name, img } = item;

  return (
    <div className="text-center border p-2 rounded">
      <img
        src={img}
        alt="images"
        className="w-48 h-44  p-5 ml-4 mb-6 transform hover:scale-105 transition duration-500 ease-out"
      />
      <p className="mb-4 text-xl font-semibold text-slate-700 hover:text-orange-600 transition duration-500 ease-in-out">
        <Link>{name}</Link>
      </p>
    </div>
  );
};

export default Items;

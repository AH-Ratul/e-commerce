import React from "react";
import { Link } from "react-router-dom";

const Items = ({ item }) => {
  const { name, img, to } = item;

  return (
    <div className="text-center border p-2 rounded-md w-52 ml-7 mt-9">
      <img
        src={img}
        alt="images"
        className="w-32 ml-8 mt-4 pl-2 pr-2 h-fit mb-9 transform hover:scale-105 transition duration-500 ease-out"
      />
      <p className="mb-2 text-xl font-semibold text-slate-700 hover:text-orange-600 transition duration-500 ease-in-out">
        {<Link to={to}>{name}</Link>}
      </p>
    </div>
  );
};

export default Items;

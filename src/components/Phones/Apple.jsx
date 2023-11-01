import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export const loadApple = async () => {
  const data = await fetch(`http://localhost:5000/products`);

  return data;
};

const Iphone = ({ apple }) => {
  const { id, name, price, image } = apple;

  return (
    <div className="border rounded m-3 p-3">
      <div className="h-64 mb-5">
        <img src={image} alt="" className="w-20 ml-12 h-44" />
        <p className="text-sm hover:text-orange-600 hover:underline font-semibold mt-5 h-fit w-fit mb-4 ">
          <Link to={`/productdetails/${id}/${name}`}>{name}</Link>
        </p>
        <p className="text-xl text-orange-500 font-semibold ">
          <span className="text-3xl ">&#2547; </span> {price}
        </p>
      </div>
    </div>
  );
};

const Apple = () => {
  const data = useLoaderData();

  return (
    <div className="mt-24 ml-20 mr-20">
      <h1 className="text-3xl text-rose-700 font-bold">Latest IPhones</h1>
      <div className="grid grid-cols-6 mt-6">
        {data.map((apple) => (
          <Iphone key={apple.id} apple={apple}></Iphone>
        ))}
      </div>
    </div>
  );
};

export default Apple;

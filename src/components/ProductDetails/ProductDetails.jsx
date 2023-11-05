import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

export const loadProduct = async ({ params }) => {
  const data = await fetch(`http://localhost:5000/products?id=${params.pid}`);

  return data;
};

const ProductDetails = () => {
  const data = useLoaderData();
  const [count, setCount] = useState(1);

  const increase = () => {
    const add = count + 1;
    setCount(add);
  };

  const decrease = () => {
    if (count > 1) {
      const mul = count - 1;
      setCount(mul);
    }
  };

  

  return (
    <div className="mt-28 text-black bg-slate-100 ml-20 mr-20 flex h-[430px]">
      <div className="w-52 ml-5 px-4 py-7 h-44">
        <img src={data[0].image} alt="" />
      </div>
      <div className="pl-20 mt-4">
        <h1 className="text-3xl">{data[0].name}</h1>
        <p className="mt-10 text-4xl font-semibold text-orange-500">
          &#2547; {data[0].price}
        </p>
        <div className="flex mt-12">
          <p className="text-lg">Quantity: </p>
          <button onClick={decrease} className="text-xl ml-3 bg-gray-200 px-2 ">
            <FaMinus />
          </button>
          <p className="text-xl ml-0 mr-0 mx-3 font-semibold bg-white w-14 ps-5">
            {count}
          </p>
          <button onClick={increase} className="text-xl bg-gray-200 px-2 ">
            <FaPlus />
          </button>
        </div>
        <div className="mt-20">
          <Link
            to={`/shipping/${data[0].id}/${data[0].name}`}
            className="bg-sky-400 hover:bg-sky-500 text-xl  text-white px-16 py-2 mr-3 transition duration-300 ease-in-out"
          >
            Buy Now
          </Link>
          <button className="bg-orange-400 hover:bg-orange-500 text-xl  text-white px-16 py-2 transition duration-300 ease-in-out">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

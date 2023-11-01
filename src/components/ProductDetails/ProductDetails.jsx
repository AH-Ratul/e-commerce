import React from "react";
import { useLoaderData } from "react-router-dom";

export const loadProduct = async ({ params }) => {
  const data = await fetch(`http://localhost:5000/products?id=${params.pid}`);

  return data;
};

const ProductDetails = () => {
  const data = useLoaderData();
  console.log(data[0]);
  return (
    <div className="mt-44 text-black">
      <h1>{data[0].name}</h1>
      <p>{data[0].price}</p>
    </div>
  );
};

export default ProductDetails;

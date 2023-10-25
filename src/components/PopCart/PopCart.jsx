import React from "react";

const PopCart = () => {
  return (
    <div className="absolute -right-[210px] top-12 bg-white shadow-md h-[540px] w-96">
      <div className="bg-gray-700 w-full p-4 text-lg">
        <h1 className="text-white">Cart (0)</h1>
      </div>
      <div className="h-[70%] block overflow-x-hidden p-2"></div>
      <div className="text-center text-base border-t mb-3 block  bottom-0 mt-9 ">
        <h1 className="font-bold m-1">Sub Total: Tk 0</h1>
        <button className="text-white bg-red-600 w-full p-1">View Cart</button>
      </div>
    </div>
  );
};

export default PopCart;

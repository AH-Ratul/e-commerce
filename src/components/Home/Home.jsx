import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import item1 from "../../../public/img/item1.png";
import Items from "../Items/Items";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  // load items
  const loadItems = async () => {
    const res = await fetch("items.json");
    const data = await res.json();
    setItems(data);

    return data;
  };

  return (
    <div className="relative top-14 ">
      <div className="grid grid-cols-2 gap-2 p-5 bg-slate-50 h-screen items-center">
        <div className="ml-28">
          <p className="text-3xl mb-9 text-orange-500">BEST IN 2023</p>
          <h1 className="text-5xl font-bold">Choose Your Favorite Product</h1>
          <button className="bg-red-500 hover:bg-gray-700 text-white p-3 cursor-pointer mt-9 w-[30%] rounded-full font-semibold">
            Shop Now
          </button>
        </div>
        <div className="ml-20">
          <img src={item1} alt="" className="w-[80%]" />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mt-16 mb-10 pl-12 text-slate-700">
          Popular Categories
        </h1>
        <div className="grid grid-cols-5 gap-3 pl-12 pr-16 ">
          {items.map((item) => (
            <Items key={item.id} item={item}></Items>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;

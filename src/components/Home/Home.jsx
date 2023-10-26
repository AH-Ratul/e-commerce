import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="relative top-9 ">
      <div className="grid grid-cols-2 gap-2 h-screen items-center  bg-slate-50">
        <div className="ml-20 bg-black grid grid-cols-2 h-[570px] w-[900px]">
          <div className="p-4 mt-36 ml-9">
            <h3 className="text-orange-500 font-semibold text-xl mb-4 ">
              New Smartphones Series
            </h3>
            <h1 className="text-slate-300 text-3xl mb-4 font-bold ">
              Up to 20% off <br></br>Premium Smart watch
            </h1>
            <p className="text-slate-300 text-lg mb-4">
              We work with global brand and have create an smart gadget for you
              to make easiest life
            </p>
            <button className="text-slate-300 font-semibold bg-[#323232] px-7 py-3 rounded-md hover:bg-orange-600 transition duration-500 ease-out">
              Buy Now
            </button>
          </div>
          <div>
            <img
              src="../../../public/img/smw1.png"
              alt="pic"
              className="w-[330px] mt-20 mb-7 ml-16 p-7 "
            />
          </div>
        </div>
        <div className="ml-60 mr-20 grid grid-rows-2 gap-3">
          <div className="bg-black flex h-[279px]">
            <div className="text-slate-100 p-2 mt-16 ml-9 absolute z-10">
              <h1 className="text-xl mb-5 font-semibold">Modern Laptops</h1>
              <h3 className="text-2xl mb-3 font-bold">New Collection</h3>
              <Link className="text-orange-500 hover:underline">More</Link>
            </div>
            <div>
              <img
                src="../../../public/img/lap.png"
                alt="lap"
                className="w-[290px] p-7 mt-16 ml-32 right-0 transform hover:scale-105 transition duration-500 ease-out"
              />
            </div>
          </div>
          <div className="bg-black flex h-[279px]">
            <div className="text-slate-100 p-2 mt-16 ml-9 absolute z-10">
              <h1 className="text-xl mb-5 font-semibold">Latest Phones</h1>
              <h3 className="text-2xl mb-3 font-bold">New Collection</h3>
              <Link className="text-orange-500 hover:underline">More</Link>
            </div>
            <div>
              <img
                src="../../../public/img/phone1.png"
                alt="lap"
                className="w-[220px] p-7 mt-8 ml-48 right-0 transform hover:scale-105 transition duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pr-20 pl-20 mt-3">
        <div className="bg-gradient-to-r from-teal-500 to-lime-200 pl-20 pr-20 rounded-2xl py-9 flex justify-between items-center">
          <h1 className="text-xl text-rose-800 font-bold">Smartphones</h1>
          <Link className="bg-orange-700 py-1 px-2 text-base rounded-md text-white">
            Visit More
          </Link>
        </div>
        <div className="grid grid-cols-5 items-center">
          {items.map((item) => (
            <Items key={item.id} item={item}></Items>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

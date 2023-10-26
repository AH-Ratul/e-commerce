import React, { useEffect, useState } from "react";

const Iphone = ({ apple }) => {
  const { name, price, img } = apple;
  return (
    <div className="text-center border m-3 p-2">
      <div>
        <img src={img} alt="" className="w-20 ml-12" />
        <p className="text-base font-semibold mt-3">{name}</p>
        <p>&#2547;{price}</p>
      </div>
      <button className="bg-zinc-800 text-white p-2 w-full mt-3 bottom-0">
        Buy
      </button>
    </div>
  );
};

const Apple = () => {
  const [apples, setApples] = useState([]);

  useEffect(() => {
    loadApple();
  }, []);

  const loadApple = async () => {
    const res = await fetch("apple.json");
    const data = await res.json();
    setApples(data);

    return data;
  };

  return (
    <div className="mt-24 ml-20 mr-20">
      <h1 className="text-3xl text-rose-700 font-bold">Latest IPhones</h1>
      <div className="grid grid-cols-6 mt-6">
        {apples.map((apple) => (
          <Iphone key={apple.id} apple={apple}></Iphone>
        ))}
      </div>
    </div>
  );
};

export default Apple;

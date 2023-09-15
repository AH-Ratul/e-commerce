import React from "react";

const CategoryMenu = () => {
  return (
    <div className=" bg-white  p-5  absolute shadow-md  hidden group-hover:block transition duration-500 z-10">
      <ul className="flex">
        <li className="mr-5">Smartphone</li>
        <li className="mr-5">Headphone</li>
        <li className="mr-5">TV</li>
        <li className="mr-5">Desktop</li>
        <li>Laptop</li>
      </ul>
    </div>
  );
};

export default CategoryMenu;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDwon from "./DropDwon";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const isToggleMenu = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <div className="flex justify-between items-center pl-16 pr-16 p-5 fixed z-10 top-0 right-0 left-0 bg-white shadow-md">
      <h1 className="font-bold text-3xl text-lime-500">EARN-SHOP</h1>
      <div className="">
        <NavLink
          to="/"
          className="mr-7 text-base font-semibold hover:text-red-500 transition ease-out duration-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          className="mr-7 text-base font-semibold hover:text-red-500 transition ease-out duration-200"
        >
          Categories
        </NavLink>
        <NavLink
          to="/Blog"
          className="mr-7 text-base font-semibold hover:text-red-500 transition ease-out duration-200"
        >
          Blog
        </NavLink>
        <NavLink
          to="/Contacts"
          className=" text-base font-semibold hover:text-red-500 transition ease-out duration-200"
        >
          Contacts
        </NavLink>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-2 px-5 rounded-xl mr-8 border outline-none"
          placeholder="Search"
        />
        <button className="absolute left-0 right-0 ml-[187px] rounded-full w-fit p-2 text-red-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
        </button>
        <NavLink className="text-2xl mr-5 text-gray-700">
          <FontAwesomeIcon icon={faCartPlus} />
        </NavLink>
        
        <div className=" relative">
          <button
            onClick={isToggleMenu}
            className="text-2xl hover:text-red-500"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>

          {/* toggle drop down menu */}
          {dropDownOpen && (
            <DropDwon></DropDwon>
          )}
        </div>

      </div>
    </div>
  );
};

export default Header;

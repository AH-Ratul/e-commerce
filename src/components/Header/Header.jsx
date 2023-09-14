import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
      <div className="relative">
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
        <span>
          <Link className="text-2xl hover:text-red-500">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="right-0 ml-36 bg-white mt-3 p-5 absolute shadow-md ">
            <p className="text-sm mb-3 font-bold text-gray-400 text-center">
              Welcome to EARN-SHOP
            </p>
            <div className="flex justify-between items-center p-1 border-b pb-4">
              <Link
                to="/signup"
                className="bg-red-500 px-3 py-1 text-white font-semibold"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-orange-200 px-3 py-1 ml-3 font-semibold text-red-600 "
              >
                Login
              </Link>
            </div>
            <div className="flex flex-col mt-1">
              <Link className="text-sm hover:bg-gray-100 p-1">My Orders</Link>
              <Link className="text-sm hover:bg-gray-100 p-1">Payment</Link>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import DropDwon from "./DropDwon";
import CategoryMenu from "./CategoryMenu";
import { useEffect, useRef, useState } from "react";
import UseToggle from "../../Hooks/UseToggle";

const Header = () => {
  const [isOpen, setIsOpen, ref] = UseToggle(false);
  const [isCatOpen, setIsCatOpen, cat] = UseToggle(false);
  const [searchItem, setSearchItem] = useState("");

  // handle search field
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  // Search handler
  const search = () => {
    console.log(searchItem);

    setSearchItem("");
  };

  return (
    <div className="flex justify-between items-center pl-16 pr-16 p-3 fixed z-10 top-0 right-0 left-0 bg-white shadow-sm">
      <h1 className="font-bold text-3xl text-lime-500">NEAR-SHOP</h1>
      <ul className="flex items-center">
        <li>
          <NavLink
            to="/"
            className="mr-7 text-3xl flex font-semibold hover:text-red-500 transition ease-out duration-200"
          >
            <FaHome className="" />
          </NavLink>
        </li>
        <li className="">
          <div
            ref={cat}
            onClick={() => setIsCatOpen(!isCatOpen)}
            className="mr-7 text-base font-semibold  transition ease-out duration-200 cursor-pointer relative"
          >
            Categories
            {isCatOpen && <CategoryMenu></CategoryMenu>}
          </div>
          
        </li>
      </ul>

      <div className="relative flex items-center">
        <div className="flex w-[500px]">
          <input
            type="text"
            value={searchItem}
            onChange={handleSearch}
            className="py-2 px-5 rounded-xl -ml-20 border outline-none w-full"
            placeholder="Search"
          />
          <button
            onClick={search}
            className="absolute left-0 right-0 ml-[370px] h-fit  w-12  rounded-lg  p-2 text-red-500"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
          </button>
        </div>
        <div className="relative flex mr-7">
          <NavLink className="text-2xl mr-5 text-gray-700 ">
            <FontAwesomeIcon icon={faCartPlus} />
           <div className="absolute -top-1 right-3">
           <p className=" text-xs text-white font-bold rounded-full  px-[5px] bg-red-600 mb-5">
              0
            </p>
           </div>
          </NavLink>
        </div>

        {/* manage toggle in user icon */}
        <div
          ref={ref}
          onClick={() => setIsOpen(!isOpen)}
          className=" relative text-2xl"
        >
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
          {isOpen && <DropDwon></DropDwon>}
        </div>
      </div>
    </div>
  );
};

export default Header;

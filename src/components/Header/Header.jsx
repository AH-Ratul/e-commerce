import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import DropDwon from "./DropDwon";
import CategoryMenu from "./CategoryMenu";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const handleCLickOut = (event) => {
      if (ref.current && !ref.current.contains(event.target))
        setDropDownOpen(false);
    };

    document.addEventListener("click", handleCLickOut);

    return window.removeEventListener("click", handleCLickOut);
  }, []);

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
    <div className="flex justify-between items-center pl-16 pr-16 p-5 fixed z-10 top-0 right-0 left-0 bg-white shadow-md">
      <h1 className="font-bold text-3xl text-lime-500">NEAR-SHOP</h1>
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className="mr-7 text-base font-semibold hover:text-red-500 transition ease-out duration-200"
          >
            Home
          </NavLink>
        </li>
        <li className=" relative group block">
          <NavLink
            to="/categories"
            className="mr-7 text-base font-semibold hover:text-red-500 transition ease-out duration-200"
          >
            Categories
          </NavLink>
          <CategoryMenu></CategoryMenu>
        </li>
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
      </ul>

      <div className="relative flex items-center">
        <input
          type="text"
          value={searchItem}
          onChange={handleSearch}
          className="py-2 px-5 rounded-xl mr-8 border outline-none"
          placeholder="Search"
        />
        <button
          onClick={search}
          className="absolute left-0 right-0 ml-[187px] rounded-full w-fit p-2 text-red-500"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
        </button>
        <NavLink className="text-2xl mr-5 text-gray-700">
          <FontAwesomeIcon icon={faCartPlus} />
        </NavLink>

        {/* manage toggle in user icon */}
        <div
          ref={ref}
          onClick={() => setDropDownOpen(!dropDownOpen)}
          className=" relative text-2xl"
        >
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
          {dropDownOpen && <DropDwon></DropDwon>}
        </div>
      </div>
    </div>
  );
};

export default Header;

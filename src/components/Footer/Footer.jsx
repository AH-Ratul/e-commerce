import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" relative bg-[#172134] top-[180px]">
      <div className="grid grid-cols-3 gap-3  pl-20 pr-20 ml-32 pt-12">
        <div className="">
          <h1 className="text-2xl font-bold mb-4 text-gray-300">Contact Us</h1>
          <h3 className="mb-2 text-slate-300">NEAR-SHOP </h3>
          <p className="mb-2 text-slate-300">Mirpur, Dhaka, Bangladesh</p>
          <p className="mb-2 text-slate-300">+880 1712-345678</p>
          <p className="text-slate-300">earnshop@example.com</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4 text-gray-300">Information</h1>
          <ul className="flex flex-col">
            <li className="mb-2 text-slate-300">
              <Link>Product Support</Link>
            </li>
            <li className="mb-2 text-slate-300">
              <Link>Checkout</Link>
            </li>
            <li className="mb-2 text-slate-300">
              <Link>License Policy</Link>
            </li>
            <li className="text-slate-300">
              <Link>About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4 text-gray-300">
            Customer Service
          </h1>
          <ul className="flex flex-col">
            <li className="mb-2 text-slate-300">
              <Link>Help Center</Link>
            </li>
            <li className="mb-2 text-slate-300">
              <Link>Returns & Refunds</Link>
            </li>
            <li className="mb-2 text-slate-300">
              <Link>Contact Us</Link>
            </li>
            <li className="text-slate-300">
              <Link>Policies & Rules</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 p-5 bg-[#172134] border-t border-t-gray-600 w-full">
        <h1 className="text-gray-300 text-sm">
          Copyright &copy; NEAR-SHOP 2023 | All Right Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;

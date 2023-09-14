import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" relative top-[180px]">
      <div className="grid grid-cols-3 gap-3  pl-20 pr-20 ml-32">
        <div className="">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <h3 className="mb-2 text-slate-600">EARN-SHOP </h3>
          <p className="mb-2 text-slate-600">Mirpur, Dhaka, Bangladesh</p>
          <p className="mb-2 text-slate-600">+880 1712-345678</p>
          <p className="text-slate-600">earnshop@example.com</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Information</h1>
          <Link className="mb-2 text-slate-600">Product Support</Link>
          <Link className="mb-2 text-slate-600">Checkout</Link>
          <Link className="mb-2 text-slate-600">License Policy</Link>
          <Link className="text-slate-600">About Us</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Customer Service
          </h1>
          <Link className="mb-2 text-slate-600">Help Center</Link>
          <Link className="mb-2 text-slate-600">Returns & Refunds</Link>
          <Link className="mb-2 text-slate-600">Contact Us</Link>
          <Link className="text-slate-600">Policies & Rules</Link>
        </div>
      </div>
      <div className="text-center mt-8 p-5 bg-gray-50 border-t w-full">
        <h1 className="text-slate-800 text-sm">Copyright &copy; EARN-SHOP 2023 | All Right Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const SignUp = () => {
  return (
    <div className="top-28 relative ">
      <div className="flex justify-center items-center">
        <div className="text-center p-10 w-[400px] sm:w-[600px]   shadow-lg mb-9 rounded-md">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <div className="flex justify-between items-center mt-16 mb-4">
            <p className="ml-24 ">Full Name*</p>
            <input
              type="text"
              placeholder="enter your fullname"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4 ">
            <p className="ml-24 ">Phone*</p>
            <input
              type="text"
              placeholder="enter your phone number"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="ml-24 ">Email*</p>
            <input
              type="email"
              placeholder="enter your email"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-9">
            <p className="ml-24">Password*</p>
            <input
              type="password"
              placeholder="enter your password"
              required
              className="border p-2 w-64 mr-20 outline-none"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <button
              type="submit"
              className="bg-red-600 hover:bg-gray-700 text-white p-3 cursor-pointer m-6 w-[30%] ml-[35%] rounded-full font-semibold"
            >
              Create
            </button>
          </div>
          <p className="text-center mt-8 text-sm">
            Already have an Account?
            <Link to="/login" className="hover:text-red-500 font-semibold">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;

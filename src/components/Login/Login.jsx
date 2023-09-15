import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HR from "../HR/HR";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const [passValue, setPassValue] = useState('')

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handlePassValue = (e) => {
    setPassValue(e.target.value);
  }
  
  const login = () => {
    console.log(inputValue);
    console.log(passValue)

    setInputValue('')
    setPassValue('')
  }

  return (
    <div className="top-28 relative  ">
      <div className="flex justify-center items-center">
        <div className="text-center p-10 w-[400px] sm:w-[600px]   shadow-lg mb-9 rounded-md">
          <h1 className="text-3xl font-bold">Login</h1>

          <div className="flex justify-between items-center mt-16 mb-4">
            <p className="ml-20 ">Phone/Email</p>
            <input
              type="email"
              value={inputValue}
              onChange={handleInputValue}
              placeholder="enter your phone/email"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-9">
            <p className="ml-20">Password</p>
            <input
              type="password"
              value={passValue}
              onChange={handlePassValue}
              placeholder="enter your password"
              required
              className="border p-2 w-64 mr-20 outline-none"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <Link className="hover:text-red-700 text-sm w-[30%] ml-[35%]">
              Forget Your Password?
            </Link>
            <button
              type="submit"
              onClick={login}
              className="bg-red-600 hover:bg-gray-700 text-white p-3 cursor-pointer m-6 w-[30%] ml-[35%] rounded-full font-semibold"
            >
              LOG IN
            </button>
            <div className="flex flex-col justify-center items-center m-5">
              <HR></HR>
              <button>
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="text-3xl text-red-600 mt-5 text-center "
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-3xl text-blue-800 mt-5 text-center ml-4 "
                />
              </button>
            </div>
          </div>
          <p className="text-center mt-8 text-sm">
            Don't have an Account?
            <Link to="/signup" className="hover:text-red-500 font-semibold">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;

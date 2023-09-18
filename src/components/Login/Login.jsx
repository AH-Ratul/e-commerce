import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HR from "../HR/HR";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const validateLogin = () => {
    if (!loginValue.email || !loginValue.password) {
      toast.error("Both email/phone and password are required.", {
        autoClose: 1000,
      });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(loginValue.email)) {
      toast.error("Invalid email format.", { autoClose: 1000 });
      return false;
    }

    if (loginValue.password.length < 6) {
      toast.error("password must be at least 6 characters", {
        autoClose: 1000,
      });
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    // validate before submission
    if (!validateLogin()) {
      return;
    }

    try {
      const login_response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginValue),
      });

      if (login_response.ok) {
        // clear the input field individually
        setLoginValue({
          email: "",
          password: "",
        });

        toast.success("Login Successfull!!!", { autoClose: 1000 });
      } else {
        toast.error("Login Error!", { autoClose: 1000 });
      }
      console.log(loginValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="top-28 relative  ">
      <div className="flex justify-center items-center">
        <div className="text-center p-10 w-[400px] sm:w-[600px]   shadow-lg mb-9 rounded-md">
          <h1 className="text-3xl font-bold">Login</h1>

          <div className="flex justify-between items-center mt-16 mb-4">
            <p className="ml-20 ">Phone/Email</p>
            <input
              type="email"
              name="email"
              value={loginValue.email}
              onChange={handleInputChange}
              placeholder="enter your phone/email"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-9">
            <p className="ml-20">Password</p>
            <input
              type="password"
              name="password"
              value={loginValue.password}
              onChange={handleInputChange}
              placeholder="enter your password"
              required
              className="border p-2 w-64 mr-20 outline-none"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <button
              type="submit"
              onClick={login}
              className="bg-red-600 hover:bg-gray-700 text-white p-3 cursor-pointer m-6 w-[30%] ml-[35%] rounded-full font-semibold"
            >
              LOG IN
            </button>
            <Link className="hover:text-red-700 text-sm w-[30%] ml-[35%]">
              Forget Your Password?
            </Link>
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

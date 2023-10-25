import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HR from "../HR/HR";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import { useAuth } from "../../provider/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginWithGoogle, dbLogin } = useAuth();
  const location = useLocation();

  const to = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateLogin = () => {
    if (!email || !password) {
      toast.error("Both email/phone and password are required.", {
        autoClose: 1000,
      });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email format.", { autoClose: 1000 });
      return false;
    }

    if (password.length < 6) {
      toast.error("password must be at least 6 characters", {
        autoClose: 1000,
      });
      return false;
    }
    return true;
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
        body: JSON.stringify({ email, password }),
      });

      if (login_response.ok) {
        const loggedUser = await login_response.json();
        dbLogin(loggedUser); // store the user data in context

        // store user data in local storage
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

        // clear the input field individually
        setEmail("");
        setPassword("");

        toast.success("Login Successfull!!!", { autoClose: 1000 });
        navigate(to);
      } else {
        toast.error("Login Error!", { autoClose: 1000 });
      }
      console.log("err");
    } catch (error) {
      // console.error(error);
      console.log("error-->", error);
    }
  };

  return (
    <div className="top-28 relative  ">
      <div className="flex justify-center items-center">
        <div className="text-center p-10 w-[400px] sm:w-[600px]   shadow-lg mb-9 rounded-md">
          <h1 className="text-3xl font-bold">Login</h1>

          <div className="flex justify-between items-center mt-16 mb-4">
            <p className="ml-20 ">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your phone/email"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-9">
            <p className="ml-20">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              <div className="flex gap-8">
                <Link onClick={handleGoogleSignIn}>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-3xl text-red-600 mt-5 text-center "
                  />
                </Link>
                <button>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-3xl text-blue-800 mt-5 text-center  "
                  />
                </button>
              </div>
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

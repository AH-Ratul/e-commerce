import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.init";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const auth = getAuth(app);

  const validateSignUp = () => {
    if (
      !inputValue.fullname ||
      !inputValue.phone ||
      !inputValue.email ||
      !inputValue.password
    ) {
      toast.error("All fields are required.", {
        autoClose: 1000,
      });
      return false;
    }

    if (inputValue.phone.length < 11 && inputValue.password.length < 6) {
      toast.error("invalid", { autoClose: 1000 });
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    // validate before submission
    if (!validateSignUp()) {
      return;
    }

    const email = inputValue.email;
    const password = inputValue.password;

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const logUser = result.user;
      console.log(logUser);
      updateName(result.user, fullname)
    })
    .catch (error => {
      console.error(error)
    })


    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });

      if (response.ok) {
        // clear the input field individually
        setInputValue({
          fullname: "",
          phone: "",
          email: "",
          password: "",
        });

        toast.success("Registration Successfull", { autoClose: 1000 }); // show a success toast
        navigate("/login");
      } else {
        toast.error("Registration Error", { autoClose: 1000 }); // show error toast to handle signup failure
      }
      console.log(inputValue);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const fullname = inputValue.fullname;
  const updateName = (user, fullname) => {
    
    updateProfile(user ,{
      displayName: fullname
    })
    .then(() => {
      console.log('updated name')
    })

  }


  return (
    <div className="top-28 relative ">
      <div className="flex justify-center items-center">
        <div className="text-center p-10 w-[400px] sm:w-[600px]   shadow-lg mb-9 rounded-md">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <div className="flex justify-between items-center mt-16 mb-4">
            <p className="ml-24 ">Full Name*</p>
            <input
              type="text"
              name="fullname"
              value={inputValue.fullname}
              onChange={handleInputChange}
              placeholder="enter your fullname"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4 ">
            <p className="ml-24 ">Phone*</p>
            <input
              type="text"
              name="phone"
              value={inputValue.phone}
              onChange={handleInputChange}
              placeholder="enter your phone number"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="ml-24 ">Email*</p>
            <input
              type="email"
              name="email"
              value={inputValue.email}
              onChange={handleInputChange}
              placeholder="enter your email"
              required
              className="border p-2 w-64 mr-20  outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-9">
            <p className="ml-24">Password*</p>
            <input
              type="password"
              name="password"
              value={inputValue.password}
              onChange={handleInputChange}
              placeholder="enter your password"
              required
              className="border p-2 w-64 mr-20 outline-none"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <button
              type="submit"
              onClick={handleCreate}
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

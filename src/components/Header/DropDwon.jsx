import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";

const DropDwon = () => {
  const { user, dbLogout } = useAuth();
  return (
    <div className="right-0 ml-40 bg-white mt-4 p-5 absolute border w-[220px]">
      <p className="text-sm mb-3 font-bold text-gray-400 text-center">
        Welcome to NEAR-SHOP
      </p>
      {user ? (
        <div className="flex flex-col p-1 border-b pb-4">
          <h1 className="text-base font-semibold">{user.fullname}</h1>
          <p className="text-sm">{user.email}</p>
        </div>
      ) : (
        <div className="flex justify-between items-center p-1 border-b pb-4">
          <Link
            to="/signup"
            className="bg-red-500 px-3 py-1 text-white text-base font-semibold"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-orange-200 px-3 py-1 ml-3 text-base font-semibold text-red-600 "
          >
            Login
          </Link>
        </div>
      )}
      <div className="flex flex-col mt-1">
        <Link className="text-sm hover:bg-gray-100 p-1">My Orders</Link>
        <Link className="text-sm hover:bg-gray-100 p-1">Payment</Link>
        <Link className="text-sm hover:bg-gray-100 p-1">Profile</Link>
        {user ? (
          <Link
            onClick={dbLogout}
            className="text-sm hover:bg-gray-100 p-1 font-semibold text-red-500"
          >
            Logout
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default DropDwon;

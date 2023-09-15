import { Link } from "react-router-dom";

const DropDwon = () => {
  return (
    <div className="right-0 ml-36 bg-white mt-3 p-5 absolute shadow-md hidden group-hover:block ">
      <p className="text-sm mb-3 font-bold text-gray-400 text-center">
        Welcome to EARN-SHOP
      </p>
      <div className="flex justify-between items-center p-1 border-b pb-4">
        <Link
          to="/signup"
          className="bg-red-500 px-3 py-1 text-white font-semibold"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-orange-200 px-3 py-1 ml-3 font-semibold text-red-600 "
        >
          Login
        </Link>
      </div>
      <div className="flex flex-col mt-1">
        <Link className="text-sm hover:bg-gray-100 p-1">My Orders</Link>
        <Link className="text-sm hover:bg-gray-100 p-1">Payment</Link>
        <Link className="text-sm hover:bg-gray-100 p-1">Profile</Link>
      </div>
    </div>
  );
};

export default DropDwon;

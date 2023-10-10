import React from "react";
import Footer from "../Footer/Footer";
import { useAuth } from "../../provider/AuthProvider";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="top-24 absolute w-screen">
      <div className="pl-64 pr-72">
        <h1 className="text-2xl font-semibold">My Profile</h1>
        <div className="mt-6 bg-teal-100 p-9  flex flex-col ">
          <div className="w-full flex justify-between items-center ">
            <div className="w-52">
              <p className="text-slate-600">Full Name</p>
              {user ? <p className="text-lg mt-2">{user.fullname}</p> : null}
            </div>
            <div className=" w-52">
              <p className="text-slate-600">Email Address</p>
              {user ? <p className="text-lg mt-2">{user.email}</p> : null}
            </div>
            <div className="pl-9 w-52">
              <p className="text-slate-600">Phone</p>
              {user ? <p className="text-lg mt-2">{user.phone}</p> : null}
            </div>
          </div>
          <div className="mt-52">
            <button className="bg-teal-500 hover:bg-teal-600  px-12 py-3 text-lg font-semibold text-white">
              Change Password
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default UserProfile;

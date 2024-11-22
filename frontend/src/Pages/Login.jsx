import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ytimg.com/vi/YjBnFNXIAOk/maxresdefault.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Card with text and buttons */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 bg-opacity-90">
          <h1 className="text-2xl font-semibold text-gray-700 text-center">
            Login as a,
          </h1>

          <div className="space-y-4">
            <Link to={"/userlogin"}>
              <button className="m-4 w-48 px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-yellow-500 focus:outline-none transition duration-200 ease-in-out transform hover:scale-105">
                User
              </button>
            </Link>

            <Link to={"/adminlogin"}>
              <button className="m-4 w-48 px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-yellow-500 focus:outline-none transition duration-200 ease-in-out transform hover:scale-105">
                Admin
              </button>
            </Link>

            <Link to={"/systemadminlogin"}>
              <button className="m-4 w-48 px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-yellow-500 focus:outline-none transition duration-200 ease-in-out transform hover:scale-105">
                System Admin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

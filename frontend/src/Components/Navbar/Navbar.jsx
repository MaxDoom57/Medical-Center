import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 font-bold text-white bg-red-700">
      <div className="flex items-center space-x-2 ml-5">
        <img src={logo} alt="University Logo" className="h-12" />{" "}
        <div className="flex flex-col">
          <span className="text-xl">University of Sri Jayewardenepura</span>
          <span className="text-md">Medical Center</span>
        </div>
      </div>

      <ul className="flex gap-10 ml-5">
        <Link to={"/"}>
          <li className="hover:underline">Home</li>
        </Link>

        <Link to={"/about-us"}>
          <li className="hover:underline">About Us</li>
        </Link>

        <Link to={"/ourstaff"}>
          <li className="hover:underline">Our Staff</li>
        </Link>

        <Link to={"/contact-us"}>
          <li className="hover:underline">Contact Us</li>
        </Link>
      </ul>

      <div className="flex gap-4 mr-5">
        <Link to={"/userregister"}>
          <button className="px-4 py-2 rounded-md bg-white/20 hover:bg-yellow-500 transition duration-300">
            Register
          </button>
        </Link>

        <Link to={"/login"}>
          <button className="px-4 py-2 rounded-md bg-white/20 hover:bg-yellow-500 transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/logo.png";

const UserNavbar = () => {
  return (
    <div className="flex items-center justify-between py-2 font-bold text-white bg-red-700 cursor-pointer px-10">
      <div className="flex items-center">
        <img src={logo} alt="University Logo" className="h-12 mr-2" />
        <div>
          <h1 className="text-lg">University of Sri Jayewardenepura</h1>
          <h2 className="text-sm">Medical Center</h2>
        </div>
      </div>
      <ul className="flex gap-10 flex-grow justify-center">
        <Link to={"/"}>
          <li className="hover:underline">Home</li>
        </Link>
        <Link to={"/about-us"}>
          <li className="hover:underline">About us</li>
        </Link>
        <Link to={"/ourstaff"}>
          <li className="hover:underline">Our Staff</li>
        </Link>
        <Link to={"/contact-us"}>
          <li className="hover:underline">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default UserNavbar;

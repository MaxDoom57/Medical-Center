import React from "react";
import logo from "../Resources/logo.png";

const Navbar = () => {
  return (
    <div className="flex p-2 items-center justify-between bg-red-800 text-white">
      <div className="flex gap-2 items-center justify-between">
        <img src={logo} alt="Logo" className="w-14 h-14" />
        <div className="w-fit ">
          <p className="text-2xl">Faculty Of Technology</p>
          <p className="text-sm font-light">
            University Of Sri Jayewardenepura
          </p>
        </div>
      </div>

      <div className="flex px-6 gap-10 align-middle justify-center w-fit mr-12 text-md font-semibold">
        <a href="www.google.com">Home</a>
        <a href="www.google.com">Facilities</a>
        <a href="www.google.com">Staff</a>
        <a href="www.google.com">Download</a>
        <a href="www.google.com">About</a>
      </div>
    </div>
  );
};

export default Navbar;

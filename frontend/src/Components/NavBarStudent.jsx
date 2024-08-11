import React, { useState } from "react";
import logo from "../Resources/logo.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-red-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and title */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-14 h-14" />
            <div className="ml-3">
              <p className="text-2xl font-bold">Faculty Of Technology</p>
              <p className="text-sm font-light">University Of Sri Jayewardenepura</p>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex -mr-2 sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon changes based on the state */}
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden font-bold sm:flex sm:items-center sm:space-x-10">
            <a href="www.google.com" className="hover:text-gray-300">
              Home
            </a>
            <a href="www.google.com" className="hover:text-gray-300">
              Facilities
            </a>
            <a href="www.google.com" className="hover:text-gray-300">
              Staff
            </a>
            <a href="www.google.com" className="hover:text-gray-300">
              Download
            </a>
            <a href="www.google.com" className="hover:text-gray-300">
              About
            </a>
            <div className="flex items-center px-2 py-1 space-x-4 cursor-pointer ...">
            <FaUserCircle className="text-2xl" />
            <div dir="ltr"><button className="ms-5 ... font-bold hover:text-gray-300">Log Out</button></div>
            
          </div>
            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="www.google.com"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-700 hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="www.google.com"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-700 hover:text-gray-300"
            >
              Facilities
            </a>
            <a
              href="www.google.com"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-700 hover:text-gray-300"
            >
              Staff
            </a>
            <a
              href="www.google.com"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-700 hover:text-gray-300"
            >
              Download
            </a>
            <a
              href="www.google.com"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-700 hover:text-gray-300"
            >
              About
            </a>
            <div className="flex items-center px-2 py-1 space-x-4 cursor-pointer ...">
            <FaUserCircle className="text-2xl" />
            <div dir="ltr"><button className="ms-2 ... font-bold  hover:text-gray-700">Log Out</button></div>
            
          </div>
            
            
          </div>
          
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import Navbar from "../Navbar/Navbar";
import home_image from "../../Resources/home_image.jpg";
import Footer from "../../Components/Footer";

const SiteHome = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 w-screen h-screen flex flex-col">
        <div className="bg-green-800 w-screen h-[700px] relative">
          <div>
            <img
              src={home_image}
              alt=""
              className="w-screen h-[700px] object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center text-white ml-12">
            <h2 className="text-2xl font-semibold text-shadow-md">
              University Of Sri Jayewardenepura
            </h2>
            <h1 className="text-8xl font-bold font-sans text-shadow-md">
              Medical Center
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 space-y-4">
          <span className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Doctor Not Available
          </span>
          <span className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Nurse Not Available
          </span>
        </div>

        <div className="border-2 border-black mt-8"></div>

        <Footer />
      </div>
    </div>
  );
};

export default SiteHome;

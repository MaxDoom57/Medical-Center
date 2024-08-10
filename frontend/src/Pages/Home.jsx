import React from "react";
import NavBar from "../Components/NavBar";
import home_image from "../Resources/home_image.jpg";
import image1 from "../Resources/image1.jpeg";
import GreenCard from "../Components/GreenCard";
import RedCard from "../Components/RedCard";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-blue-500 w-screen h-screen">
      <div className="w-screen">
        <NavBar />
      </div>

      <div className="bg-green-800 w-screen h-[700px] relative">
        <div>
          <img src={home_image} alt="" className="w-screen h-[700px]" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white ml-12">
          <h2 className="text-2xl font-semibold">
            University Of Sri Jayewardenepura
          </h2>
          <h1 className="text-8xl font-bold font-sans">Medical Center</h1>
        </div>
      </div>
      <div className="w-screen h-auto flex items-center justify-center gap-8">
        <GreenCard />
        <RedCard />
      </div>
      <div className="w-screen  p-10">
        <h1 className="text-xl text-center font-semibold leading-3 pb-6">
          MEDICAL CENTRE’S ACHIEVEMENT OF QUALITY MANAGEMENT CERTIFICATE FROM
          SRI LANKA STANDARDS INSTITUTE (SLSI)
        </h1>
        <p className="text-justify">
          University of Sri Jayawarenepura as a premier University in Sri Lanka
          has embarked on the mission of standardizing their Academic and Non
          academic services by International standards. As a first milestone of
          this mission, the Medical center of Sri Jayawarenepura University has
          obtained ISO 9001:2015 certification for their services. In the simple
          ceremony, to hand over the standardization certificate by Director
          General of Sri Lanka Standard Institute, Dr. Siddika Senarathne to the
          Vice chancellor of the University of Sri Jayawardenepura, Senior Prof.
          M.M. Padmalal, was held at the Senate board room of the University on
          8th August 2023. Addressing the gathering the Vice chancellor, Senior
          Prof M.M. Padmalal stated that the standardization of all the services
          of the University by International standards is one of his major
          objectives to be achieved during his teneure. The Dean Faculty of
          Applied Sciences, the Dean Faculty of Computing, the Registrar, Chief
          Medical officer, staff of the Medical centre, members of the Academic
          and Non-academic staff, Senior Manager and Systems Manager Information
          and Communications Agency in Sri Lanka (ICTA) were present on this
          occasion.
        </p>
      </div>
      <div className="flex grid-cols-2 items-center justify-center gap-8 p-10">
        <div className="w-[30%]">
          <img src={image1} alt="" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">
            Please contact Medical Center hotline for any health problem during
            office hours
          </h2>
          <h1 className="text-6xl m-8 font-bold">011 3413488</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

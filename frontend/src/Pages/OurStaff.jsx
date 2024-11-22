import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const OurStaff = () => {
  return (
    <>
      <Navbar />
      <div className="py-14 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
          <div className="sm:w-6/12 order-last sm:order-first">
            <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
              <li className="bg-gray-100 p-5 py-10 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_640.png"
                      alt="doctor"
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Dr. Chandana
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Doctor
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHUTCQ3Xt1rSMIGs9FJnUf1KwCrpZ25-FrA&s"
                      alt="nurse"
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Dr. Kumara
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Doctor
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="https://i.pravatar.cc/150?img=32"
                      alt="driver"
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Mr. Kamal
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Ambulance Driver
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="https://i.pravatar.cc/150?img=32"
                      alt="nurse"
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Miss. Githika
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Nurse
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
            <p className="mt-4 text-sm leading-7 text-red-700 font-regular">
              THE STAFF
            </p>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
              Meet Our <span className="text-red-700">STAFF</span>
            </h3>
            <p className="mt-4 text-md leading-7 text-black font-light">
              Our dedicated team at [Medical Center Name] is committed to
              providing compassionate and high-quality care to our community.
              Led by our experienced doctor, we deliver a full range of medical
              services tailored to meet each patient’s needs. Our skilled nurse
              ensures a comfortable, caring environment while assisting with
              patient care and procedures. Additionally, our trained ambulance
              driver is always ready to respond to emergencies swiftly and
              safely.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStaff;

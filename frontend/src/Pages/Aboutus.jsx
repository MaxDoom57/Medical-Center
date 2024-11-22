import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img
              src="https://www.sjp.ac.lk/wp-content/uploads/2020/07/medical-center-covid19-readiness.jpeg"
              alt="img"
            />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-red-700">Our Medical Center</span>
            </h2>
            <p class="text-gray-700">
              The University Medical Centre caters to the University community,
              including the students, staff and their families, free of charge,
              as the first contact and continuing care. The care is co-ordinated
              for secondary care with Colombo South Teaching Hospital. Health
              promotion is done for students and staff in order to maintain a
              healthy community. Our primary care staff managed by the Medical
              Officer in Charge, comprises of one doctors, 2 nurses, counselling
              doctor. In addition to the first contact care and continuing care,
              the health centre is responsible for the preventive care. The PHI
              department attached to the medical centre comprises of 2 PHIs and
              a support staff of 8 health workers.
              <br />
              <br />
              <p>
                We provide inpatient facility for students and staff during the
                daytime (8:30a.m.- 4:00p.m). Out of hours an ambulance is
                available for sick students to be transferred to Colombo South
                Teaching hospital.{" "}
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-black mt-8"></div>
      <Footer />
    </div>
  );
};

export default Aboutus;

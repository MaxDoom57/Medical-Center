import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserNavbar from "../Components/UserNavbar/UserNavbar";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [disease, setDisease] = useState("");
  const [medicines, setMedicines] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const displayPatientData = () => {
      const data = localStorage.getItem("patientFormData");
      if (data) {
        const parsedData = JSON.parse(data);
        console.log("Patient Form Data:", parsedData);
        setPatientData(parsedData);
      } else {
        console.log("No patientFormData found in local storage.");
        setPatientData(null);
      }
    };

    displayPatientData();
  }, []);

  const handleSelectClick = () => {
    setShowDetails(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handlePopupOk = async () => {
    try {
      // Prepare the medical history data
      const medicalHistoryData = {
        TEno: patientData.teNumber,
        name: patientData.name,
        disease,
        medicines,
        height: patientData.height,
        weight: patientData.weight,
        temperature: patientData.temperature,
      };

      // Send data to backend
      await axios.post(
        "http://localhost:5000/medical-history",
        medicalHistoryData
      );

      // Clear data and close popup
      localStorage.removeItem("patientFormData");
      setPatientData(null);
      setShowPopup(false);
      setDisease("");
      setMedicines("");
      navigate("/doctordashboard");
      window.location.reload();
    } catch (err) {
      console.error("Error saving medical history:", err);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="flex p-6 font-sans text-gray-800">
        {patientData ? (
          showDetails ? (
            <>
              <div className="w-1/2 p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
                <h1 className="text-3xl font-semibold text-blue-700 mb-6">
                  Patient Profile
                </h1>
                {patientData && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {patientData.name || "Patient Name"}
                    </h2>
                    <p className="text-sm text-gray-600">
                      TE Number: {patientData.teNumber || "TE Number"}
                    </p>
                    {Object.entries(patientData).map(([key, value]) => (
                      <div key={key} className="py-1">
                        <span className="font-semibold text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}:{" "}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-1/2 p-4 border border-gray-200 rounded-lg shadow-lg bg-white ml-4">
                <h1 className="text-3xl font-semibold text-blue-700 mb-6">
                  Add Treatment
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Disease
                    </label>
                    <input
                      type="text"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                      required
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Medicines
                    </label>
                    <textarea
                      value={medicines}
                      onChange={(e) => setMedicines(e.target.value)}
                      required
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="max-w-md mx-auto p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {patientData?.name || "Patient Name"}
                  </h2>
                  <p className="text-sm text-gray-600">
                    TE Number: {patientData?.teNumber || "TE Number"}
                  </p>
                </div>
                <button
                  onClick={handleSelectClick}
                  className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Select
                </button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Click "Select" to view more details.
                </p>
              </div>
            </div>
          )
        ) : (
          <p className="text-center text-gray-500">
            No patients in waiting list.
          </p>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Success!
            </h2>
            <p className="text-sm text-gray-700">
              Your submission has been completed successfully.
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handlePopupOk}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorDashboard;

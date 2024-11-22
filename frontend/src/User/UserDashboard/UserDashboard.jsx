import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import axios from "axios";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ fullName: "", TEno: "" });
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      fetchMedicalHistory(userData.TEno);
    }
  }, []);

  const fetchMedicalHistory = async (TEno) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/medical-history/${TEno}`
      );
      setMedicalHistory(response.data);
    } catch (error) {
      console.error("Error fetching medical history:", error);
    }
  };

  const handleRequestMedicalReport = () => {
    setShowPopup(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ytimg.com/vi/YjBnFNXIAOk/maxresdefault.jpg')",
          opacity: 0.4, // Set opacity of the background image
          zIndex: -1, // Ensure it's behind all content
        }}
      ></div>

      {/* Navbar remains unaffected by background image */}
      <UserNavbar />

      {/* Main content, ensures that background image stays behind */}
      <div className="grid grid-cols-2 gap-4 p-4 relative z-10">
        <div className="bg-blue-300 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="profile"
            className="w-36 h-36 rounded-full mb-2 "
          />
          <h1 className="text-4xl font-bold text-white capitalize">
            {user.fullName}
          </h1>
          <h3 className="text-md text-gray-100">{user.TEno}</h3>
          <br />
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
        <div className="bg-green-300 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            User Medical Details
          </h2>
          {medicalHistory.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Disease
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Medicines
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Height
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Weight
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Temperature
                  </th>
                </tr>
              </thead>
              <tbody>
                {medicalHistory.map((entry, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                      {entry.Disease}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                      {entry.Medicines}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                      {entry.height || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                      {entry.weight || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                      {entry.temperature || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">No medical history available.</p>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleRequestMedicalReport}
          className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
          Request Medical Report
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Request Sent</h2>
            <p className="mt-2">
              Your request for the medical report has been sent successfully.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;

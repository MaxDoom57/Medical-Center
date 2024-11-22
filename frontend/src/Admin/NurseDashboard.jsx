import React, { useState } from "react";
import UserNavbar from "../Components/UserNavbar/UserNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NurseDashboard = () => {
  const navigate = useNavigate();
  const [teNumber, setTeNumber] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    teNumber: "",
    name: "",
    weight: "",
    height: "",
    bodyTemperature: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Function to search user by TE number
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/register/user/${teNumber}`
      );
      if (response.data) {
        setUserProfile(response.data);
        setErrorMessage("");
      } else {
        setUserProfile(null);
        setErrorMessage("User not found");
      }
    } catch (error) {
      setUserProfile(null);
      setErrorMessage("Error fetching user. Please try again.");
    }
  };

  // Handle the selection of the user profile
  const handleSelect = () => {
    if (userProfile) {
      setForm({
        ...form,
        teNumber: userProfile.TEno,
        name: userProfile.fullName,
      });
    }
  };

  // Handle form submission for the patient form
  const handleFormSubmit = () => {
    if (!form.teNumber || !form.name) {
      alert("TE number and Name are required.");
      return;
    }
    // Save the form data to local storage
    localStorage.setItem("patientFormData", JSON.stringify(form));
    setShowSuccessPopup(true);
  };

  // Handle input changes for the patient form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle closing the success popup and redirecting
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    // Clear the form and search fields
    setTeNumber("");
    setUserProfile(null);
    setForm({
      teNumber: "",
      name: "",
      weight: "",
      height: "",
      bodyTemperature: "",
    });
    navigate("/nursedashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <UserNavbar />
      <h1 className="text-center text-2xl font-bold mt-6">
        Search for a Patient
      </h1>

      <div className="flex mt-8 px-6 gap-8">
        <div className="w-1/2">
          <div className="flex flex-col items-center mb-6">
            <input
              type="text"
              placeholder="Enter TE number"
              value={teNumber}
              onChange={(e) => setTeNumber(e.target.value)}
              className="p-2 text-lg border border-gray-300 rounded-md shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white text-lg rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Search
            </button>
          </div>

          <div className="flex flex-col items-center mt-6">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {userProfile && (
              <div className="relative bg-white p-4 rounded-md shadow-lg w-80">
                <h3 className="text-lg font-semibold text-gray-800">
                  User Profile
                </h3>
                <p className="mt-2">
                  <span className="font-bold">Name:</span>{" "}
                  {userProfile.fullName}
                </p>
                <p>
                  <span className="font-bold">TE Number:</span>{" "}
                  {userProfile.TEno}
                </p>

                <button
                  onClick={handleSelect}
                  className="absolute bottom-4 right-4 px-3 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none"
                >
                  Select
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/2 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Patient Form
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="teNumber"
              placeholder="TE Number (required)"
              value={form.teNumber}
              onChange={handleInputChange}
              required
              className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="name"
              placeholder="Name (required)"
              value={form.name}
              onChange={handleInputChange}
              required
              className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="weight"
              placeholder="Weight (optional)"
              value={form.weight}
              onChange={handleInputChange}
              className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="height"
              placeholder="Height (optional)"
              value={form.height}
              onChange={handleInputChange}
              className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="bodyTemperature"
              placeholder="Body Temperature (optional)"
              value={form.bodyTemperature}
              onChange={handleInputChange}
              className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleFormSubmit}
              className="px-4 py-2 bg-green-500 text-white text-lg rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mt-4"
            >
              Send for Doctor
            </button>
          </form>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg w-80">
            <h3 className="text-lg font-semibold text-gray-800">Success!</h3>
            <p className="mt-2 text-gray-600">
              Patient details have been sent successfully.
            </p>
            <button
              onClick={handlePopupClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NurseDashboard;

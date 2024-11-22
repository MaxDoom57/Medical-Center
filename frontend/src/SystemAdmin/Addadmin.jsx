import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const [admin, setAdmin] = useState({
    name: "",
    id: "",
    password: "",
    position: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
  };

  const validateInputs = () => {
    const newErrors = {};
    const idPattern = /^[a-zA-Z0-9]+$/;

    if (!admin.name) {
      newErrors.name = "Name is required.";
    }
    if (!idPattern.test(admin.id)) {
      newErrors.id = "ID must be alphanumeric.";
    }
    if (!admin.password) {
      newErrors.password = "Password is required.";
    }
    if (!admin.position) {
      newErrors.position = "Position is required.";
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (validateInputs()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/register/admin",
          {
            name: admin.name,
            id: admin.id,
            password: admin.password,
            position: admin.position,
          }
        );

        if (response.data.status === "Ok") {
          setShowPopup(true);
          setAdmin({
            name: "",
            id: "",
            password: "",
            position: "",
          });
        } else {
          setErrorMessage(response.data.message || "Failed to add admin.");
        }
      } catch (error) {
        console.error("Registration error:", error);
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/systemAdminDashboard");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Add Admin</h2>

          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={admin.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">ID</label>
            <input
              type="text"
              name="id"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={admin.id}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={admin.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={admin.position}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Admin
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <p className="mb-4 text-lg font-semibold">
              Admin added successfully!
            </p>
            <button
              onClick={handleClosePopup}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAdmin;

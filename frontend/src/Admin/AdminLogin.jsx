import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    id: "",
    password: "",
    role: "doctor",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5000/login/admin", {
        id: credentials.id,
        password: credentials.password,
      });

      if (response.data.status === "ok") {
        if (credentials.role === "doctor") {
          navigate("/DoctorDashboard");
        } else if (credentials.role === "nurse") {
          navigate("/NurseDashboard");
        }
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700">Admin ID</label>
            <input
              type="text"
              name="id"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={credentials.id}
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
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <p className="block text-gray-700 mb-2">Role</p>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="doctor"
                name="role"
                value="doctor"
                checked={credentials.role === "doctor"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="doctor" className="text-gray-700">
                I'm Doctor
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="nurse"
                name="role"
                value="nurse"
                checked={credentials.role === "nurse"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="nurse" className="text-gray-700">
                I'm Nurse
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white font-semibold p-2 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

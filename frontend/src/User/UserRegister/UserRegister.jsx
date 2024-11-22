import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserRegister = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    TEno: "",
    dob: "",
    password: "",
    phoneNumber: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const validateInputs = () => {
    const newErrors = {};
    const TEnoPattern = /^TE\d{6}$/;
    const namePattern = /^[A-Za-z\s]+$/;
    const phonePattern = /^\d{10}$/;

    if (!namePattern.test(user.fullName)) {
      newErrors.fullName = "Full Name can't have numbers or symbols.";
    }
    if (!TEnoPattern.test(user.TEno)) {
      newErrors.TEno = 'TE Number must start with "TE" followed by 6 digits.';
    }
    if (!phonePattern.test(user.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/register/user", {
        fullName: String(user.fullName),
        TEno: String(user.TEno),
        dob: String(user.dob),
        password: String(user.password),
        phoneNumber: String(user.phoneNumber),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      sendRequest()
        .then(() => {
          setShowPopup(true);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    history("/userlogin");
  };

  return (
    <div>
      <Navbar />

      <div className="relative flex justify-center items-center min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://i.ytimg.com/vi/YjBnFNXIAOk/maxresdefault.jpg')",
          }}
        ></div>

        <form
          className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              className={`mt-1 w-full p-2 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={user.fullName}
              onChange={handleInputChange}
              required
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">TE Number</label>
            <input
              type="text"
              name="TEno"
              className={`mt-1 w-full p-2 border ${
                errors.TEno ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={user.TEno}
              onChange={handleInputChange}
              required
            />
            {errors.TEno && <p className="text-red-500">{errors.TEno}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.dob}
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
              value={user.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              className={`mt-1 w-full p-2 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={user.phoneNumber}
              onChange={handleInputChange}
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white font-semibold p-2 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Register
          </button>

          <p className="text-center mt-4 text-gray-600">
            Do you have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <p className="mb-4 text-lg font-semibold">Register success</p>
            <button
              onClick={handleClosePopup}
              className="px-4 py-2 text-white bg-red-700 rounded hover:bg-yellow-500"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRegister;

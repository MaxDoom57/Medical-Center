import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const SystemAdminLogin = () => {
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validAdminID = "SAdmin";
    const validPassword = "admin123";

    if (adminID === validAdminID && password === validPassword) {
      setPopupMessage("Login successful!");
      setIsLoginSuccess(true);
    } else {
      setPopupMessage("Invalid credentials.");
      setIsLoginSuccess(false);
    }

    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    if (isLoginSuccess) {
      navigate("/systemadmindashboard");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {" "}
        <h2 className="text-2xl font-bold mb-6">System Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Admin ID:</label>
            <input
              type="text"
              value={adminID}
              onChange={(e) => setAdminID(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded hover:bg-yellow-500"
          >
            Login
          </button>
        </form>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <p className="mb-4">{popupMessage}</p>
              <button
                onClick={handlePopupClose}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SystemAdminLogin;

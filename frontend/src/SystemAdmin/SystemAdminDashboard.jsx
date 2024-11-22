import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const SystemAdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-2xl font-bold mb-4">System Admin</h1>
      </div>

      <div>
        <Link to={"/addadmin"}>
          <button className="m-4 w-48 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none">
            Add Admin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SystemAdminDashboard;

import React from "react";
import { Route, Routes } from "react-router";
import SiteHome from "./Components/SiteHome/SiteHome";
import UserRegister from "./User/UserRegister/UserRegister";
import UserLogin from "./User/UserLogin/UserLogin";
import Aboutus from "./Pages/Aboutus";
import OurStaff from "./Pages/OurStaff";
import ContactUs from "./Pages/ContactUs";
import UserDashboard from "./User/UserDashboard/UserDashboard";
import Login from "./Pages/Login";
import AdminLogin from "./Admin/AdminLogin";
import SystemAdminLogin from "./SystemAdmin/SystemAdminLogin";
import SystemAdminDashboard from "./SystemAdmin/SystemAdminDashboard";
import Addadmin from "./SystemAdmin/Addadmin";
import DoctorDashboard from "./Admin/DoctorDashboard";
import NurseDashboard from "./Admin/NurseDashboard";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<SiteHome />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/ourstaff" element={<OurStaff />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sitehome" element={<SiteHome />} />
          <Route path="/userregister" element={<UserRegister />} />

          <Route path="/userdashboard" element={<UserDashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/systemadminlogin" element={<SystemAdminLogin />} />
          <Route path="/addadmin" element={<Addadmin />} />
          <Route path="/addadmin" element={<Addadmin />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/nursedashboard" element={<NurseDashboard />} />

          <Route
            path="/systemadmindashboard"
            element={<SystemAdminDashboard />}
          />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

// Setup express & mongoose
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/Userroutes");

// Call register models
const User = require("./Models/UserRegister");
const Admin = require("./Models/AdminRegister");

const app = express();
const cors = require("cors");

// Connect middleware
app.use(express.json());
app.use(cors());
app.use(router);

// Connect to the database
mongoose
  .connect(
    "mongodb+srv://admin:NHBY8WN3Bmzt3dgT@medicalcenter.a7tsw.mongodb.net/medicalCenterDB" // Specify your database name here
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log(err));

// User Registration function
app.post("/register/user", async (req, res) => {
  const { fullName, TEno, password, dob, phoneNumber } = req.body;
  try {
    await User.create({
      fullName,
      TEno,
      password,
      dob,
      phoneNumber,
    });
    res.send({ status: "Ok" });
  } catch (err) {
    console.error(err);
    res.send({ status: "error", message: err.message });
  }
});

// Admin Registration function
app.post("/register/admin", async (req, res) => {
  const { name, id, password, position } = req.body;
  try {
    await Admin.create({
      name,
      id,
      password,
      position,
    });
    res.send({ status: "Ok" });
  } catch (err) {
    console.error("Admin Registration error:", err);
    res.send({ status: "error", message: err.message });
  }
});

// User Login function
app.post("/login/user", async (req, res) => {
  const { TEno, password } = req.body;
  try {
    const user = await User.findOne({ TEno });
    if (!user) {
      return res.status(404).json({ err: "User not found" });
    }
    if (user.password === password) {
      return res.json({
        status: "ok",
        user: { TEno: user.TEno, fullName: user.fullName },
      });
    } else {
      return res.status(401).json({ err: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err: "Server error" });
  }
});

// Admin Login function
app.post("/login/admin", async (req, res) => {
  const { id, password } = req.body;
  try {
    const admin = await Admin.findOne({ id });
    if (!admin) {
      return res.status(404).json({ err: "Admin not found" });
    }
    if (admin.password === password) {
      return res.json({ status: "ok", id: admin.id });
    } else {
      return res.status(401).json({ err: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err: "Server error" });
  }
});

// Get user by TE number
app.get("/register/user/:TEno", async (req, res) => {
  const { TEno } = req.params;
  try {
    const user = await User.findOne({ TEno });
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Import the MedicalHistory model
const MedicalHistory = require("./Models/MedicalHistory");

// Route to save medical history
app.post("/medical-history", async (req, res) => {
  const { TEno, name, disease, medicines, height, weight, temperature } =
    req.body;
  try {
    const newRecord = await MedicalHistory.create({
      TEno,
      name,
      Disease: disease,
      Medicines: medicines,
      height,
      weight,
      temperature,
    });
    res.status(201).json({ status: "ok", data: newRecord });
  } catch (err) {
    console.error("Error saving medical history:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Route to fetch medical history
app.get("/medical-history/:TEno", async (req, res) => {
  const { TEno } = req.params;
  try {
    const records = await MedicalHistory.find({ TEno });
    res.json(records);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

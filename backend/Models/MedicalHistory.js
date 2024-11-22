const mongoose = require("mongoose");

const medicalHistorySchema = new mongoose.Schema({
  TEno: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  Disease: {
    type: String,
    required: true,
  },
  Medicines: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  temperature: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("MedicalHistory", medicalHistorySchema);

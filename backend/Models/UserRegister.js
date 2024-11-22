const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  TEno: {
    type: String,
    required: true,
    unique: true, // TE Number is unique key
  },
  dob: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

//Export model
module.exports = mongoose.model(
  "Register", //filename
  registerSchema //function name
);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminregisterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  id: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  position: {
    type: String,
    required: true,
  },
});

//Export model
module.exports = mongoose.model(
  "admin", //filename
  adminregisterSchema //function name
);

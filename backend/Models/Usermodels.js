const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
});

//Export model
module.exports = mongoose.model(
  "User", //filename
  userSchema //function name
);

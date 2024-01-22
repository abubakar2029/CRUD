const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("User's Model", patientSchema);

module.exports = User;

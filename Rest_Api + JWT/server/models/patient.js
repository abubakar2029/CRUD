const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  medicalHistory: { type: String },
  day: { type: String },
  year: { type: String },
  month: { type: String },
});

const Patient = mongoose.model("Patient's Model", patientSchema);

module.exports = Patient;

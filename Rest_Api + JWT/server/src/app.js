const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Specifying path to .env
dotenv.config({ path: "./.env" });
const app = express();

/* Middleware */
app.use(express.json());

const mongoURI = process.env.MONGODB_URI;
// console.log("@ya mongo URI ha", mongoURI);

// Connect to MongoDB
async function connect() {
  try {
    // mongodb://localhost:27017
    await mongoose.connect("mongodb://localhost:27017");
    // await mongoose.connect(
    //   "mongodb+srv://abubakarzafar2029:Y0noD0InZeQBIqyO@cluster0.7qsjrih.mongodb.net/?retryWrites=true&w=majority"
    // );
    console.log("Connected to MongoDB Atlas!");
    // await Patient.create({ uname: "also_awesome", name: "Awais" });
  } catch (error) {
    console.log("Ya error aya", error);
  }
}
connect();

/* Patient Registration Endpoint */
// app.post("/register-patient", async (req, res) => {
//   try {
//     console.log("Patient ka ya data aya");
//     const newPatient = new Patient(req.body);
//     await newPatient.save();
//     res.status(201).json({ message: "Signup successful" });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get("/recordLao", async (req, res) => {
//   console.log("Request ma ya data aya", req.body);
//   try {
//     const patients = await Patient.find();
//     res.json(patients);
//   } catch (error) {
//     console.error("Error fetching patients:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

/* Serve Static Files (Assuming this is for a React app) */
// app.use(express.static("./build"));

const router = express.Router();
module.exports = router;
const usersRouter = require("./api/users"),
  indexRouter = require("./api/index");
app.use("/a", indexRouter);
app.use("/api/user", usersRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

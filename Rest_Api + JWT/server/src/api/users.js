var express = require("express");
const User = require("../models/User");
var router = express.Router();

router.post("/signup", async function (req, res) {
  const user = new User(req.body);
  const response = await user.save();
  console.log(" ");
  console.log("Ya reponse aya", response._id);
  res.send({ status: 200, user: "abc" });
});

module.exports = router;

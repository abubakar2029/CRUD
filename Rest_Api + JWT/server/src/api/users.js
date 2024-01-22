var express = require("express");
const User = require("../models/User");
var router = express.Router();
var jwt = require("jsonwebtoken");

router.post("/signup", async function (req, res) {
  const user = new User(req.body);
  console.log(req.body);
  const response = await user.save();
  let token = await jwt.sign(req.body, "secret");
  console.log(token);
  console.log(" ");
  console.log("Ya reponse aya", response._id);
  res.send({ status: 200, user: token });
});

module.exports = router;

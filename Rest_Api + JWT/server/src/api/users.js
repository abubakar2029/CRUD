var express = require("express");
const User = require("../models/User");
var router = express.Router();
var jwt = require("jsonwebtoken");

router.post("/signup", async function (req, res) {
  const user = new User(req.body);
  const response = await user.save();
  console.log("Ya reponse aya", response._id);
  let token = await jwt.sign(req.body, "secret");
  res.send({ status: 200, user: token });
});

module.exports = router;

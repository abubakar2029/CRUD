var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/b", function (req, res, next) {
  console.log("Requesting");
  res.status(200).json({
    version: "1.0",
  });
});

module.exports = router;

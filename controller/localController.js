var traveller = require("../models/traveller");
var local = require("../models/local");
// var geolocator = require("geolocator");
var express = require("express");
var router = express.Router();

var path = require("path");

// ================= HTML ROUTES =================

router.get("/", function(req, res) {
  res.render("login");
});

router.get("/home", function(req, res) {
  var userInfo = req.body;
  console.log(userInfo);
  res.render("home", userInfo);
});

router.post("/home", function(req, res) {
  var userInfo = req.body;
  console.log(userInfo);
  res.render("home", { user: userInfo });
});
router.get("/search", function(req, res) {
  var hbsobj = {
    name: name,
    address: address
  };
  res.render("search", hbsobj);
});

module.exports = router;

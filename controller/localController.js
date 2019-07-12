// Requiring npm modules
var mongoose = require("mongoose");
// var geolocator = require("geolocator");
var express = require("express");
var router = express.Router();

// Requiring the models
var Local = require("../models/local");
var Traveller = require("../models/traveller");

// requiring Path
var path = require("path");

// ================= HTML ROUTES =================
// This is the route to the homepage
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

// This is the login flow
router.get("/login", function(req, res) {
  res.sendFile(path.join("../views/index.html"));
});

// This is the registration flow
router.post("/registration", function(req, res) {
  var userInfo = req.body;
  console.log({ userInfo });
  Traveller.create(userInfo).then(function(response) {
    console.log(response);
  });
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;

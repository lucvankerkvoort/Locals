var traveller = require("../models/traveller");
var local = require("../models/local");
var geolocator = require("geolocator");
var express = require("express");
var router = express.Router();

var path = require("path");

// ================= HTML ROUTES =================

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/search", function(req, res) {
  var hbsobj = {
    name: name,
    address: address
  };
  res.render("search", hbsobj);
});

// We require the router
const router = require("express").Router();
// We require the object inside of index.js (we have to specifiy which controller we want to use by using the property name)
const controller = require("../../controller");

// Setup the routes for the  api's to hit

// We export the entire document
module.exports = router;

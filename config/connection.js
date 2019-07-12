// Mongoose is required
var mongoose = require("mongoose");

// A connection to the database is being made
mongoose.connect("mongodb://localhost/local", { useNewUrlParser: true });

// This document gets exported
module.exports = mongoose;

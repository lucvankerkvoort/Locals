// Require our NPM modules
var express = require("express");
var app = express();
var mongoose = require("mongoose");

// This is the Port we are listening at
var PORT = process.env.PORT || 8080;

// Middelware is used to make the public folder accessible from the server
app.use(express.static("public"));

// The parser is used to parse front-end data to a JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The localcontroller is getting required by the document and executed
var routes = require("./routes");
app.use(routes);

// We create a container that
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/local";

// A connection to the database is being made
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// We listen for the Port on the localhost
app.listen(PORT, function() {
  console.log("Server listening at localhost:" + PORT);
});

// Require our NPM modules
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

// This is the Port we are listening at
var PORT = process.env.PORT || 8080;

// Middelware is used to make the public folder accessible from the server
app.use(express.static("public"));

// The parser is used to parse front-end data to a JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars is set as the front-end engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// The localcontroller is getting required by the document and executed
var routes = require("./controller/localController");
app.use(routes);

// We listen for the Port on the localhost
app.listen(PORT, function() {
  console.log("Server listening at localhost:" + PORT);
});

// Here we setup the basics for our routes
// we start with requiring the NPM modules needed
const path = require("path");
const router = require("express").Router();
// we require the api routes
const apiRoutes = require("./api");

// We setup the basics for the api route
router.use("/api", apiRoutes);

router.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/public/index.html"));
});
// we export all the logic on this page and its underlaying components, in this case all of the api routes
module.exports = router;

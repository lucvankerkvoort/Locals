const router = require("express").Router();
const userRoutes = require("./user");

// User route
router.use("/user", userRoutes);

module.exports = router;

const router = require("express").Router();
const localRoutes = require("./locals");
const travellersRoutes = require("./travellers");

// Locals route
router.use("/locals", localRoutes);

// Travellers route
router.use("/traveller", travellersRoutes);

module.exports = router;

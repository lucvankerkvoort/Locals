// We require the router
const router = require("express").Router();
// We require the object inside of index.js (we have to specifiy which controller we want to use by using the property name)
const controller = require("../../controller");

// Setup the routes for the  api's to hit
router
  .route("/")
  .get(controller.localController.findAll)
  .post(controller.localController.create);

// Setup the routes for whenever we are passing through data
// Same as /api/locals/:id

router.route("/dates/:id").post(controller.localController.addAvailability);

router
  .route("/:id")
  .put(controller.localController.update)
  .get(controller.localController.findById)
  .delete(controller.localController.delete);
// We export the entire document

router
  .route("/login")
  .post(controller.localController.findByUsernameAndPassword);

router
  .route("/search")
  .post(controller.localController.findByAvailabilityAndPlace);

router.route("/removeDate/:id").post(controller.localController.deleteDate);

router
  .route("/removeBooking/:id")
  .post(controller.localController.deleteBooking);
module.exports = router;

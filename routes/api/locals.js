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
router
  .route("/:id")
  .put(controller.localController.update)
  .get(controller.localController.findById)
  .delete(controller.localController.delete);
// We export the entire document

router.route("/dates/:people").put(controller.localController.addAvailability);

router
  .route("/login")
  .post(controller.localController.findByUsernameAndPassword);

module.exports = router;

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
router
  .route("/:id")
  .get(controller.localController.findById)
  .put(controller.localController.update)
  .delete(controller.localController.delete);
// We export the entire document

router
  .route("/login")
  .post(controller.localController.findByUsernameAndPassword);

module.exports = router;

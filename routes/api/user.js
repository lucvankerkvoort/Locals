// We require the router
const router = require("express").Router();
// We require the object inside of index.js (we have to specifiy which controller we want to use by using the property name)
const controller = require("../../controller/UserController");

// Setup the routes for the  api's to hit
router.route("/").get(controller.findAll).post(controller.create);

router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.delete);

router.route("/removeInfo/:id").post(controller.deleteInfo);

router.route("/login").post(controller.findByUsernameAndPassword);

router
  .route("/info/:id")
  .post(controller.addInfo)
  .delete(controller.deleteInfo);

// We export the entire document
module.exports = router;

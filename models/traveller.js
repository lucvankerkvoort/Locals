// requiring mongoDB from the config folder
var mongoose = require("mongoose");

// using mongo's build in logic to create a schema constructor
var Schema = mongoose.Schema;

// The instance of the schema used for Travellers
var TravellerSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    validate: [
      function(input) {
        return input.length >= 8;
      },
      "Password is not long enough"
    ]
  },
  booking: { type: Array },
  type: { type: String, default: "traveller" }
});

// We use MongoDB's build in module to create a container so we can export the schema
var Traveller = mongoose.model("Traveller", TravellerSchema);

module.exports = Traveller;

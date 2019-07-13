// requiring mongoDB from the config folder
var mongoose = require("../config/connection");

// using mongo's build in logic to create a schema constructor
var Schema = mongoose.Schema;

// The instance of the schema used for Travellers
var TravellerSchema = new Schema({
  name: {
    type: String,
    required: "Name is Required"
  },
  username: {
    type: String,
    required: "Username is Required"
  },
  password: {
    type: String,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 8;
      },
      "Password is not long enough"
    ]
  }
});

// We use MongoDB's build in module to create a container so we can export the schema
var Traveller = mongoose.model("Traveller", TravellerSchema);

module.exports = Traveller;

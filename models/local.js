// requiring mongoDB from the config folder
var mongoose = require("mongoose");

// using mongo's build in logic to create a schema constructor
var Schema = mongoose.Schema;

// The schema instance used for Locals
var LocalSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    validation: [
      function(input) {
        return input.length >= 8 || input.length <= 20;
      },
      "Password is not long enough"
    ]
  },
  address: {
    street: {
      type: String,
      trim: true,
      required: true
    },
    postal: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  booking: { type: Array },
  availability: { type: Array },
  type: { type: String, default: "Local" }
});

// We use MongoDB's build in module to create a container so we can export the schema
var Local = mongoose.model("Local", LocalSchema);

module.exports = Local;

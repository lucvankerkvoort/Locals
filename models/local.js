// requiring mongoDB from the config folder
var mongoose = require("../config/connection");

// using mongo's build in logic to create a schema constructor
var Schema = mongoose.Schema;

// The schema instance used for Locals
var LocalSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "String is required"
  },
  password: {
    type: String,
    required: "String is required"
  },
  Address: {
    street: {
      type: String,
      trim: true
    },
    postal: {
      type: Number,
      required: "String is Required"
    },
    city: {
      type: String,
      required: "String is Required"
    }
  }
});

// We use MongoDB's build in module to create a container so we can export the schema
var Local = mongoose.model("Local", LocalSchema);

module.exports = Local;

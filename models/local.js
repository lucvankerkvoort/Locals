// requiring mongoDB from the config folder
var mongoose = require("mongoose");

// using mongo's build in logic to create a schema constructor
var Schema = mongoose.Schema;

// The schema instance used for Locals
var LocalSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  lastname: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  avatar: {
    type: String
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
  city: {
    type: String,
    trim: true,
    required: true
  },
  booking: { type: Array },
  availability: [
    {
      dateStart: Date,
      dateEnd: Date
    }
  ],
  bio: { type: String },
  tourInfo: { type: String },
  type: { type: String, default: "Local" },
  rating: { type: Number, default: 5.0 },
  completedtours: { type: Number, default: 0 }
});

// We use MongoDB's build in module to create a container so we can export the schema
var Local = mongoose.model("Local", LocalSchema);

module.exports = Local;

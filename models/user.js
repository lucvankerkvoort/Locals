// requiring mongoDB from the config folder
const mongoose = require("mongoose");

// using mongo's build in logic to create a schema constructor
const Schema = mongoose.Schema;

// The instance of the schema used for Travellers
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate: [
      function (input) {
        return input.length >= 8 && input.length <= 20;
      },
      "Password is not long enough",
    ],
  },
  city: {
    type: String,
    trim: true,
  },
  booking: { type: Array },
  availability: { type: Array },
  routes: { type: Array },
});
console.log(UserSchema);
// We use MongoDB's build in module to create a container so we can export the schema
const User = mongoose.model("User", UserSchema);
console.log(User);

module.exports = User;

// We require the module from the models
const db = require("../models");

// we export the entire module which will hold our CRUD (create, read, update and delete) methods for the database collection at hand this will hold the Travellers collection
module.exports = {
  // we create the create method to store data into the database
  create: function(req, res) {
    console.log(req.body);
    db.Traveller.create(req.body).then(dbModel => res.json(dbModel));
    // Here we will use mongo's queries and the schema's we setup to add data to the database
  },
  // we create the read method, possibly split into different options (findAll, findById, findByAddress)
  findAll: function(req, res) {
    db.Traveller.find({})
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here we will use mongo's queries to itterate through the database to retrieve data
  },
  findById: function(req, res) {
    db.Traveller.find({ _id: req.params.id })
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here  we will use mongo's queries to itterate through the database to retrieve data based of off the documents id
  },
  findByUsernameAndPassword: function(req, res) {
    console.log(req.body);
    db.Traveller.find(
      { username: req.body.username },
      { password: req.body.password }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => json(err));
  },
  // we create the update method to update certain documents in the collection
  update: function(req, res) {
    db.Traveller.findOneAndUpdate({ _id: req.params.id }, req.body)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here we will use mongo's queries to find a specific document and update it with users input on the front-end
  },
  addBooking: function(req, res) {
    console.log("Add Booking", req.body);
    db.Traveller.findOneAndUpdate(
      {
        _id: req.params.id
      },
      { $push: { booking: { id: req.body } } }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  // we create a delete method, to remove data we will not need anymore
  delete: function(req, res) {
    db.Traveller.findByIdAndDelete({ _id: req.params.id })
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here we will use mongo's queries to find a specific document and delete it from the database
  }
};

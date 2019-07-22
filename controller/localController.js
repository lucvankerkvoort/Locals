// We require the NPM Modules needed to setup the controller/ORM
const db = require("../models");

// we export the entire module which will hold our CRUD (create, read, update and delete) methods for the database collection at hand this will hold the locals collection
module.exports = {
  // we create the create method to store data into the database
  create: function(req, res) {
    db.local
      .create(req.body)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // Here we will use mongo's queries and the schema's we setup to add data to the database
  },
  // we create the read method, possibly split into different options (findAll, findById, findByAddress)
  findAll: function(req, res) {
    db.local
      .find({})
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here we will use mongo's queries to itterate through the database to retrieve data
  },
  findById: function(req, res) {
    db.local
      .find({ _id: req.params.id })
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here  we will use mongo's queries to itterate through the database to retrieve data based of off the documents id
  },
  // we create the update method to update certain documents in the collection
  update: function(req, res) {
    db.local
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here we will use mongo's queries to find a specific document and update it with users input on the front-end
  },
  // we create a delete method, to remove data we will not need anymore
  delete: function(req, res) {
    db.local
      .findByIdAndDelete({ _id: req.params.id })
      .then(dbModel => res.json(dbModel));
    // here we will use mongo's queries to find a specific document and delete it from the database
  }
};

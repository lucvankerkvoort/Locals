// We require the NPM Modules needed to setup the controller/ORM
const db = require("../models");

// we export the entire module which will hold our CRUD (create, read, update and delete) methods for the database collection at hand this will hold the locals collection
module.exports = {
  // we create the create method to store data into the database
  create: function(req, res) {
    console.log("Create");
    db.Local.create(req.body).then(dbModel => res.json(dbModel));
    // Here we will use mongo's queries and the schema's we setup to add data to the database
  },
  // we create the read method, possibly split into different options (findAll, findById, findByAddress)
  findAll: function(req, res) {
    console.log("Find All");
    db.Local.find({})
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(500).json(err));
    // here we will use mongo's queries to itterate through the database to retrieve data
  },
  findById: function(req, res) {
    console.log("check me", req.params.id, "data", req.body);
    db.Local.find({ _id: req.params.id })
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here  we will use mongo's queries to itterate through the database to retrieve data based of off the documents id
  },
  findByUsernameAndPassword: function(req, res) {
    console.log("Find By Username And Password");
    db.Local.find(
      { username: req.body.username },
      { password: req.body.password }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => json(err));
  },
  findByAvailabilityAndPlace: function(req, res) {
    console.log("Find By Availability And Place");
    db.Local.find({ city: req.body.city })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  // we create the update method to update certain documents in the collection
  update: function(req, res) {
    console.log("hello");
    db.Local.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    })
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel));
    // here we will use mongo's queries to find a specific document and update it with users input on the front-end
  },
  addAvailability: function(req, res) {
    console.log(
      "id",
      req.params.id,
      "reqbody1",
      req.body.startdate,
      "reqbody2",
      req.body.enddate
    );
    db.Local.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          availability: {
            dateStart: req.body.startdate,
            dateEnd: req.body.enddate
          }
        }
      },
      { upsert: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  // we create a delete method, to remove data we will not need anymore
  delete: function(req, res) {
    console.log("Delete");
    db.Local.findByIdAndDelete({ _id: req.params.id }).then(dbModel =>
      res.json(dbModel)
    );
    // here we will use mongo's queries to find a specific document and delete it from the database
  },
  deleteFieldValue: function(req, res) {
    console.log("Delete Field Value", req.params.id, req.body);
    db.Local.update(
      { _id: req.params.id },
      {
        availability: { $pullAll: { _id: req.body } }
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};

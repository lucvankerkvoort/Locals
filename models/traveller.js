var orm = require("../config/orm");

var traveller = {
  create: function(col, val, cb) {
    orm.create("traveller", col, val, function(res) {
      cb(res);
    });
  },
  read: function(cb) {
    orm.read("traveller", function(res) {
      cb(res);
    });
  },
  update: function(input, val, cb) {
    orm.update("traveller", input, val, function(res) {
      cb(res);
    });
  }
};

module.exports = traveller;

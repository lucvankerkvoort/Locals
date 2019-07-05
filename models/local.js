var orm = require("../config/orm");

var local = {
  create: function(col, val, cb) {
    orm.create("local", col, val, function(res) {
      cb(res);
    });
  },
  read: function(cb) {
    orm.read("local", function(res) {
      cb(res);
    });
  },
  update: function(input, val, cb) {
    orm.update("local", input, val, function(res) {
      cb(res);
    });
  }
};

module.exports = local;

var connection = require("./connection.js");

function printQuestionMarks(num) {
  // create an empty array
  var arr = [];

  // We count the amount of ? we will need for a SQL query
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  // We create a string out of the array
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = +"''" + value + "''";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + " = " + "'" + value + "'");
      console.log(arr);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//  We create an object with methods to do our SQL injections
var orm = {
  // The first method is read, which we will use to read a table in the database
  read: function(table, cb) {
    // We create our query with a parameter of table which will be inputted in the model
    var queryString = "SELECT * FROM " + table;
    console.log(queryString);
    // We run the query and store the result it into a callback function
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // The second method is the create function which inputs new data into the database
  create: function(table, col, val, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += col.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(val.length);
    queryString += ") ";

    console.log(queryString);
    connection.query(queryString, val, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // The last method is the update method where we update values inside the database
  update: function(table, input, val, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(input);
    queryString += " WHERE ";
    queryString += val;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// We make the ORM object available for other files to require
module.exports = orm;

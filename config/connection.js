var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "tranquil_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("you are connected through " + connection.threadId);
});

module.exports = connection;

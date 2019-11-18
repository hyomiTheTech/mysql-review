const mysql = require("mysql");

// TODO: establish connection
var db = mysql.createConnection({
  user: "root",
  password: "",
  database: "ReviewDb"
});

db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected to DB");
});

module.exports = db;

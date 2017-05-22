//setup mysql

//module.exports = function(connection) { code below }
//exports.connection = mysql.create...

var mysql=require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "mysql11",
  database: "projects_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

module.exports = connection;
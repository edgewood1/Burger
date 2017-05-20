//setup mysql

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql11",
  database: "wishes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});
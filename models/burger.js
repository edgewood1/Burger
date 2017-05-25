

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var project = {
  selectAll: function(cb) {
    orm.selectAll("projects", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("projects", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("projects", objColVals, condition, function(res) {
      cb(res);
    });
  }, 
  delete: function(condition, cb) {
    orm.delete("projects", condition, function(res) {
      cb(res);
    });
  }
}; // end project 

// Export the database functions for the controller (catsController.js).
module.exports = project;




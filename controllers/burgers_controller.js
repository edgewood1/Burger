var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var project = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  project.selectAll(function(data) {
    var hbsObject = {
      projects: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {

  project.insertOne([
    "project_name", "completed"
  ], [
    req.body.project_name, req.body.completed
  ], function() {
    res.redirect("/");
  });

});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  project.update({
    completed: req.body.completed
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " +req.params.id;

  project.delete(condition, function() {res.redirect("/");
});
}); //delete ends
     

// Export routes for server.js to use.
module.exports = router;
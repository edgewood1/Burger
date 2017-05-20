// load dependencies 

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");


// middleware setup

var port=3000;
var app=express();


//all our static (html, css, js files) can be found in the public folder
app.use(express.static(__dirname +"/public"));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//aply handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



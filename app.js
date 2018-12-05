var express = require("express");
var app = express();
var mongoose = require("mongoose");
var dotenv = require("dotenv").config();
var site = require("./site");

mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.DB_URL);

app.set("view engine", "ejs");

// General
app.get("/", site.index);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The zjeby-js server has started!"); 
});
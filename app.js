var express  = require("express"),
    app      = express(),
    mongoose = require("mongoose"),
    dotenv   = require("dotenv").config(),
    site     = require("./site");

mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.DB_URL);

app.set("view engine", "ejs");

// General
app.get("/", site.index);
app.get("/about", site.about);
app.get("/pricing", site.pricing);
app.get("/reviews", site.reviews);
app.get("/careers", site.careers);
app.get("/contacts", site.contacts);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The sofl-js server has started!"); 
});
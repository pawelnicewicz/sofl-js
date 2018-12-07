var express  = require("express"),
    app      = express(),
    mongoose = require("mongoose"),
    dotenv   = require("dotenv").config(),
    path     = require("path"),
    site     = require("./site");

mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.DB_URL);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

// General
app.get("/", site.index);
app.get("/about", site.about);
app.get("/pricing", site.pricing);
app.get("/reviews", site.reviews);
app.get("/careers", site.careers);
app.get("/contact", site.contact);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The sofl-js server has started!"); 
});
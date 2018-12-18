const passport      = require("passport"),
      LocalStrategy = require("passport-local"),
      User          = require("../models/userModel");
      
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.registerForm = function(req, res){
  res.render("user/register");
};

exports.register = function(req, res){
  var newUser = new User({email: req.body.email});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return req.render("user/register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/");
    });
  });
};

exports.loginForm = function(req, res){
  res.render("user/login");
};

exports.login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}), function(req, res){};
  
exports.logout = function(req, res){
  req.logout();
  res.redirect("/");
};

exports.isLoggedIn = function(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
};

exports.showLogout = function(req, res, next){
  if(req.user == null){
    res.locals.showLogout = false;
    next();
  }
  else{
    res.locals.showLogout = true;
    next();
  }
};
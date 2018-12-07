exports.index = function(req, res){
  res.render("homepage/index");
}; 

exports.about = function(req, res){
  res.render("homepage/about");
};

exports.pricing = function(req, res){
  res.render("homepage/pricing");
};

exports.reviews = function(req, res){
  res.render("homepage/reviews");
};

exports.careers = function(req, res){
  res.render("homepage/careers");
};

exports.contact = function(req, res){
  res.render("homepage/contact");
};
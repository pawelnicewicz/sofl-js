exports.index = function(req, res){
  res.render("index", { description: "description" });
}; 


exports.about = function(req, res){
  res.render("about", { description: "description" });
};

exports.pricing = function(req, res){
  res.render("pricing", { description: "description" });
};

exports.reviews = function(req, res){
  res.render("reviews", { description: "description" });
};

exports.careers = function(req, res){
  res.render("careers", { description: "description" });
};

exports.contact = function(req, res){
  res.render("contact", { description: "description" });
};
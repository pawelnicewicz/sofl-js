const nodeMailer = require("nodemailer"),
      bodyParser = require("body-parser"),
      sendMail  = require("../helpers/sendMail");

exports.index = function(req, res){
  res.render("homepage/index");
}; 

exports.careers = function(req, res){
  res.render("homepage/careers");
};

exports.courseRequest = function(req, res){
  let transporter = nodeMailer.createTransport({
    host: 'smtp.wp.pl',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASS
    }
  });
  
  let mailOptions = {
    from: process.env.MAIL_USERNAME, // sender address
    to: process.env.MAIL_USERNAME, // list of receivers
    subject: "Pytanie o kurs.", // Subject line
    html: "Name: " + req.body.name + "<br>Email: " + req.body.email + "<br>Phone: " + req.body.phone + "<br>Message: " + req.body.message
  };
  if(sendMail(transporter, mailOptions, req.body.email)){
    res.redirect("/");
  }
  else{
   console.log(req.body);
   res.redirect("/pricing"); 
  }
};
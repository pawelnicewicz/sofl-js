const nodeMailer = require('nodemailer'),
      bodyParser = require('body-parser'),
      validator = require("email-validator");

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

        
        //SEND MAIL//
exports.sendMail = function(req, res){
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
          html: "Email: " + req.body.email + "<br>Message: " + req.body.message
      };
      
      SendEmail(mailOptions, req.body.email)
      
          
          function SendEmail(mailOptions, email){
          if(validator.validate(email))
           {
             transporter.sendMail(mailOptions, (error, info) => {
           if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.redirect("/");
          });
           }
          else {res.redirect("/pricing");
          return console.log('Email is not valid');}
                                                  }
      
};
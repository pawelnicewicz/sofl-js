const express  = require("express"),
      app      = express(),
      mongoose = require("mongoose"),
      dotenv   = require("dotenv").config(),
      path     = require("path"),
      site     = require("./site"),
      nodeMailer = require('nodemailer'),
      bodyParser = require('body-parser');
    

mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.DB_URL);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// General
app.get("/", site.index);
app.get("/about", site.about);
app.get("/pricing", site.pricing);
app.get("/reviews", site.reviews);
app.get("/careers", site.careers);
app.get("/contact", site.contact);

app.post('/send-email', function (req, res) {
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
        //text: "Email: " + req.body.email + "Message: " + req.body.message //, // plain text body
          html: "Email: " + req.body.email + "<br>Message: " + req.body.message
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.redirect("/");
          });
      });
      

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The sofl-js server has started!"); 
});

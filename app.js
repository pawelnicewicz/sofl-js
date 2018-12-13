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
              user: 'banan541@wp.pl',
              pass: 'projekt1234'
          }
      });

 let mailOptions = {
          from: '"Michał Banaszek" <banan541@wp.pl>', // sender address
          to: 'banan541@wp.pl', // list of receivers
          subject: "Pytanie o kurs.", // Subject line
          text: req.body.message, // plain text body
          //html: '' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.redirect(200, "/");
          });
      });
      

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The sofl-js server has started!"); 
});

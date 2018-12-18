const nodeMailer = require("nodemailer"),
      validator  = require("email-validator");

module.exports = function(transporter, mailOptions, email){
  if(validator.validate(email)) {
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    });
    return true;
  }
  else {
    console.log('Email is not valid');
    return false;
  }
};
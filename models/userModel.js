const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  student: { type: Boolean, default: false },
  teacher: { type: Boolean, default: false },
  admin:   { type: Boolean, default: false }
});

UserSchema.plugin(passportLocalMongoose, { usernameField : 'email' });

module.exports = mongoose.model("User", UserSchema);
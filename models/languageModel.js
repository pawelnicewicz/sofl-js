const mongoose = require("mongoose");

var LanguageSchema = new mongoose.Schema({
  name: String,
  introduced: {type: Date, default: Date.now}
});


module.exports = mongoose.model("Language", LanguageSchema);
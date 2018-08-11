var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
}); 



//this take our passportlocalmongoose we required and it adds a bunch of methods to our user schema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
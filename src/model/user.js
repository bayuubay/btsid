const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  phone:String,
  country: String,
  city:String,
  postcode:Number,
  name:String,
  address:String
});

const User = mongoose.model("users", UserSchema);
module.exports = User;

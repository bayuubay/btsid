const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoppingSchema = new Schema({
 name:String,
 createddate:String,
});

const Shopping = mongoose.model("shopping", ShoppingSchema);
module.exports = Shopping;

const mongoose = require("mongoose");
require('dotenv').config()

function mongoConnect() {
  mongoose.connect(`${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

module.exports = mongoConnect();

const User = require("../model/user");
const jwt = require("jsonwebtoken");
require('dotenv').config()
module.exports = function tokenAuth(req, res, next) {
  let statusCode = 500;
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.SALT_KEY);
    res.locals.users = verifyToken;
    if (!token) {
      throw new Error("please login first");
    }
    next();
  } catch (error) {
    console.log(error);
    statusCode = 401;
    res
      .status(statusCode)
      .json({ message: error.message, code: statusCode, success: false });
  }
};

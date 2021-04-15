const User = require("../model/user");
const bcrypt = require("bcryptjs");
module.exports = async function loginAuth(req, res, next) {
  const { email, password } = req.body;
  let statusCode = 500;
  try {
    if (!email) {
      statusCode = 400;
      throw new Error("Email cannot be empty");
    }
    const checkEmail = await User.findOne({ email: email });
    if (!checkEmail) {
      statusCode = 404;
      throw new Error("Email is not exist");
    }

    const isPasswordMatch = await bcrypt.compare(password, checkEmail.password);
    if (!isPasswordMatch) {
      statusCode = 400;
      throw new Error("invalid password");
    }
    next();
  } catch (error) {
    console.log(error);
    res
      .status(statusCode)
      .json({ message: error.message, code: statusCode, success: false });
  }
};

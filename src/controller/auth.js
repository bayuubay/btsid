const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()
class AuthController {

  //register
  async signUp(req, res) {
    try {
      const {
        username,
        email,
        password,
        phone,
        address,
        city,
        country,
        name,
        postcode,
      } = req.body;
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);

      const payload = {
        username: username,
        email: email,
        password: encryptedPassword,
        salt: salt,
        phone: phone,
        address: address,
        city: city,
        country: country,
        name: name,
        postcode: postcode,
      };

      const newUser = await User.create(payload);
      console.log(newUser);
      return res.json({ message: "success", code: 201, result: newUser });
    } catch (error) {
      console.log(error);
    }
  }
  async signin(req, res) {
    try {
      const { email } = req.body;
      const userExist = await User.findOne({ email: email });
      const token = await jwt.sign(userExist.toJSON(), process.env.SALT_KEY);

      return res.json({
        message: "success",
        code: 200,
        email: email,
        token: token,
        username: userExist.username,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Object.freeze(new AuthController());

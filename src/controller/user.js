const User = require("../model/user");

class UserController {
  async getAllUser(req, res) {
    const dataUser = await User.find();
    return res.json({ message: "success", code: 200, result: dataUser });
  }
}

module.exports = Object.freeze(new UserController());

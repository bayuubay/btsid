const Shopping = require("../model/shopping");

class ShoppingController {
  async createNew(req, res) {
    try {
      const { name, createddate } = req.body;
      const payload = {
        name: name,
        createddate: createddate,
      };
      const newShopping = await Shopping.create(payload);

      return res.json({
        message: "success",
        code: 201,
        result: newShopping,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllShopping(req, res) {
    try {
      const shoppingData = await Shopping.find();
      return res.json({
        message: "success",
        code: 201,
        result: shoppingData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getShoppingById(req, res) {
    try {
      const { id } = req.params;
      const shoppingData = await Shopping.findOne({ _id: id });
      return res.json({
        message: "success",
        code: 201,
        result: shoppingData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateShopping(req, res) {
    try {
      const { id } = req.params;
      const { createddate, name } = req.body;
      const payload = {
        createddate: createddate,
        name: name,
      };
      await Shopping.updateOne({ _id: id }, payload);

      return res.json({
        message: "success",
        code: 201,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteShopping(req, res) {
    try {
      const { id } = req.params;
      await Shopping.deleteOne({ _id: id });
      return res.json({
        message: "success",
        code: 201,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Object.freeze(new ShoppingController());

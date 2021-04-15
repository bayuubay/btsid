const router = require("express").Router();
const Controller = require("./controller");

const loginMiddleware = require("./middleware/login");
const tokenMiddleware = require("./middleware/auth");
module.exports = function routes() {
    //auth
  router.post("/users/signup", Controller.auth().signUp);
  router.post("/users/signin", loginMiddleware, Controller.auth().signin);
    //user
  router.get("/users", tokenMiddleware, Controller.user().getAllUser);
    //shopping
  router.post("/shopping", tokenMiddleware, Controller.shopping().createNew);
  router.get(
    "/shopping",
    tokenMiddleware,
    Controller.shopping().getAllShopping
  );
  router.get(
    "/shopping/:id",
    tokenMiddleware,
    Controller.shopping().getShoppingById
  );
  router.put(
    "/shopping/:id",
    tokenMiddleware,
    Controller.shopping().updateShopping
  );
  router.delete(
    "/shopping/:id",
    tokenMiddleware,
    Controller.shopping().deleteShopping
  );
  return router;
};

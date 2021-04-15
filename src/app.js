const express = require("express");

const routes = require("./routes");
module.exports = function mainApp(port) {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", routes());

  app.listen(port, () => console.log(`app run at port: ${port}`));
};

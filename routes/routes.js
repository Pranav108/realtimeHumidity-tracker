const route = require("express").Router();
const dataOperation = require("../database");

route.post("/addData", (req, res) => {
  dataOperation.addData(req.body, res);
});

route.get("/getAllData", (req, res) => {
  dataOperation.getAllData(res);
});

module.exports = route;

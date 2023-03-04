const routers = require("express").Router();
const controller = require("../controllers/controller");

routers.get("/hello", controller);

module.exports = routers;

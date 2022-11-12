const { createuser, getuser, login } = require("../controller/UserController");

const routers = require("express").Router();

routers.get("/users", getuser);
routers.post("/signup", createuser);
routers.post("/login", login);


module.exports = routers;

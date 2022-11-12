const { addProduct,  Products } = require("../Controller/ProductController");

const routers = require("express").Router();

routers.get("/products", Products);
routers.post("/product", addProduct);

module.exports = routers;

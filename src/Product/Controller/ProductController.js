const Model = require("../Model/ProductModel");
const addProduct = async (req, res) => {
    // console.log('req', req.body);
    const product = await Model.create(req.body);
    console.log('product', product);
    res.status(200).json({
      product,
    });
};
const Products = async (req, res) => {
  const products = await Model.find();
  console.log('products', products);
  res.status(200).json({
    products,
  });
};
module.exports = { addProduct, Products };






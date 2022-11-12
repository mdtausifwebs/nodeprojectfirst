const jwt = require("jsonwebtoken");
require("dotenv").config();

const newtoken = (user) => {
  return jwt.sign({ user }, process.env.PASSKEY);
};
module.exports = newtoken;

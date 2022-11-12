const Usermodel = require("../module/UserModel");
const newtoken = require("../../utils/Token");
const getuser = async (req, res) => {
  const users = await Usermodel.find();
  res.status(200).json({
    users,
  });
};
const createuser = async (req, res) => {
  let user = await Usermodel.findOne({ email: req.body.email });
  if (user) {
    return res.status(201).json({
      error: "email already registered please try another email",
    });
  }
  

  
  user = await Usermodel.create(req.body);
  const token = newtoken(user);
  return res.status(200).json({
    token:token,
  });
};
const login = async (req, res) => {
  let user = await Usermodel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(201).json({
      error: "Please type correct email or password",
    });
  }
  const match = user.matchPassword(req.body.password);
  if (!match) {
    return res.status(201).json({
      error: "Please check email or password",
    });
  }
  const token = newtoken(user);
  return res.status(200).json({
    token:token,
  });
};
module.exports = { createuser, getuser, login };

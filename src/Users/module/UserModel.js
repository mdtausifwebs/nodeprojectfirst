const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Usermodel = new mongoose.Schema(
  {
    username:String,
    mobile:Number,
    email: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
Usermodel.pre("save", function (next) {
  let hash = bcrypt.hashSync(this.password, 9);
  this.password = hash;
  next();
});
Usermodel.methods.matchPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("userlist", Usermodel);

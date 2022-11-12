const mongoose = require("mongoose");

const dbs = () => {
  mongoose
    .connect(process.env.DBURL)
    .then((data) => {
      console.log(`db connect ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`not connect db ${err}`);
    });
};
module.exports = dbs;

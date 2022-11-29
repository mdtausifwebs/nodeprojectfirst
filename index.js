const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const dbs = require("./db/dbs");
const userRouters = require("./src/Users/routes/userRoute");
const productRoutes = require("./src/Product/Routes/ProductRoute");
const userdata = require("./src/Formdata/Router");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/api", userRouters);
app.use("/api", productRoutes);
app.use("/api", userdata);

app.listen(process.env.PORT, () => {
  try {
    dbs();
    console.log(`server is running on http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.log(`server is running error ${err}`);
  }
});

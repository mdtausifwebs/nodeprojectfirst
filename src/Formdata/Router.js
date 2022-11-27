const { adddata, getdata } = require("./Controller");

const express = require("express");
const router = express.Router();

router.post("/data", adddata);
router.get("/data", getdata);
module.exports = router;

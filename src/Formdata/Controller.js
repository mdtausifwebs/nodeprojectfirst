const Datamodel = require("./Model");
exports.adddata = async (req, res) => {
  try {
    const data = await Datamodel.create(req.body);
    if (!data) {
      return res.status(404).json({
        success: false,
        massage: "your data not valide",
      });
    }
    res.status(201).json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      massage: err.massage,
    });
  }
};
exports.getdata = async (req, res) => {
  try {
    const data = await Datamodel.find();
    if (!data) {
      return res.status(404).json({
        success: false,
        massage: "your data not valide",
      });
    }
    res.status(201).json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      massage: err.massage,
    });
  }
};

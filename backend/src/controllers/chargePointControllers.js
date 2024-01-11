const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const chargePoint = await tables.charge_point.readAll();

    res.json(chargePoint);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};

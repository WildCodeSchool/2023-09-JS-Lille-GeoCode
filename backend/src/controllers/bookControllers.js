const tables = require("../tables");

const booking = async (req, res) => {
  const { date, chargePointId, carId } = req.body;

  try {
    const insertId = await tables.booking_list.create(
      date,
      chargePointId,
      carId
    );
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { booking };

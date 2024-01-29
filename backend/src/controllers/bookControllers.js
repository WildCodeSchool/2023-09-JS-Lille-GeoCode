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

const browse = async (req, res) => {
  try {
    const bookAvailable = await tables.booking_list.getAll();

    res.json(bookAvailable);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  browse,
  booking,
};

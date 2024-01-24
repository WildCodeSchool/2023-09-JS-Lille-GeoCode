const tables = require("../tables");

const createCar = async (req, res) => {
  const { carType, userId } = req.body;
  try {
    const insertId = await tables.car.create(carType, userId);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
  }
};

const deleteCar = async (req, res) => {
  const { carId } = req.body;
  try {
    const deleteId = await tables.car.delete(carId);
    res.status(201).json({ deleteId });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { createCar, deleteCar };

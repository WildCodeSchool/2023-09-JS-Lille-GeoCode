const tables = require("../tables");

const createCar = async (req, res) => {
  const selectedCar = req.body;
  const userId = req.idUser;
  try {
    const insertId = await tables.car.create(selectedCar[0].id, userId);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
  }
};

const deleteCar = async (req, res) => {
  const selectedCar = req.body;
  try {
    const deleteId = await tables.car.delete(selectedCar.id);
    res.status(201).json({ deleteId });
  } catch (err) {
    console.error(err);
  }
};

const getCarsOfUser = async (req, res) => {
  const userId = req.idUser;
  try {
    const cars = await tables.car.getCarByUserId(userId);
    res.status(201).json(cars);
  } catch (err) {
    console.error(err);
  }
};
const getCarsType = async (req, res) => {
  try {
    const cars = await tables.car.getAllCars();
    res.status(201).json(cars);
  } catch (err) {
    console.error(err);
  }
};

const getAvailableCar = async (req, res) => {
  try {
    const cars = await tables.car.getAvailableCar();
    res.status(201).json(cars);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createCar,
  deleteCar,
  getCarsOfUser,
  getCarsType,
  getAvailableCar,
};

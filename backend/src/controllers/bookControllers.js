const tables = require("../tables");

const booking = async (req, res) => {
  const { formattedDate, selectedStation, selectedVehicle } = req.body;

  try {
    const insertId = await tables.booking_list.create(
      formattedDate,
      selectedVehicle,
      selectedStation
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

const getBookingUser = async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const allBookingForUser = await tables.booking_list.getBookingForUser(
      userId
    );
    res.status(201).json({ allBookingForUser });
  } catch (err) {
    console.error(err);
  }
};

const deleteReservation = async (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  try {
    const deleteResult = await tables.booking_list.delete(bookId);
    res.status(201).json({ deleteResult });
  } catch (err) {
    console.error(err);
  }
};

const getAllBookedDate = async (req, res) => {
  const stationId = req.params.id;
  const { selectedDate } = req.body;
  try {
    const result = await tables.booking_list.getNotBookedDateByStationId(
      stationId,
      selectedDate
    );
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  browse,
  getBookingUser,
  deleteReservation,
  booking,
  getAllBookedDate,
};

const tables = require("../tables");

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
};

const tables = require("../tables");

const add = async (req, res, next) => {
  const user = req.body;
  try {
    const insertId = await tables.person.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};

const db = require("../../database/client");

const getByEmail = async (email) => {
  const [data] = await db.query("SELECT * FROM person WHERE email = ?", [
    email,
  ]);
  return data;
};

const getById = async (id) => {
  const [user] = await db.query(
    "SELECT id, email, status FROM person WHERE id = ?",
    [id]
  );
  return user;
};

module.exports = { getByEmail, getById };

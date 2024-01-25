const argon = require("argon2");
const jwt = require("jsonwebtoken");
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

const read = async (req, res) => {
  try {
    const userId = req.idUser;
    const connectedUser = await tables.person.getConnectedUserById(userId);
    if (connectedUser == null) {
      res.sendStatus(404);
    } else {
      res.json(connectedUser);
    }
  } catch (err) {
    console.error(err);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const [user] = await tables.person.getById(req.idUser);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json("Please specify both email and password");

  try {
    const [user] = await tables.person.getByEmail(email);
    if (!user) return res.status(400).json("Invalid email");
    if (await argon.verify(user.password, password)) {
      const token = jwt.sign(
        { id: user.id, status: user.status },
        process.env.JWT_AUTH_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("access_token", token, {
        httpOnly: true,
        secure: false,
      });

      res.status(200).json({ email, id: user.id, status: user.status });
    } else res.status(400).json("invalid password");
  } catch (err) {
    next(err);
  }
  return null;
};

const logout = ({ res }) => {
  res.clearCookie("access_token").sendStatus(200);
};

const updateUser = async (req, res) => {
  try {
    const user = req.body;
    const userId = req.idUser;
    const updatedUser = await tables.person.updateUser(user, userId);
    res.status(204).json(updatedUser);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  add,
  read,
  getCurrentUser,
  login,
  logout,
  updateUser,
};
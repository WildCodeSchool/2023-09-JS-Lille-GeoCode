const argon = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

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

module.exports = {
  login,
  logout,
  getCurrentUser,
};

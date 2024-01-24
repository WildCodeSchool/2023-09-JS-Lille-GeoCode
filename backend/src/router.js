const express = require("express");

const router = express.Router();

const hashPassword = require("./services/auth");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get users

const userControllers = require("./controllers/userControllers");

const { authorize } = require("./middlewares/auth");

router.get("/users/me", authorize, userControllers.getCurrentUser);
router.get("/users/logout", userControllers.logout);
router.get("/connecteduserinfo", authorize, userControllers.read);
router.post("/users/login", userControllers.login);
router.post("/user", hashPassword, userControllers.add);
router.put("/users", authorize, userControllers.updateUser);

// Route to get charge point

const chargePointControllers = require("./controllers/chargePointControllers");

router.get("/chargepoint", chargePointControllers.browse);

/* ************************************************************************* */

module.exports = router;

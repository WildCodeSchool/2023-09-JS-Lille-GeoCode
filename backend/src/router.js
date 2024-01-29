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

const bookControllers = require("./controllers/bookControllers");

router.post("/booking", bookControllers.booking);

/* ************************************************************************* */

const carControllers = require("./controllers/carControllers");

router.get("/users/car", authorize, carControllers.getCarsOfUser);

router.get("/car", carControllers.getCarsType);

router.post("/car", authorize, carControllers.createCar);

router.delete("/car", carControllers.deleteCar);

// Route to have reservations available

router.get("/bookAvailable", bookControllers.browse);

module.exports = router;

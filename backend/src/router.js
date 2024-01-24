const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
// Route to get charge point

const chargePointControllers = require("./controllers/chargePointControllers");

router.get("/chargepoint", chargePointControllers.browse);

// Route to have reservations available
const bookControllers = require("./controllers/bookControllers");

router.get("/bookAvailable", bookControllers.browse);

/* ************************************************************************* */

module.exports = router;

const express = require("express");
const {
  getAllBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
} = require("../controllers/bookingController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Require auth for all booking routes
router.use(requireAuth);

// GET ALL BOOKINGS
router.get("/", getAllBookings);

// GET A SINGLE BOOKING
router.get("/:id", getBooking);

// CREATE A NEW BOOKING
router.post("/", createBooking);

// DELETE A SINGLE BOOKING
router.delete("/:id", deleteBooking);

// UPDATE A SINGLE BOOKING
router.patch("/:id", updateBooking);

module.exports = router;

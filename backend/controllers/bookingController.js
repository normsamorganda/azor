const Booking = require("../models/bookingModel");
const mongoose = require("mongoose");

// GET ALL BOOKINGS
const getAllBookings = async (req, res) => {
  const bookings = await Booking.find({}).sort({ createdAt: -1 }); //sort by date created

  res.status(200).json(bookings);
};

// GET A SINGLE BOOKING
const getBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid id" });
  }
  const booking = await Booking.findById(id);

  if (!booking) {
    return res.status(404).json({ error: "No such booking" });
  }

  res.status(200).json(booking);
};

// CREATE A NEW BOOKING
const createBooking = async (req, res) => {
  const {
    date,
    time_slot,
    brand,
    model,
    reg_num,
    services,
    stats,
    remarks,
    costs,
  } = req.body;

  let emptyFields = [];
  if (!date) {
    emptyFields.push("date");
  }
  if (!time_slot) {
    emptyFields.push("timeSlot");
  }
  if (!brand) {
    emptyFields.push("brand");
  }
  if (!model) {
    emptyFields.push("model");
  }
  if (!reg_num) {
    emptyFields.push("regNum");
  }
  if (!services) {
    emptyFields.push("services");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the required fields", emptyFields });
  }

  // Add data to db

  try {
    const booking = await Booking.create({
      date,
      time_slot,
      brand,
      model,
      reg_num,
      services,
      stats,
      remarks,
      costs,
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A SINGLE BOOKING
const deleteBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid id" });
  }

  const booking = await Booking.findOneAndDelete({ _id: id });

  if (!booking) {
    return res.status(400).json({ error: "No such booking" });
  }

  res.status(200).json(booking);
};

// UPDATE A SINGLE BOOKING
const updateBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid id" });
  }

  const booking = await Booking.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!booking) {
    return res.status(400).json({ error: "No such booking" });
  }

  res.status(200).json(booking);
};

module.exports = {
  getAllBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
};

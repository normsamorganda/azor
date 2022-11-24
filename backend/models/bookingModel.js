const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time_slot: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    reg_num: {
      type: String,
      required: true,
    },
    services: {
      type: [String],
      required: true,
    },
    stats: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: false,
    },
    costs: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);

import React, { useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import ViewBookingModal from "../modals/ViewBookingModal";

const BookingsRows = ({ booking }) => {
  let bookdate = new Date(`${booking.date}`).toLocaleDateString();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr
        onClick={() => {
          setShowModal(true);
        }}
      >
        <td>{booking.first_name}</td>
        <td>{bookdate}</td>
        <td>{booking.time_slot}</td>
        <td>
          <h6>
            <Badge
              bg={
                booking.stats === "Completed"
                  ? "success"
                  : booking.stats === "Pending"
                  ? "warning"
                  : "danger"
              }
              className="ms-auto"
            >
              {booking.stats}
            </Badge>
          </h6>
        </td>

        <td className="text-center" style={{ width: "1rem" }}>
          {booking.stats === "Completed" || booking.stats === "Cancelled" ? (
            ""
          ) : (
            <Button
              as={Link}
              to={`/account/bookings/${booking._id}/complete-booking`}
              size="sm"
              className="btn-success"
            >
              <i className="fa-regular fa-square-check"></i>
            </Button>
          )}
        </td>
        <td className="text-center" style={{ width: "1rem" }}>
          {" "}
          {booking.stats === "Completed" || booking.stats === "Cancelled" ? (
            ""
          ) : (
            <Button
              as={Link}
              to="/account"
              size="sm"
              className="btn-dark"
              disabled={booking.stats === "Completed" ? true : false}
            >
              <i className="fa-solid fa-xmark"></i>
            </Button>
          )}
        </td>
      </tr>

      <ViewBookingModal
        showModal={showModal}
        setShowModal={setShowModal}
        booking={booking}
        bookdate={bookdate}
      />
    </>
  );
};

export default BookingsRows;

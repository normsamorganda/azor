import React from "react";
import Badge from "react-bootstrap/esm/Badge";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Modal from "react-bootstrap/Modal";

const ViewBookingModal = ({ showModal, setShowModal, booking, bookdate }) => {
  return (
    <>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="booking details"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="bookingDetails"
            className="text-primary"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "1",
              overflow: "hidden",
            }}
          >
            {booking.brand} - {booking.model}
          </Modal.Title>
          <Badge
            pill
            bg={
              booking.stats === "Completed"
                ? "success"
                : booking.stats === "Pending"
                ? "warning"
                : "danger"
            }
            className="mx-3"
          >
            {booking.stats}
          </Badge>
        </Modal.Header>
        <Modal.Body>
          <div className="border-bottom border-danger">
            <span className="text-muted">Reference Number:</span>
            <br></br>
            <b>{booking._id}</b>

            <Row className="mt-3">
              <Col sm={12} md={3}>
                <span>Appointment Date:</span>
              </Col>
              <Col sm={12} md={6}>
                <span className="fw-semibold">{bookdate}</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12} md={3}>
                <span>Time Slot:</span>
              </Col>
              <Col sm={12} md={6}>
                <span className="fw-semibold">{booking.time_slot}</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12}>
                <span>
                  <b>My Notes:</b>
                </span>
              </Col>
              <Col sm={12}>
                {/* <div className="border border-dark p-2"> */}
                <div className="p-2">
                  <span
                    style={{
                      fontSize: ".85rem",
                    }}
                  >
                    {booking.remarks}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="mt-2">
              <h6 className="mt-2">Motorcycle details</h6>
              <Col sm={12} md={12}>
                <h5>
                  {/* <Badge bg="info" text="dark"> */}
                  <span
                    className="fw-bold"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      overflow: "hidden",
                    }}
                  >
                    {`${booking.services}`}
                  </span>
                  {/* </Badge> */}
                </h5>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12}>
                <span>Mechanic Notes:</span>
              </Col>
              <Col sm={12}>
                <span
                  className="text-muted"
                  style={{
                    fontSize: ".85rem",
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                  ex exercitationem molestiae maiores laboriosam, at nemo, neque
                  numquam dolor voluptatibus earum vel nobis cumque dolore
                  perferendis voluptatum! Architecto, molestiae repellat?
                </span>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewBookingModal;

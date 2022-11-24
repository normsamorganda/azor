import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BookingCard = ({ booking, viewBooking, editBooking }) => {
  //View Booking Modal
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card
        className="border border-dark bg-white my-4"
        style={{ borderRadius: 0 }}
      >
        <Row>
          <Col sm={12} md={10}>
            <Card.Title className="px-3 mb-0">
              <h5
                className="fw-semibold text-primary mb-0"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                }}
              >
                {`${booking.services}`}
                asdasdasdsadasdasdasdasdasdasdasdasdasdasdasd
              </h5>
              <small>{booking._id}</small>
            </Card.Title>
          </Col>
          <Col xs={{ order: 1 }} sm={12} md={2}>
            <div className="d-flex px-3 ">
              <Badge
                pill
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
            </div>
          </Col>
        </Row>

        <Card.Body className="py-0">
          <div className="border-bottom border-danger">
            <Row>
              <Col sm={12} md={5}>
                <span>Appointment Date:</span>
              </Col>
              <Col sm={12} md={6}>
                <span className="fw-semibold">{booking.date}</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12} md={5}>
                <span>Time Slot:</span>
              </Col>
              <Col sm={12} md={6}>
                <span className="fw-semibold">{booking.time_slot}</span>
              </Col>
            </Row>
          </div>
          <h6 className="mt-3">My Notes:</h6>
          {booking.remarks}
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
                    {booking.brand} - {booking.model}
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
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "2",
                    overflow: "hidden",
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
          <br></br>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => {
              setShowModal(true);
            }}
          >
            More details
          </Button>{" "}
          <Button variant="outline-info" size="sm" onClick={editBooking}>
            Edit
          </Button>
        </Card.Body>
        <span
          className="ms-auto mb-0"
          style={{ fontSize: ".75rem", fontStyle: "italic" }}
        >
          {booking.updatedAt}
        </span>
        <span
          className="ms-auto mt-0 text-muted"
          style={{ fontSize: ".70rem", fontStyle: "italic" }}
        >
          Last updated
        </span>
      </Card>

      {/* >>>>>>>>>>>>>>>>>>>> MODAL <<<<<<<<<<<<<<<<<<<<<<<<<<*/}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="booking details"
      >
        <Modal.Header closeButton>
          <Modal.Title id="bookingDetails" className="text-primary">
            {`${booking.services}`}
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
            className="ms-3"
          >
            {booking.stats}
          </Badge>
        </Modal.Header>
        <Modal.Body>
          <div className="border-bottom border-danger">
            {booking._id}
            <Row>
              <Col sm={12} md={5}>
                <span>Appointment Date:</span>
              </Col>
              <Col sm={12} md={6}>
                <span className="fw-semibold">{booking.date}</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12} md={5}>
                <span>Time Slot:</span>
              </Col>
              <Col sm={12} md={6}>
                <span className="fw-semibold">{booking.time_slot}</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12}>
                <span>My Notes:</span>
              </Col>
              <Col sm={12}>
                <div className="border border-dark p-2">
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
                    {booking.brand} - {booking.model}
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

export default BookingCard;

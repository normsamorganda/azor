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
          <Col sm={12} md={8}>
            <Card.Title className="px-3 mb-0">
              <h5 className="fw-semibold text-primary mb-0">
                {booking.service}Oil Change
              </h5>
            </Card.Title>
          </Col>
          <Col sm={12} md={4}>
            <div className="d-flex px-3 ">
              <Badge pill bg="success" className="ms-auto">
                Completed
              </Badge>
            </div>
          </Col>
        </Row>
        {/* <div className="d-flex " fluid>
         
         
        </div> */}
        <Card.Body className="py-0">
          <div className="border-bottom border-danger">
            {booking.first_name}
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
                    Honda - The All-New CB150X
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
              console.log(booking.first_name);
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
            Oil Change
          </Modal.Title>
          <Badge pill bg="success" className="ms-3">
            Completed
          </Badge>
        </Modal.Header>
        <Modal.Body>
          <div className="border-bottom border-danger">
            {booking.first_name}
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    ex exercitationem molestiae maiores laboriosam, at nemo,
                    neque numquam dolor voluptatibus earum vel nobis cumque
                    dolore perferendis voluptatum! Architecto, molestiae
                    repellat?
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
                    Honda - The All-New CB150X
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

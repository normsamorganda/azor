import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import BookingCard from "../../components/cards/users/BookingCard";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { useBookingsContext } from "../../components/hooks/useBookingsContext";
import UserBookingPagination from "../../components/paginations/UserBookingPagination";

const UserBookings = () => {
  const { bookings, dispatch } = useBookingsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  // const [lastPage, setLastPage] = useState(null);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = bookings.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("/api/bookings"); // fetch data from the server
      const json = await response.json(); // pass to a variable to use the data

      // check if response is ok
      if (response.ok) {
        dispatch({ type: "SET_BOOKINGS", payload: json });
      }
    };
    fetchBookings();
  }, [dispatch]);

  const viewBooking = () => {};
  const editBooking = () => {};

  return (
    <>
      <Container className="mt-3 border-bottom border-secondary">
        <h1>My Appointments</h1>
      </Container>

      <Container className="my-3">
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Text input with dropdown button"
            placeholder="Search"
          />
          <DropdownButton
            variant="secondary"
            title="Filter by"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item as={Link} to="#">
              Service
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#">
              Brand/Model
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#">
              Booking Date
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="#">
              Status
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <Row>
          <Col md={12}>
            <div className="flex-column">
              {currentPosts &&
                currentPosts.map((booking) => (
                  <BookingCard
                    key={booking._id}
                    booking={booking}
                    viewBooking={viewBooking}
                    editBooking={editBooking}
                  />
                ))}
            </div>
          </Col>
        </Row>
        <Container className="d-flex justify-content-center">
          <UserBookingPagination />
        </Container>
      </Container>
    </>
  );
};

export default UserBookings;

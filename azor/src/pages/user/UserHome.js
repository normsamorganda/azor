import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import ActivityCard from "../../components/cards/users/ActivityCard";
import { Link, useParams } from "react-router-dom";

const UserHome = () => {
  const { id } = useParams();
  return (
    <div>
      <Container className="mt-3 border-bottom border-secondary">
        <h1>Home</h1>
      </Container>
      <Container>
        <Button
          as={Link}
          to={`/account/user/${id}/create-appointment`}
          size="lg"
        >
          <i className="fa-solid fa-calendar-plus"></i> Book an appointment
        </Button>
        <div className="d-flex flex-wrap m-3">
          <ActivityCard />
        </div>
      </Container>
    </div>
  );
};

export default UserHome;

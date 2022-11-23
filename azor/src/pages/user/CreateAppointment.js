import React from "react";
import Container from "react-bootstrap/esm/Container";
import UserBookServiceForm from "../../components/forms/UserBookServiceForm";

const CreateAppointment = () => {
  return (
    <div>
      <Container className="mt-3 border-bottom border-secondary">
        <h1>Create new appointment</h1>
      </Container>
      <Container className="my-4">
        <UserBookServiceForm />
      </Container>
    </div>
  );
};

export default CreateAppointment;

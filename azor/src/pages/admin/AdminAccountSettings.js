import React from "react";
import Container from "react-bootstrap/esm/Container";
import AdminEditAcoountForm from "./AdminEditAccountForm";

const AdminAccountSettings = () => {
  return (
    <div>
      <Container className="mt-3 border-bottom border-secondary ">
        <h1>My Account</h1>
      </Container>
      <Container>
        <AdminEditAcoountForm />
      </Container>
    </div>
  );
};

export default AdminAccountSettings;

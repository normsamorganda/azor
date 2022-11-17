import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const RegisterForm = () => {
  return (
    <Card className="bg-white py-5 px-4">
      <h1 className="fs-1 fw-semibold text-center">Register to Azor</h1>
      <h6 className="fs-6 mb-4 text-center">
        No more hassles with Motorcycle servicing and repairs.
      </h6>
      <Form action="/login">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="first_name"
                name="first_name"
                type="text"
                placeholder="First name"
              />
              <label htmlFor="first_name">First Name*</label>
            </Form.Floating>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Last name"
              />
              <label htmlFor="last_name">Last Name*</label>
            </Form.Floating>
          </Col>
        </Row>
        <Form.Floating className="mb-3">
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address*</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password*</label>
          <p className="form-text text-muted">
            Include a minimum of 8 characters, 1 uppercase, 1 lowercase, 1
            number and 1 symbol
          </p>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="confirm_password"
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
          />
          <label htmlFor="confirm_password">Confirm Password*</label>
        </Form.Floating>
        <Stack className="my-4" gap={3}>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Button variant="outline-primary" type="button" href="/login">
            Already have an account? Log in
          </Button>
        </Stack>
      </Form>
      <small>* Denotes a Mandatory field.</small>
      <br></br>
      <small>
        To understand how we take care of your personal details, please view our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </small>
    </Card>
  );
};

export default RegisterForm;

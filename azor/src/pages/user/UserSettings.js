import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/esm/Spinner";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../assets/media/images/Avatar.png";

const UserSettings = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Container className="mt-3 border-bottom border-secondary">
        <h1>My Account</h1>
      </Container>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner
            animation="border"
            variant="primary"
            size="lg"
            className="mt-5"
          />
        </div>
      ) : (
        <Container>
          <Form>
            <div className="mt-5 d-flex flex-column align-items-center">
              <img
                src={Avatar}
                alt="Avatar"
                className=""
                style={{ borderRadius: "50%", width: "100px" }}
              />

              <input type="file" id="upload" hidden />
              <label htmlFor="upload" className="btn-secondary mt-2">
                Upload image
              </label>
            </div>
            <div className="py-5">
              <Row className="mb-4">
                <Form.Group
                  className="mb-4"
                  controlId="first_name"
                  as={Col}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Form.Label className="fw-bold">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                  />
                </Form.Group>
                <Form.Group controlId="last_name" as={Col} md={6} lg={6} xl={6}>
                  <Form.Label className="fw-bold">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group controlId="phone" as={Col}>
                  <Form.Label className="fw-bold">Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Phone" name="phone" />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group controlId="email" as={Col}>
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value="jhondoe@gmail.com"
                    disabled
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group controlId="password" as={Col}>
                  <div className="d-flex">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Label
                      className="fw-semibold ms-auto text-primary"
                      as={Link}
                      to={`/account/user/${id}/account-settings/change-password`}
                    >
                      Change Password
                    </Form.Label>
                  </div>
                  <Form.Control
                    type="password"
                    name="password"
                    disabled
                    value="JKHJKSDdadasdas"
                  />
                </Form.Group>
              </Row>
            </div>
          </Form>
          <Form className="border-top border-primary py-5">
            <span
              className="border-0 bg-none"
              style={{ cursor: "pointer", color: "#702df5" }}
            >
              Delete Account
            </span>
            <br></br>
            <span className="text-muted">
              This account will no longer be accessible. All your saved data
              will be permanently deleted
            </span>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default UserSettings;

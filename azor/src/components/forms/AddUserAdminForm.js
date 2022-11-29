import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import Avatar from "../../assets/media/images/Avatar.png";
import Swal from "sweetalert2";
import { useAuthContext } from "../hooks/useAuthContext";

const AddUserAdminForm = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [user_access, setUser_access] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success me-3",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Make sure to review the user details before submitting!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add user!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "New user created!",
            "You may now login.",
            "success"
          );
          setUser_access("");
          setFirst_name("");
          setLast_name("");
          setEmail("");
          setPassword("");
          setConfirm_password([]);
          setError(null);
          setEmptyFields([]);
        }
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
                className={emptyFields.includes("first_name") ? "error" : ""}
              />
            </Form.Group>
            <Form.Group controlId="last_name" as={Col} md={6} lg={6} xl={6}>
              <Form.Label className="fw-bold">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={(e) => setLast_name(e.target.value)}
                value={last_name}
                className={emptyFields.includes("last_name") ? "error" : ""}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              controlId="user_access"
              as={Col}
              md={6}
              className="mb-4"
            >
              <Form.Label className="fw-bold">User Access</Form.Label>
              <Form.Select
                id="user_access"
                onChange={(e) => setUser_access(e.target.value)}
                value={user_access}
              >
                <option disabled value="">
                  Select User Access
                </option>
                <option value="Basic">Basic</option>
                <option value="Full">Full</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="email" as={Col} md={6}>
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={emptyFields.includes("email") ? "error" : ""}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group controlId="password" as={Col}>
              <div className="d-flex">
                <Form.Label className="fw-bold">Password</Form.Label>
              </div>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={emptyFields.includes("password") ? "error" : ""}
              />
            </Form.Group>
          </Row>
          <Row className="">
            <Form.Group controlId="confirm_password" as={Col}>
              <div className="d-flex">
                <Form.Label className="fw-bold">Confirm Password</Form.Label>
              </div>
              <Form.Control
                type="confirm_password"
                name="confirm_password"
                onChange={(e) => setConfirm_password(e.target.value)}
                value={confirm_password}
                className={
                  emptyFields.includes("confirm_password") ? "error" : ""
                }
              />
            </Form.Group>
          </Row>
        </div>
        <Button type="submit">Add User</Button>
      </Form>
    </>
  );
};

export default AddUserAdminForm;

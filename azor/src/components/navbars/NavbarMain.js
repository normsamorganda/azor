import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="white" expand="md" className="main-navbar" sticky="top">
        <Container>
          <Navbar.Brand href="#">Azor</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3 gap-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/about-us">About</Nav.Link>
                <Nav.Link href="/contact-us">Contact</Nav.Link>
              </Nav>
              {/* <Button className="btn btn-primary text-white">Login</Button> */}
              <div className="d-flex align-items-center">
                <Nav.Link href="/login">
                  <i className="fa-regular fa-user text-dark fs-4"></i>
                </Nav.Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;

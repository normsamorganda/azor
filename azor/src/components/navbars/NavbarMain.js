import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Outlet } from "react-router-dom";
import FooterMain from "../footers/FooterMain";

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="white" expand="md" className="main-navbar" sticky="top">
        <Container className="d-flex align-items-center">
          <Navbar.Brand>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/"
            >
              Azor
            </NavLink>
          </Navbar.Brand>
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about-us">About</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
              </Nav>
              {/* <Button className="btn btn-primary text-white">Login</Button> */}
              <div className="d-flex align-items-center">
                <NavLink to="/login">
                  <i className="fa-regular fa-user text-dark fs-4"></i>
                </NavLink>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
      <FooterMain />
    </>
  );
};

export default MainNavbar;

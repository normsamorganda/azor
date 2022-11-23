import React, { useState } from "react";
import "../admin/AdminSideNavBar.css";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const AdminLayout = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    isExpanded
      ? setIsExpanded(false)
      : !isExpanded
      ? setIsExpanded(false)
      : setIsExpanded(true);
  };

  const menuItems = [
    {
      text: "Dashboard",
      path: "/",
      icon: "fa-solid fa-gauge",
    },
    {
      text: "Bookings",
      path: "/bookings",
      icon: "fa-regular fa-calendar-check",
    },
    {
      text: "History",
      path: "/history",
      icon: "fa-solid fa-clock-rotate-left",
    },
    {
      text: "Settings",
      path: "/settings",
      icon: "fa-solid fa-gear",
    },
  ];
  return (
    <div className="main-container">
      <div
        className={
          isExpanded
            ? "side-nav-container"
            : "side-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            {isExpanded && (
              <div className="nav-brand">
                <h1>Azor</h1>
              </div>
            )}
          </div>
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menus">
          {menuItems.map((item, index) => (
            <OverlayTrigger
              key={index}
              placement="right"
              overlay={
                <Tooltip
                  id="tooltip-right"
                  className={!isExpanded ? "tool" : "tool-NX"}
                >
                  <strong>{item.text}</strong>
                </Tooltip>
              }
            >
              <NavLink
                key={index}
                to={`/account/admin/${id}${item.path}`}
                className={
                  isExpanded ? "menus-item" : "menus-item menus-item-NX"
                }
                style={({ isActive }) => {
                  return isActive ? { color: "#cb0000" } : {};
                }}
                onClick={handleClick}
              >
                <i className={item.icon}></i>
                {isExpanded && <span>{item.text}</span>}
              </NavLink>
            </OverlayTrigger>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column main-section">
        <div className="navbar bg-light px-5" style={{ height: "10vh" }}>
          <NavDropdown
            className="text-dark ms-auto"
            title="Ryan Mark"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href={`/account/amin/${id}/account-settings`}>
              My Account
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/3.4" className="d-flex align-items-center">
              <div className="me-auto">Sign out</div>{" "}
              <i className="fa-solid fa-right-from-bracket"></i>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <Routes>
          <Route index element={<h1>Hi</h1>} />
          <Route path="bookings" element={<h1>Bookings</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;

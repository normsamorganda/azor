import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterMain from "./components/footers/FooterMain";
import MainNavbar from "./components/navbars/NavbarMain";
import About from "./pages/about";
import AdminDashboard from "./pages/admin/adminDashboard";
import Contact from "./pages/contact";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Services from "./pages/services";
import UserDashboard from "./pages/user/userDashboard";

function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/user/:id" element={<UserDashboard />} />
          <Route path="/account/admin/:id" element={<AdminDashboard />} />
        </Routes>
        <FooterMain />
      </Router>
    </>
  );
}

export default App;

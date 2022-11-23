import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/navbars/NavbarMain";
import BookingsTable from "./components/tables/BookingsTable";
import NotFoundPage from "./pages/404NotFound";
import About from "./pages/about";
import AdminLayout from "./pages/admin/AdminLayout";
import LoginPage from "./pages/authentication/login";
import RegisterPage from "./pages/authentication/register";
import Contact from "./pages/contact";
import DummyPage from "./pages/dummy";
import Home from "./pages/home";
import Services from "./pages/services";
import UserLayout from "./pages/user/UserLayout";

function App() {
  return (
    <>
      <Router>
        {/* <MainNavbar /> */}
        <Routes>
          <Route element={<MainNavbar />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dummy" element={<DummyPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/account/admin/:id/*" element={<AdminLayout />} />
          <Route path="/account/user/:id/*" element={<UserLayout />} />
          <Route path="/account/user/booking" element={<BookingsTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

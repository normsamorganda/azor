import React from "react";
import Container from "react-bootstrap/esm/Container";

import ServicesBanner from "../components/banners/ServicesBanner";
// import BookServiceForm from "../components/forms/BookServiceForm";

const Services = () => {
  return (
    <>
      <ServicesBanner />
      <Container className="my-5">{/* <BookServiceForm /> */}</Container>
    </>
  );
};

export default Services;

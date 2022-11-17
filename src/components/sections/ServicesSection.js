import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Services from "../cards/ServicesCard";
import Break from "../../assets/media/icons/break.png";
import ChangeOil from "../../assets/media/icons/change-oil.png";
import Tires from "../../assets/media/icons/tires.png";
import Maintenance from "../../assets/media/icons/maintenance.png";

const ServicesSection = () => {
  return (
    <div className="my-5">
      <div className="text-center p-5">
        <h2>
          Azor’s core services include the most basic of motorcycle maintenance,
          all of which are critical to your motorcycle’s performance.
        </h2>
      </div>
      <Row className="mb-5 g-5">
        <Col md={12} lg={6}>
          <Services
            title="Brakes"
            img={Break}
            heading="The foremost area of safety, Azor offers brake pads, shoes and other brakes services."
          />
        </Col>
        <Col md={12} lg={6}>
          <Services
            title="Oil Change"
            img={ChangeOil}
            heading="Get the fastest Oil Change job done right before your eyes!"
          />
        </Col>
      </Row>
      <Row className="mb-5 g-5">
        <Col md={12} lg={6}>
          <Services
            title="Tires & Batteries"
            img={Tires}
            heading="Your motorcycle’s body and soul. We’ll make sure you’ll get the best tires and batteries fit for your motorcycle brand."
          />
        </Col>
        <Col md={12} lg={6}>
          <Services
            title="Maintenance"
            img={Maintenance}
            heading="General maintenance services to ensure that your motorcycle runs as it should!"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;

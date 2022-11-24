import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from "react-bootstrap/esm/Alert";
// import { useBookingsContext } from "../hooks/useBookingsContext";

const UserBookServiceForm = () => {
  //   const { dispatch } = useBookingsContext();
  const [date, setDate] = useState("");
  const [time_slot, setTimeSlot] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [reg_num, setRegNum] = useState("");
  const [services, setServices] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const stats = "Pending";
  const costs = 10000;

  // const [selectedServices, setSelectedServices] = useState([]);

  // SELECTED SERVICES
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setServices(
      checked ? [...services, value] : services.filter((item) => item !== value)
    );
  };
  // console.log(services);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const booking = {
      date,
      time_slot,
      brand,
      model,
      reg_num,
      services,
      remarks,
      stats,
      costs,
    };
    console.log(booking);
    const response = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setDate("");
      setTimeSlot("");
      setBrand("");
      setModel("");
      setRegNum("");
      setServices([]);
      setRemarks("");
      setError(null);
      setEmptyFields([]);
      console.log("New booking added", json);
      //   dispatch({ type: "CREATE_BOOKING", payload: json });
    }
  };

  const serviceList = [
    { id: 1, service_name: "Brakes" },
    { id: 2, service_name: "Change Oil" },
    { id: 3, service_name: "Tires & Batteries" },
    { id: 4, service_name: "Maintenance" },
    { id: 5, service_name: "MOT" },
  ];

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label className="fs-3 mb-5">
          To start your <span className="text-primary">booking</span>, please
          provide all the required information.
        </Form.Label>
        {error && <Alert variant="danger">{error}</Alert>}

        <Row className="mb-3 mt-5">
          <Form.Group
            as={Col}
            md={6}
            lg={6}
            xl={6}
            controlId="date"
            className="mb-3 "
          >
            <Form.Label className="fs-5">Date*</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Date"
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className={emptyFields.includes("date") ? "error" : ""}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md={6}
            lg={6}
            xl={6}
            controlId="timeSlot"
            className="mb-3"
          >
            <Form.Label className="fs-5">Prefer Time Slot*</Form.Label>
            <Form.Select
              id="time_slot"
              // name="time_slot"
              onChange={(e) => setTimeSlot(e.target.value)}
              value={time_slot}
              className={emptyFields.includes("timeSlot") ? "error" : ""}
            >
              <option disabled value="">
                Select Time Slot
              </option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            md={4}
            lg={4}
            xl={4}
            controlId="brand"
            className="mb-3"
          >
            <Form.Label className="fs-5">Brand*</Form.Label>
            <Form.Select
              id="brand"
              name="brand"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              className={emptyFields.includes("brand") ? "error" : ""}
            >
              <option disabled value="">
                Select Brand
              </option>
              <option value="Honda">Honda</option>
              <option value="Kawasaki">Kawasaki</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Yamaha">Yamaha</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            as={Col}
            md={4}
            lg={4}
            xl={4}
            controlId="model"
            className="mb-3"
          >
            <Form.Label className="fs-5">Model*</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g. Beat, TMX125 Alpha, XRM125 DS"
              onChange={(e) => setModel(e.target.value)}
              value={model}
              className={emptyFields.includes("model") ? "error" : ""}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={4}
            lg={4}
            xl={4}
            controlId="reg_num"
            className="mb-3"
          >
            <Form.Label className="fs-5">Reg Number*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Registration Number"
              onChange={(e) => setRegNum(e.target.value)}
              value={reg_num}
              className={emptyFields.includes("regNum") ? "error" : ""}
            />
          </Form.Group>
        </Row>

        <Form.Group
          className="mb-5 mt-3 formGridCheckbox"
          id="formGridCheckbox"
        >
          <Row className={emptyFields.includes("services") ? "error " : ""}>
            <Col sm={12}>
              <Form.Label className="fs-3">
                Which type of service would you like to book?*
              </Form.Label>
            </Col>
            <Col sm={12} md={8}>
              {serviceList.map((service) => (
                <Form.Check
                  key={service.id}
                  type="checkbox"
                  value={service.service_name}
                  onChange={handleSelect}
                  label={service.service_name}
                />
              ))}

              {/* <Form.Check
                type="checkbox"
                id="oil_change"
                name="oil_change"
                label="Oil Change"
              />
              <Form.Check
                type="checkbox"
                id="tires_battery"
                name="tires_battery"
                label="Tires & Batteries"
              />
              <Form.Check
                type="checkbox"
                id="maintenance"
                name="maintenance"
                label="Maintenance"
              /> */}
            </Col>
            <Col sm={12} md={4}>
              Total Cost:{" "}
              <h4>
                Php <span>{costs}</span>
              </h4>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label className="fs-5">Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setRemarks(e.target.value)}
            value={remarks}
            placeholder="Message (Optional)"
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UserBookServiceForm;

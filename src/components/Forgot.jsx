import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/reset/forgot-password", { email });

      setNotify({
        show: true,
        error: false,
        message: "Please check your email!",
      });
    } catch (err) {
      setNotify({
        show: true,
        error: true,
        message: "Error occured!",
      });
      console.log(err.message);
    }
    // api call
  };

  let info;

  if (notify.show) {
    info = (
      <div
        className={notify.error ? "alert alert-danger" : "alert alert-success"}
        role={"alert"}
      >
        {notify.message}
      </div>
    );
  }

  return (
    <>
      {info}
      <Form style={{ width: "60%", margin: "0 auto" }} onSubmit={handleSubmit}>
        <h2 className="text-center py-4">Forgot Password</h2>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default Forgot;

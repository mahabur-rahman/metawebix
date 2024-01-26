import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // api call
    await axios.post("/reset/reset-password", {
      token,
      password,
      password_confirm: confirmPassword,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Form style={{ width: "60%", margin: "0 auto" }} onSubmit={handleSubmit}>
        <h2 className="text-center py-4">Reset Your Password </h2>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            New Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Confirm Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Reset;

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom"; // Assuming you're using react-router-dom

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // api call
      const response = await axios.post("/signup", formData);

      if (response.data) {
        setRedirect(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred during registration. Please try again.");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <Form style={{ width: "60%", margin: "0 auto" }} onSubmit={handleSubmit}>
        <h2 className="text-center py-4">Register</h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalFirstName"
        >
          <Form.Label column sm={2}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalLastName"
        >
          <Form.Label column sm={2}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Register</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;

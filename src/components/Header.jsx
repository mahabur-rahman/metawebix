import { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Correct import statement
import axios from "axios";

function Header() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      await axios.get(`/logout`);
      setAuth(true);
    })();
  }, []);

  const logout = async () => {
    await axios.post("/logout", {}, { withCredentials: true });
    // every headers set token ''
    axios.defaults.headers.common["Authorization"] = ``;
  };

  let links;

  if (auth) {
    links = (
      <div className="me-auto">
        <Link to="/login" className="mx-4" onClick={logout}>
          Logout
        </Link>
      </div>
    );
  } else {
    links = (
      <div className="me-auto">
        <Link to="/login" className="mx-4">
          Login
        </Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">Home</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">{links}</Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

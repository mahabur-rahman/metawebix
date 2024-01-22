import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Correct import statement

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">Home</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto">
            <Link to="/login" className="mx-4">
              Login
            </Link>
            <Link to="/register">Register</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

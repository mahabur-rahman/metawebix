import { Container, Nav, Navbar } from "react-bootstrap";
// logo
import logo from "../../images/google.jpeg";
// style
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Navbar.Toggle />

          <Nav className="mr-auto text-white">
            <Link to="/">Home</Link>
            <Link to="/about" className="mx-3">
              About
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/post" className="mx-3">
              Post
            </Link>
            <Link to="/user" className="mx-3">
              User
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Topbar;

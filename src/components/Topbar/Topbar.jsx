import { Container, Form, Nav, Navbar, Image } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa6";
import { FaSearch, FaBell } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import google from "../../images/google.jpeg";
import "./topbar.scss";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary topbar">
      <Container fluid>
        {/* logo  */}
        <Link to="/">
          <span className="text-danger mx-1">
            <FaYoutube style={{ height: "2rem", width: "2rem" }} />
          </span>
          <span className="fw-bold text-danger">YouTube</span>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex align-items-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search_area"
              />
              <span className="px-4 py-2 search_icon">
                <FaSearch className="text-black" />
              </span>
            </Form>
          </Nav>

          {/* profile part  */}
          <div className="profile">
            <div className="d-flex align-items-center justify-content-between">
              <div className="right_icon">
                <FaVideo className="p_icon" />
              </div>
              <div className="mx-3 right_icon">
                <FaBell className="p_icon" />
                <span className="number">9+</span>
              </div>
              <Image
                src={google}
                alt="profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;

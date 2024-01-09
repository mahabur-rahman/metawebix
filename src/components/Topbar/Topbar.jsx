import { useEffect, useState } from "react";
import { Container, Form, Nav, Navbar, Image } from "react-bootstrap";
import { FaYoutube, FaSearch, FaBell, FaVideo, FaBars } from "react-icons/fa";
import google from "../../images/google.jpeg";
import "./topbar.scss";
import { Link } from "react-router-dom";

const Topbar = ({ title, toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary topbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>
        <span className="mx-1" style={{ fontSize: "2rem", cursor: "pointer" }}>
          <FaBars onClick={toggleSidebar} />
        </span>
        {/* logo  */}
        <Link to="/">
          <span className="text-danger mx-1">
            <FaYoutube style={{ height: "2rem", width: "2rem" }} />
          </span>
          <span className="fw-bold text-danger">{title}</span>
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

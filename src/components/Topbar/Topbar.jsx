import { Container, Nav, Navbar } from "react-bootstrap";
// logo
import logo from "../../images/google.jpeg";
// style
import "./topbar.css";
// menu
import menu from "../../data/data";

const Topbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />

          <Nav className="mr-auto text-white">
            {menu.map((anything) => (
              <div key={Math.random()}>
                <a className="mx-3 text-black" href={anything.link}>
                  {anything.title}
                </a>
              </div>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Topbar;

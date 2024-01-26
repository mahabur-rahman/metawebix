import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Correct import statement
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../redux/authSlice";

function Header() {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await axios.get(`/logout`);
  //       setAuth(true);
  //     } catch (err) {
  //       setAuth(false);
  //     }
  //   })();
  // }, []);

  const logout = async () => {
    await axios.post("/user/logout", {}, { withCredentials: true });
    dispatch(setAuth(false));
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

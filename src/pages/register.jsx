// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handClick = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Register page</h1>
      {/* <Link to="/">
        <button type="button">Go to home</button>
      </Link> */}

      <button onClick={handClick}>Go to home</button>
    </>
  );
};

export default Register;

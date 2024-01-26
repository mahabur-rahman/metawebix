import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);

  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/user/me`);
        setMessage(`${data.firstName} - ${data.lastName}`);

        dispatch(setAuth(true));
      } catch (err) {
        console.log(err.message);
        dispatch(setAuth(false));
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center">Home Page</h1>

      <h3>{auth ? message : "You are not authenticated!"}</h3>
    </div>
  );
};

export default Home;

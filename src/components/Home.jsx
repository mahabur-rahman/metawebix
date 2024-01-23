import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("You are not logged in");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/me`);
      setMessage(`${data.firstName} - ${data.lastName}`);
    })();
  }, []);

  return (
    <div>
      <h1 className="text-center">Home Page</h1>

      <h3>{message}</h3>
    </div>
  );
};

export default Home;

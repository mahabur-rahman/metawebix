import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState("");
  const [err, setErr] = useState("");

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const userInfoDataFetch = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUserInfo(res.data);
      } catch (err) {
        setErr(err.message);
      }
    };

    userInfoDataFetch();
  }, [id]);

  const { id: userId, name, username, email } = userInfo;

  return (
    <>
      {err ? (
        <h1 className="text-danger fw-bold">404, not found!</h1>
      ) : (
        <>
          <h1>User Details: {userId} </h1>
          <h1>User Details: {name} </h1>
          <h1>User Details: {username} </h1>
          <h1>User Details: {email} </h1>
        </>
      )}
    </>
  );
};

export default UserDetails;

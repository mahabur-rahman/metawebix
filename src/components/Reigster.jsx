import { useState } from "react";

const Register = () => {
  const [userData, userUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    userUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // calling api
    alert(
      `username: ${userData.username}, email: ${userData.email}, password: ${userData.password}`
    );
  };

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="enter your name"
          name="username"
          onChange={handleChange}
        />
        <br />

        <label>Email: </label>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={handleChange}
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Registration</button>
      </form>
    </>
  );
};

export default Register;

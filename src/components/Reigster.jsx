import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      `User: ${userData.username}, ${userData.email}, ${userData.password}`
    );

    // clear the form submission
    setUserData({
      username: "",
      email: "",
      password: "",
    });
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
          value={userData.username}
          onChange={handleChange}
        />
        <br />

        <label>Email: </label>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

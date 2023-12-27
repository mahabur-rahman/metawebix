import { useState } from "react";

const Events = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
  });

  const anything = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <h2>Handling events of React</h2>
      <input
        type="text"
        placeholder="your name"
        name="userInfo"
        value={userInfo.name}
        onChange={anything}
      />
    </div>
  );
};

export default Events;

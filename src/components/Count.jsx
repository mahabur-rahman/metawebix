import { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  //   func
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter with hooks: </h1>
      <h4>Count : {count}</h4>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default ClickCounter;

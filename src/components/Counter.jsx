import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    // return a clean up
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
};

export default Counter;

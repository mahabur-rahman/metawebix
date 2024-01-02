import { useState, useCallback } from "react";

export default function TestCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((anyting) => anyting + 1);
    console.log(`stop rendering also for this function`);
  }, []); // empty depencies array means that this callBack won't change

  console.log(`Rendering about page`);
  return (
    <>
      <div>TestCallback</div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>onClick of this button</button>
    </>
  );
}

import { useState, useMemo } from "react";

export default function TestUseMemo() {
  const [number, setNumber] = useState(0);

  const square = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <>
      <div>Practice with useMemo</div>

      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <p>Square: {square}</p>
    </>
  );
}

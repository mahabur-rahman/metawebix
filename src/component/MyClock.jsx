// Clock.js

import { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const MyClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Clock value={time} />
    </div>
  );
};

export default MyClock;

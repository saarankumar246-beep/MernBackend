import { useState } from "react";

function CounterTwice() {

  const [count, setCount] = useState(0);

  const increaseTwice = () => {
    setCount((prev) => prev + 2);
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increaseTwice}>
        Increase Twice
      </button>
    </div>
  );
}

export default CounterTwice
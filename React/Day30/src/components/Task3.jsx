import React, { useState, useCallback } from "react";

// Child Component
const Child = React.memo(({ calculateSquare }) => {
  console.log("Child re-rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <p>Square of 5: {calculateSquare(5)}</p>
    </div>
  );
});

const Task3 = () => {
  const [dark, setDark] = useState(false);

  const calculateSquare = useCallback((num) => {
    console.log("Calculating square...");
    let result = 0;

    for (let i = 0; i < num; i++) {
      result += num; // loop-based multiplication
    }

    return result;
  }, []);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>useCallback Optimization</h2>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <Child calculateSquare={calculateSquare} />
    </div>
  );
};

export default Task3;
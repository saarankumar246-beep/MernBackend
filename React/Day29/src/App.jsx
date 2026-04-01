import { useState, useMemo, useCallback } from "react";

function App() {
  // ---------------- TASK 1 ----------------
  const [num, setNum] = useState(5);

  const heavySum = (n) => {
    console.log("Calculating sum...");
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < 1000000; j++) {} // heavy simulation
      sum += i;
    }
    return sum;
  };

  const sumResult = useMemo(() => heavySum(num), [num]);

  // ---------------- TASK 2 ----------------
  const generateArray = () => {
    return Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 1000)
    );
  };

  const [arr, setArr] = useState(generateArray);

  const evenSum = useMemo(() => {
    return arr
      .filter((n) => n % 2 === 0)
      .reduce((acc, curr) => acc + curr, 0);
  }, [arr]);

  const regenerateArray = useCallback(() => {
    setArr(generateArray());
  }, []);

  // ---------------- TASK 3 ----------------
  const [primeInput, setPrimeInput] = useState("");
  const [isPrime, setIsPrime] = useState(null);

  const checkPrime = useCallback(() => {
    const n = Number(primeInput);

    if (n < 2) {
      setIsPrime(false);
      return;
    }

    let flag = true;

    for (let i = 2; i < n; i++) {
      for (let j = 0; j < 500000; j++) {} // heavy simulation
      if (n % i === 0) {
        flag = false;
        break;
      }
    }

    setIsPrime(flag);
  }, [primeInput]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔥 useMemo & useCallback Demo</h1>

      {/* TASK 1 */}
      <h2>Task 1 — Heavy Sum</h2>
      <p>Number: {num}</p>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <p>Sum: {sumResult}</p>

      <hr />

      {/* TASK 2 */}
      <h2>Task 2 — Large Array</h2>
      <button onClick={regenerateArray}>Regenerate Array</button>
      <p>Even Numbers Sum: {evenSum}</p>

      <hr />

      {/* TASK 3 */}
      <h2>Task 3 — Prime Checker</h2>
      <input
        type="number"
        value={primeInput}
        onChange={(e) => setPrimeInput(e.target.value)}
      />
      <button onClick={checkPrime}>Check</button>

      {isPrime !== null && (
        <p>{isPrime ? "✅ Prime Number" : "❌ Not Prime"}</p>
      )}
    </div>
  );
}

export default App;
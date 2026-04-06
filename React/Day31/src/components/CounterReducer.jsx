import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return initialState;

    case "INCREMENT_BY_VALUE":
      return { count: state.count + action.payload };

    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>Counter (useReducer)</h2>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        + Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        - Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      <button
        onClick={() =>
          dispatch({ type: "INCREMENT_BY_VALUE", payload: 5 })
        }
      >
        +5
      </button>
    </div>
  );
};

export default CounterReducer;
import React from "react";

function AgeStatus() {

  // Variable
  const age = 20;

  return (
    <div>
      <h1>Age Status</h1>

      {age >= 18 ? <h2>Adult</h2> : <h2>Minor</h2>}

    </div>
  );
}

export default AgeStatus;
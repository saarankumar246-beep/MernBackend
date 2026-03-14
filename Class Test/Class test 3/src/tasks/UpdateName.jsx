import { useState } from "react";

function UpdateName() {
  const [name, setName] = useState("John");

  return (
    <div>
      <h2>{name}</h2>

      <button onClick={() => setName("Sudhan")}>
        Update Name
      </button>
    </div>
  );
}

export default UpdateName
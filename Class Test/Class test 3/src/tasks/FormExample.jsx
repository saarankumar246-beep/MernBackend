import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>{name}</h3>
      <h3>{email}</h3>
    </div>
  );
}

export default FormExample
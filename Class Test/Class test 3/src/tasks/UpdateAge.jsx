import { useState } from "react";

function UpdateAge() {
  const [user, setUser] = useState({
    name: "John",
    age: 25
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>

      <button
        onClick={() =>
          setUser({ ...user, age: 30 })
        }
      >
        Update Age
      </button>
    </div>
  );
}

export default UpdateAge
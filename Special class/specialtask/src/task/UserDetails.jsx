import React from "react";

function UserDetails() {

  // Variables
  const name = "Saarankumar";
  const age = 22;
  const city = "Chennai";

  return (
    <div>
      <h1>User Details</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>

    </div>
  );
}

export default UserDetails;
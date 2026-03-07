import React from "react";

function UserInfo() {

  // Object
  const user = {
    name: "Saarankumar",
    email: "saarankumar246@gmail.com",
    phone: "9025881602"
  };

  return (
    <div>
      <h1>User Information</h1>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

    </div>
  );
}

export default UserInfo;
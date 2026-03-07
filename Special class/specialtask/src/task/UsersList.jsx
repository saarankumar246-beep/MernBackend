import React from "react";

function UsersList() {

  // Array of Objects
  const users = [
    { id: 1, name: "Arun", age: 22 },
    { id: 2, name: "Kumar", age: 24 },
    { id: 3, name: "Rahul", age: 21 }
  ];

  return (
    <div>
      <h1>Users List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name} | Age: {user.age}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default UsersList;
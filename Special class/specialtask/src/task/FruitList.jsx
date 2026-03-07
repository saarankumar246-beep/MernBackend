import React from "react";

function FruitList() {

  // Array
  const fruits = ["Apple", "Mango", "Orange", "Banana"];

  return (
    <div>
      <h1>Fruit List</h1>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </div>
  );
}

export default FruitList;
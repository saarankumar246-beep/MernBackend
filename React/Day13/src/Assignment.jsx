import React from 'react'

const Assignment = () => {
  return (
    <div>
1. Functional Component Rendering

A function that returns JSX.

function App() {
  return <h1>Hello React</h1>;
}

export default App;
2. Rendering Variables

Store value in variable and display it.

function App() {

  const name = "Saaran";

  return (
    <h1>Hello {name}</h1>
  );
}

Output

Hello Saaran
3. Rendering Objects

Objects cannot render directly.
You must access properties.

function App() {

  const user = {
    name: "Saaran",
    age: 22
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
    </div>
  );
}
4. Rendering Arrays
function App() {

  const fruits = ["Apple", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
5. Rendering Array of Objects
function App() {

  const users = [
    {name:"John", age:25},
    {name:"Sara", age:22}
  ];

  return (
    <div>
      {users.map((user) => (
        <p>{user.name} - {user.age}</p>
      ))}
    </div>
  );
}
6. Rendering Nested Arrays
function App() {

  const numbers = [[1,2], [3,4]];

  return (
    <div>
      {numbers.map((arr) =>
        arr.map((num) => <p>{num}</p>)
      )}
    </div>
  );
}
7. Conditional Rendering

Render UI based on condition.

function App() {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  }

  return <h1>Please Login</h1>;
}
8. Ternary Operator (Boolean)

Short version of if-else.

condition ? true : false

Example:

function App() {

  const isLogin = true;

  return (
    <h1>
      {isLogin ? "Dashboard" : "Login Page"}
    </h1>
  );
}
9. Logical && Rendering

Render only if condition is true.

function App() {

  const isAdmin = true;

  return (
    <div>
      {isAdmin && <h1>Admin Panel</h1>}
    </div>
  );
}

If false → nothing renders.

10. Optional Chaining (Nested Objects)

Used to avoid error if object is undefined.

const user = {
  profile: {
    name: "Saaran"
  }
};

console.log(user.profile?.name);

Without ?.:

Cannot read property of undefined

With ?.:

undefined

Example in React:

<p>{user.profile?.name}</p>
11. Nullish Coalescing (??)

Used for default values when value is null or undefined.

value ?? defaultValue

Example:

const name = null;

console.log(name ?? "Guest");

Output

Guest

React Example:

<p>{user.name ?? "Guest User"}</p
    </div>
  )
}

export default Assignment

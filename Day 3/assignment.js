//Task 1 – Access by Index

const fruits = ["Apple", "Banana", "Mango", "Orange"];

// First fruit
console.log("First fruit:", fruits[0]);

// Last fruit
console.log("Last fruit:", fruits[fruits.length - 1]);

// Total number of fruits
console.log("Total fruits:", fruits.length);

//Task 2 – Modify Array Value

const colors = ["Red", "Green", "Blue"];

// Change "Green" to "Yellow"
colors[1] = "Yellow";

// Print updated array
console.log("Updated colors:", colors);

//Task 3 – Loop & Access

const numbers = [10, 20, 30, 40];

// Loop through array
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
  console.log("Square:", numbers[i] * numbers[i]);
}

//Task 4 – Nested Array Access

const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
];

// Access individual values
console.log("First person's name:", data[0][0]);
console.log("First person's age:", data[0][1]);

console.log("Second person's name:", data[1][0]);
console.log("Second person's age:", data[1][1]);

// Loop through nested array
for (let i = 0; i < data.length; i++) {
  console.log("Name:", data[i][0]);
  console.log("Age:", data[i][1]);
}

//Task 5 – Array of Objects

const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];

// Access first user's name
console.log("First user name:", users[0].name);

// Access second user's id
console.log("Second user id:", users[1].id);

// Loop through all users
for (let i = 0; i < users.length; i++) {
  console.log("ID:", users[i].id, "| Name:", users[i].name);
}

//Task 6 – Basic Property Access

const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
};

// Print name
console.log("Name:", student.name);

// Print course
console.log("Course:", student.course);

//Task 7 – Modify Property

const car = {
  brand: "BMW",
  year: 2020
};

// Update year
car.year = 2024;

// Add new property
car.color = "Black";

// Print updated object
console.log(car);

//Task 8 – Nested Object Access

const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

// Print city
console.log("City:", employee.address.city);

// Print pincode
console.log("Pincode:", employee.address.pincode);


//Task 9 – Object with Array

const product = {
  name: "Laptop",
  features: ["16GB RAM", "512GB SSD", "i7 Processor"]
};

// Print second feature
console.log("Second feature:", product.features[1]);

// Print total number of features
console.log("Total features:", product.features.length);


//Task 10 – Array of Objects (Simple Filter Logic)

const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];

// Using for loop
for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 50) {
    console.log(students[i].name);
  }
}
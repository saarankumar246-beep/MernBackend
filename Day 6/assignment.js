//1.

let cart = [];

cart.push("Laptop");
cart.push("Mobile");
cart.push("Headphones");

let removedItem = cart.pop();

console.log("Final Cart:", cart);
console.log("Removed Item:", removedItem);

//2.

let numbers = [10, 20, 30, 40];

let removedElement = numbers.shift();

numbers.unshift(5);

console.log("Updated Array:", numbers);
console.log("Removed Element:", removedElement);

//3.

let skills = ["HTML", "CSS", "JavaScript"];

if (!skills.includes("React")) {
  skills.push("React");
}

console.log(skills);

//4.

let numbers = [1, 2, 3, 4, 5];

let middle = numbers.slice(1, 4);

console.log(middle);

//5.

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 2, 100, 200);
console.log(arr2);

//6.

let a = [1, 2];
let b = [3, 4];
let combined = a.concat(b);
console.log(combined);

//7.

let tech = ["JS", "React", "Node"];
let result = tech.join(" - ");
console.log(result);

//8.

let nums = [5, 2, 9, 1, 7];

let asc = [...nums].sort((a, b) => a - b);
let desc = [...nums].sort((a, b) => b - a);

console.log("Ascending:", asc);
console.log("Descending:", desc);

//9.

let arr3 = [1, 2, 3, 4, 5];
arr3.reverse();
console.log(arr3);

//10.

let arr4 = [10, 20, 30, 40];
let value = 30;

let index = arr4.indexOf(value);

if (index !== -1) {
  console.log("Index:", index);
} else {
  console.log("Not Found");
}

//11.

let nums1 = [1, 2, 3, 4];

let result1 = nums1.map(num => num * 5);

console.log(result1);

//12.

let users = [
  { name: "Sudhan", age: 22 },
  { name: "Ravi", age: 25 }
];

let names = users.map(user => user.name);

console.log(names);

//13.

let nums2 = [10, 15, 20, 25, 30];

let filtered = nums2.filter(num => num > 20);

console.log(filtered);

//14.

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Mobile", price: 20000 }
];

let expensiveProducts = products.filter(product => product.price > 10000);

console.log(expensiveProducts);

//15.

let amounts = [100, 200, 300];

let total = amounts.reduce((sum, value) => sum + value, 0);

console.log(total);

//21.

let cart = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 }
];

// Get all product names
let names = cart.map(item => item.name);
console.log("Names:", names);

// Filter products above 5000
let above5000 = cart.filter(item => item.price > 5000);
console.log("Above 5000:", above5000);

// Calculate total price
let total = cart.reduce((sum, item) => sum + item.price, 0);
console.log("Total Price:", total);

// Check if any product below 3000 exists
let below3000 = cart.some(item => item.price < 3000);
console.log("Any product below 3000:", below3000);

//22.

let marks = [85, 72, 90, 34, 60, 28];

// Get all marks above 70
let above70 = marks.filter(mark => mark > 70);
console.log("Above 70:", above70);

// Check if all students passed (>=35)
let allPassed = marks.every(mark => mark >= 35);
console.log("All Passed:", allPassed);

// Find first failed student
let firstFail = marks.find(mark => mark < 35);
console.log("First Failed Mark:", firstFail);

// Calculate average mark
let average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
console.log("Average:", average);

//23.

let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = arr.filter((value, index, self) => self.indexOf(value) === index);

console.log(unique);

//24.

let users = [
  { name: "A", age: 22 },
  { name: "B", age: 25 },
  { name: "C", age: 22 },
  { name: "D", age: 25 }
];

let grouped = users.reduce((acc, user) => {
  if (!acc[user.age]) {
    acc[user.age] = [];
  }
  acc[user.age].push(user);
  return acc;
}, {});

console.log(grouped);

//25.

let nested = [[1, 2], [3, 4], [5]];

let flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
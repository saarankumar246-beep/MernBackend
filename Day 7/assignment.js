// template literals

const introduce = (name, city) => {
  return `Hi, I am ${name} from ${city}`;
};

console.log(introduce("Saaran", "Chennai"));

// destructuring

const user = {
  name: "Saaran",
  age: 22,
  city: "Chennai"
};

const { name, age } = user;

console.log(`${name} is ${age} years old`);

// Spread Operator

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merged = [...arr1, ...arr2];

console.log(merged);

// Rest Operator

const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1,2,3,4)); // 10


// Default Parameters

const greet = (name = "Guest") => {
  console.log(`Hello ${name}`);
};

greet();          // Hello Guest
greet("Saaran");  // Hello Saaran
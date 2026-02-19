//Declare three variables (var, let, const)

var name = "Saarankumar";
let age = 22;
const isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

//Undefined vs Null

let x;
console.log(x); // undefined

let y = null;
console.log(y); // null


//Data Types and typeof

let str = "Hello";
let num = 25;
let bool = true;
let big = 123456789012345678901234567890n;
let empty = null;
let notAssigned;

console.log(typeof str);        // string
console.log(typeof num);        // number
console.log(typeof bool);       // boolean
console.log(typeof big);        // bigint
console.log(typeof empty);      // object (this is a JS bug)
console.log(typeof notAssigned); // undefined

//Multiply values

let a = "10";
let b = "hello";

console.log(a * 2); // 20
console.log(b * 2); // NaN


//Convert "student name"

camelCase => studentName

PascalCase => StudentName

snake_case => student_name

kebab-case => student-name

//Arithmetic Operations

let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2
console.log(num1 % num2); // 0

//Assignment Operators

let value = 10;

value += 5;
console.log(value); // 15

value -= 3;
console.log(value); // 12

value *= 2;
console.log(value); // 24

value /= 4;
console.log(value); // 6


//Comparison

console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 != "10");   // false
console.log(10 !== "10");  // true


//Condition (age & hasID)

let age = 20;
let hasID = true;

if (age > 18 && hasID) {
  console.log("Eligible");
} else if (age < 18 || !hasID) {
  console.log("Not Eligible");
}


//Predict the Output

var a;
console.log(a); // undefined

a = 5;
console.log(a); // 5

console.log(typeof NaN);  // number
console.log(typeof null); // object

// Square

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += "* ";
  }
  console.log(row);
}

// Rectangle 

let rows = 4, cols = 6;

for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let j = 1; j <= cols; j++) {
    row += "* ";
  }
  console.log(row);
}

// Right triangle 

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Left triangle 

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  
  for (let space = 1; space <= n - i; space++) {
    row += "  ";
  }

  for (let star = 1; star <= i; star++) {
    row += "* ";
  }

  console.log(row);
}

// Inverted triangle 

let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Pyramid 

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= (2 * i - 1); star++) {
    row += "*";
  }

  console.log(row);
}

// Inverted pyramid 

let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= (2 * i - 1); star++) {
    row += "*";
  }

  console.log(row);
}

// Diamond 

let n = 5;

// Upper pyramid
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= (2 * i - 1); star++) {
    row += "*";
  }

  console.log(row);
}

// Lower inverted pyramid
for (let i = n - 1; i >= 1; i--) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= (2 * i - 1); star++) {
    row += "*";
  }

  console.log(row);
}

// Hollow square 

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "* ";
    } else {
      row += "  ";
    }
  }

  console.log(row);
}

// Hollow triangle

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    if (i === n || j === 1 || j === i) {
      row += "* ";
    } else {
      row += "  ";
    }
  }

  console.log(row);
}

// Reverse a string (without built-in)

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello")); // olleh

// Reverse a number

function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
}

console.log(reverseNumber(1234)); // 4321

// Check palindrome (string)

function isPalindromeString(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindromeString("madam")); // true

// Check palindrome (number)

function isPalindromeNumber(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reversed;
}

console.log(isPalindromeNumber(121)); // true

// Find factorial

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120

// Fibonacci series

function fibonacci(n) {
  let a = 0, b = 1;

  for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

fibonacci(7);
// 0 1 1 2 3 5 8

// Check prime number

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false


// Print all primes till n

function printPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(20);
// 2 3 5 7 11 13 17 19


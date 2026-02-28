// task-1

function createProfile(user) {
  const { name, age, role = "User" } = user;

  return `${name} is ${age} years old and works as ${role}`;
}

// Example usage
console.log(createProfile({ name: "Sudhan", age: 22 }));

// task-2

const calculateTotal = (discount, ...prices) => {
  const total = prices.reduce((sum, price) => sum + price, 0);
  
  const finalAmount = total - (total * discount / 100);
  
  return finalAmount;
};

// Example
console.log(calculateTotal(10, 100, 200, 300));

// task-3

const createUser = (key, value) => {
  return {
    [key]: value,
    display() {     
      console.log(`${key}: ${value}`);
    }
  };
};

// Example
const user = createUser("role", "Admin");

console.log(user);     // { role: "Admin", display: [Function] }
user.display();        // role: Admin

// task-4

const users = [
  { name: "A", marks: 80 },
  { name: "B" },
  { name: "C", marks: 60 }
];

const result = users.map(user => {
  const marks = user.marks ?? 0;  
  return `${user.name} scored ${marks}`;
});

console.log(result);
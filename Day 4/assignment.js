// 1.Show 3 examples where implicit coercion gives unexpected results. Explain why.

// first example

console.log([] + []); 
// Output: ""

// second example

console.log([] + {}); 
// Output: "[object Object]"

// third example

console.log(0 == false);
// Output: true

// 2.Write a function calculateTotal(price, qty) where inputs are strings. Convert them explicitly before calculation.

function calculateTotal(price, qty) {
  const numericPrice = Number(price);
  const numericQty = Number(qty);

  return numericPrice * numericQty;
}

console.log(calculateTotal("100", "3"));
// Output: 300

// 3.Demonstrate difference between == and === using 5 comparison examples.

//Number vs String

console.log(5 == "5");   // true
console.log(5 === "5");  // false

//Boolean vs Number

console.log(1 == true);   // true
console.log(1 === true);  // false

//0 vs false

console.log(0 == false);   // true
console.log(0 === false);  // false

//null vs undefined

console.log(null == undefined);   // true
console.log(null === undefined);  // false

//Empty String vs 0

console.log("" == 0);   // true
console.log("" === 0);  // false

// 4.Demonstrate difference between == and === using 5 comparison examples.

function checkTruthyFalsy(value) {
  const booleanValue = Boolean(value); // explicit conversion

  if (booleanValue) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}

console.log(checkTruthyFalsy(1));        // "Truthy"
console.log(checkTruthyFalsy(0));        // "Falsy"
console.log(checkTruthyFalsy("hello"));  // "Truthy"
console.log(checkTruthyFalsy(""));       // "Falsy"
console.log(checkTruthyFalsy(null));     // "Falsy"
console.log(checkTruthyFalsy([]));       // "Truthy"
console.log(checkTruthyFalsy({}));       // "Truthy"
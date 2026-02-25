//array methods that run in shallow copy

//slice()

const arr = [{name: "Saaran"}];

const copy = arr.slice();

copy[0].name = "Kumar";

console.log(arr[0].name); // Kumar 

//Spread Operator ....

const arr = [{name: "Saaran"}];

const copy = [...arr];

copy[0].name = "Kumar";

console.log(arr[0].name); // Kumar

//concat()

const arr = [{name: "Saaran"}];

const copy = arr.concat();

copy[0].name = "Kumar";

console.log(arr[0].name); // Kumar

//map()

const arr = [{name: "Saaran"}];

const copy = arr.map(item => item);

copy[0].name = "Kumar";

console.log(arr[0].name); // Kumar



//array methods that run in shallow copy

//structuredClone()

const arr = [{name: "Saaran"}];

const deepCopy = structuredClone(arr);

deepCopy[0].name = "Changed";

console.log(arr[0].name); // "Saaran"

//JSON.parse(JSON.stringify())

const arr = [{name: "Saaran"}];

const deepCopy = JSON.parse(JSON.stringify(arr));

deepCopy[0].name = "Changed";

console.log(arr[0].name); // "Saaran"

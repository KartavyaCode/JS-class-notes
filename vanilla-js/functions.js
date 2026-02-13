function first() {
  console.log("not my first function");
}

function multiplyTwoNumbers() {
  let carName = "volvo";
  console.log(typeof (carName)); // string
  console.log(typeof carName);
}

function anotherFunction() {
  return "hello";
}
console.log(anotherFunction());

anotherFunction; // this is function referring itself (returns a function)
anotherFunction(); // refers to the function result and returns the result

function defaultValue(a, b = 10) {
  return a + b;
}
let add = defaultValue(5); // automatically b ki value le li jo predefined thi

let x;
function addValue(a, b) {
  x = a + b;
}
let result = addValue(4, 5);
console.log(result); // output is undefined (if a function does not return a value, the return value will be undefined)

// using return to stop a function
function age(age) {
  if (age < 18) {
    return "young";
  }
  return "old";
}
let result2 = age(16);

function mul(a, b) { // these types of functions are standard functions
  return a * b;
}
let result3 = mul(5); // results in NaN (not NaN()) as value of b is not given
console.log(result3);

// a function expression is a function that is stored in a variable
const multiply = function(a, b) { // function expressions are used to create anonymous functions. Here, the variable name itself is used to call the function
  return a * b;
}; // NOTE: yaha bhi semicolon lagega

// function expression in a single line
const diff = function(a, b) { return a - b };

let z = multiply(4, 5); // call ye bhi waise hi hoga bhale hi ye function expression ho
// both functions work in the same way, the only difference is in the time that they're generated in the code or smth --> Learn more about it

// arrow functions
const add2 = (a, b) => {
  return a + b;
};// allows a shorter syntax to the function expression (ES6 mei introduce hua tha ye, btw, which is the latest js version). Commonly used in modern JS. SEMICOLON yaad rakhna again!

const hello = (val) => {
  return "hello" + val;
};
hello("world");

function test() {
  return 5;
}

let a = test; // [Function: test] is it's unique output
let b = test();
console.log(a, b);


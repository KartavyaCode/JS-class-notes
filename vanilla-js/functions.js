function first() {
  let carName = 'volvo';
  console.log('not my first function', carName);
  return 'hello';
}
first(); // calling the function, just outputs the result of log statements, not the return value
console.log(first()); // returns the return value along with the output of log statements
console.log(first); // [Function: first]

function defaultValue(a, b = 10) {
  return a + b;
}
// storing output obtained from functions in variables
let add = defaultValue(5); // automatically b ki value le li jo predefined thi
let add3 = defaultValue(5, 11); // modify kardi b ki value
console.log(add, add3);

let x;
function addValue(a, b) {
  x = a + b;
  return x;
}
let result = addValue(4, 5);
console.log(result);
// if a function does not return a value, the return value will be undefined)

// using return to break out of a function
function age(age) {
  if (age < 18) {
    return 'young';
  }
  return 'old';
}
let result2 = age(16);

// Types of functions

// 1. standard functions
function mul(a, b) {
  return a * b;
}
let result3 = mul(5); // results in NaN (not `NaN()`) as value of b is not given
console.log(result3);

// a function expression is a function that is stored in a variable
// they are used to create anonymous functions. Here, the variable name itself is used to call the function
const multiply = function (a, b) {
  return a * b;
}; // NOTE: yaha bhi semicolon lagega

// function expression in a single line is also possible (my prettier just corrected it though!)
const diff = function (a, b) {
  return a - b;
};
let z = multiply(4, 5); // call ye bhi waise hi hoga

// arrow functions
// allows a shorter syntax to the function expression. Commonly used in modern JS.
const add2 = (a, b) => {
  return a + b;
}; // SEMICOLON yaad rakhna again!

const hello = (val) => {
  return 'hello' + val;
};
hello('world');

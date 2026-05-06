/*
// function hoisting (call pehle karliya, declare baad mei kiya)
// functions are hoisted in javascript
greet(); // outputs "Hello"
function greet() {
  console.log("Hello");
}
*/

/*
// function expresssion hoisting
greet(); // function expression ke case mei, it results in a TypeError
var greet = function () {
  console.log("Hello");
};
*/ 

/*
var x = 1; // global variable
function test() {
  console.log(x); // undefined
  var x = 2; // function ke andar ki gayi variable declaration, function ke top par chali jati hai aur global variable ki value is erased, this is why you get 2
  // ye upar chala jayega without the value and value of x will be undefined (assignment isi line mei hoyegi)
  // agar ye line comment kardo, toh value will remain 5
  console.log(x); // 2
}
test();
*/

/*
let x = 5; // global variable
function test() {
  console.log(x); // results in 5 only
  x = 10;
}
test();
*/

/*
let x = 5; // global variable
function test() {
  console.log(x); // ReferenceError: Cannot acces 'a' before initialization
  let x = 10;
  console.log(x); // 10
}
test();
*/

/*
function calculate() {
  if (true) {
    var total = 10; // var is function scoped
  }
  console.log(total); // therefore yaha 10 aayega
}
calculate();
*/

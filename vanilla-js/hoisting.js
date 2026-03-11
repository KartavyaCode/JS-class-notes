// Hositing means function ko declare karna usko define karne se pehle

// var hoisting
/*
console.log(a); // var ne output undefined diya, isliye woh bhi hoisted tha
var a = 5;
console.log(a); // 5
var a; // a ki value abhi bhi 5 hi rahi as use koi value nahi di tumne
console.log(a);  // abhi bhi 5 hi aayega, not undefined!
*/

/*
// let hoisting
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10; // is placed in a zone called TDZ (Temporal Dead Zone)
*/

/*
// const hoisting
console.log(a); // ReferenceError (just like in let)
const a = 10;
*/

/*
// function hoisting (call pehle karliya, declare baad mei kiya)
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
foo(); // placeholder function name (outputs "hello")
function foo() {
  console.log("hello");
}
  
anotherFoo(); // TypeError
var anotherFoo = function () {
  console.log("hello");
};
*/

/*
var x = 5; // global variable
function test() {
  console.log(x);
  var x = 10; // ye upar chala jayega without the value and value of x will be undefined
  // agar ye line comment kardo, toh value will remain 5
}
test();
*/

function hello() {
  console.log(a); // is case mei undefined aayega
  var a = 2; // assignment isi line mei hoyegi
}

/*
let x = 5; // global variable
function test() {
  console.log(x); // results in 5 only
  x = 10;
}
test();
*/

/*
let a = 1;
{
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5;
}
*/

/*
console.log(typeof x); // undefined (object nahi aayega cause x declare hi nahi hua)
var x = 5;
*/

/*
var x = 1;
function test() {
  console.log(x); // undefined
  var x = 2; // function ke andar ki gayi variable declaration, function ke top par chali jati hai aur global variable ki value is erased, this is why you get 2
  console.log(x); // 2
}
test();
*/

/*
let x = 1;
function test() {
  console.log(x); // ReferenceError
  let x = 2;
  console.log(x); // 2
}
test();
*/

/*
let x;
console.log(x); // undefined
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

/*
console.log(a);
let a = 5; // let ke case mei reference error
*/
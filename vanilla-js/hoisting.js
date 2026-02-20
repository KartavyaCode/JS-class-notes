// Hositing means function ko declare karna usko define karne se pehle
console.error("error");

/*
// var hoisting
console.log(a); // var ne output undefined diya, isliye woh bhi hoisted tha
var a = 5;
console.log(a);

var a;
console.log(a);  // abhi bhi 5 hi aayega, not undefined!
a = 5;
console.log(a);
*/

/*
// let hoisting
console.log(a); // let ke case mei error aayega, reference error
let a = 10; // Is placed in a zone called TDZ (Temporal Dead Zone)
*/

/*
// const hoisting
console.log(a); // const ke case mei bhi ReferenceError aayega
const a = 10;
*/

// function hoisting (call pehle karliya, declare baad mei kiya)
greet(); // outputs "Hello"
function greet() {
  console.log("Hello");
}

// function declarations are fully hoisted, therefore function declarations can be called before they are defined.
// But function expression cannot be called before they are defined
// function declarations are hoisted to the top of their scope, this means that you can call a function before it defines a code.

// function expresssion hoisting
greet(); // function expression results in a TypeError
var greet = function () {
  console.log("Hello");
};

// have to memorise these error names for the examinations
// let and const hoisted tha but accessible nahi tha before declaration
// function definition is both hoisted and accessible before declaration
// function expression is partially hoisted but not accessible before declaration

// one more point of difference between function definition and function expression

foo(); // js conventional function name
function foo() {
  console.log("hello");
}

anotherFoo(); // TypeError
var anotherFoo = function () {
  console.log("hello");
};

var x = 5; // global variable
function test() {
  console.log(x);
  var x = 10;
}
test();

let a = 1;
{
  console.log(a);
  let a = 5;
}
// ReferenceError

console.log(typeof x); // undefined (object nahi aayega cause x declare hi nahi hua)
var x = 5;

var x = 1;
function test(){
  console.log(x); // undefined
  var x = 2; // function ke andar ki gayi variable declaration, function ke top par chali jati hai aur global variable ke value ko bhula deti hai, this is why you get 2
  console.log(x); // 2
}
test();

let x = 1;
function test() {
  console.log(x); // ReferenceError
  let x = 2;
  console.log(x); // 2
}
test();

// pata nahi bhai
let count = 0;
function countVar(){
  if(count != 0){
    count++;
  }
}

function calculate() {
  if (true) {
    var total = 10; // var is function scoped
  }
  console.log(total); // therefore yaha 10 aayega
}
calculate();

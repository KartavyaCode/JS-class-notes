/*
function myfunction1(){ // example of local scope
  let a = 5;
  return a*a;
}

let a = 5; // can be accessed anywhere in code
function myfunction2(){ // example of global scope
  return a*a;
}
*/

// Example of closure
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count); // btw js mei log automatically \n daal deta without you having to manually do it.
  }
  return inner; // the inner function is returned from the outside function and the local variables are disappeared after the function execution. But count ki value still preserved rahi and this is called closure. It was stored in the lexical environment.
}
const add = outer(); // ek variable ke andar function ko store kiya hai, par woh function ban ja rha hai as woh parent scope ko access kar rha hai.
// It is possible for a function to have private variables
add(); // variable ko call kiya hai
add(); // here add() is a closure function

function outer() {
  let x = 5;
  return function () {
    return x;
  };
}
const fn = outer();
console.log(fn()); // outputs 5

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const c = counter();
c(); // outputs 1
c(); // outputs 2

function outer() {
  let data = "Important";
  return function () {
    console.log("Accessing data");
  };
}
//const fn = outer(); // fn is a closure
//console.log(fn());

function test() {
  let x = 10;
  return function (y) {
    return x + y;
  };
}
//const add = test();
console.log(add(5)); // outputs 15

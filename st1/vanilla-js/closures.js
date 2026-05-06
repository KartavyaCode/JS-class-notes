/*
function myfunction1(){ // example of local scope
  let a = 5; // this can't be accessed anywhere outside this function
  return a*a;
}

let a = 5; // can be accessed anywhere in code
function myfunction2(){ // example of global scope
  return a*a;
}
*/

function outer1() {
  let count = 0;
  function inner1() { // here inner is nothing but a closure function
    count++;
    console.log(count);
  }
  return inner1; // the inner function is returned from the outer function and the local variables are disappeared after the function execution. But count ki value is still preserved due to the concept of closure.
  // The value of count is stored in the lexical environment.
}
const add = outer1(); // variable ke andar function ko store kiya
add(); // variable ko hi call kar diya since now it's a function
add(); // here add() is a closure function

function outer2() {
  let x = 5;
  return function () {
    return x;
  };
}
const fn = outer2();
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

function outer3() {
  let data = "Important";
  console.log(data);
  return function () {
    console.log("Accessing data");
  };
}
const fn1 = outer3(); // fn is a closure
console.log(fn1());

function test() {
  let x = 10;
  return function (y) {
    return x + y;
  };
}
const add1 = test();
console.log(add1(5)); // outputs 15

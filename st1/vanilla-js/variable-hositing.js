// var hoisting
/*
console.log(a); // var outputs undefined, therefore it is hoisted
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
const a = 10; // also in TDZ
*/

/*
console.log(typeof x); // undefined (object nahi aayega cause x declare hi nahi hua)
var x = 5;

let x;
console.log(x); // undefined (no error in this case)
*/
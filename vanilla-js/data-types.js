console.log("Hello");
// single line comment
/* multi-line comment */

var n = 5;
console.log(n);
var n = 20; // var ko aise redeclare kiya ja sakta hai
console.log(n);

let a = 10;
a = 20;
// let a = 20; // you can't do this unlike var

let s = "hello"; // dono single quotes and double quotes both can be used

// Primitive data types
let bool = true;
let abc; // if you log it, you'll get undefined output
console.log(abc);
let b = null;
let sym = Symbol("unique");
let bigint = 14949249223434n; // represents an integer larger than the number n

// Using let
let x = 5;
let y = 6;
let z = x + y;
console.log("The value of sum is :", z);

let _x = 4;
let _100 = 15;
console.log(_x + _100);

// Declaring multiple variables at once with their values
let person = "John Doe", carName = "Volvo", price = 200;
console.log(person, carName, price);


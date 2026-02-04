console.log("Hello"); // this is external js
// single line comment
/* multi-line comment*/

var n = 5;
console.log(n);
var n = 20; // var ko aise redeclare kiya ja sakta hai
console.log(n);

let n = 10;
n = 20;
let n = 20; // you can't do this unlike var

let s = "hello";
let another_s = "hello"; // dono single quotes and double quotes both can be used

// Primitive data types
let bool = true;
let abc; // undefined output ig
let n = null;
let sym = Symbol("unique");
let bigint = 14949249223434n; // represents an integer larger than the number n

function first() {
  console.log("not my first function");
}

// Using let
let x = 5;
let y = 6;
let z = x + y;
console.log("The value of sum is :", z);

/*
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter, a $ sign or an underscore (_).
Names are case sensitive (X is different from x).
Reserved words (JavaScript keywords) cannot be used as names.
JavaScript treats underscore as a letter.
*/

let _x = 4;
let _100 = 15;
console.log(_x + _100);

// JavaScript also treats a dollar sign as a letter.
// Declaring
let person = "John Doe",
  carName = "Volvo",
  price = 200;
console.log(person, carName, price);

/*
        Scope	  Redeclare	  Reassign	  Hoisted	  Bindsthis
  var	   No	    Yes	          Yes	        Yes	     Yes
  let	  Yes	    No	          Yes	        No	      No
const	  Yes	    No	          No	        No	      No
*/

// let is function scope and var is block scope

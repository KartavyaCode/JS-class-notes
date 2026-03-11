console.log("Hello");
// single line comment
/* multi-line comment */

var n = 5;
console.log(n);
var n = 20; // var ko aise redeclare kiya ja sakta hai
console.log(n);

let a = 10;
a = 20;
//let a = 20; // you can't redeclare let unlike var (you'd get SyntaxError)

let s = "hello"; // both single and double quotes both can be used

// Primitive data types
let bool = true;
console.log(bool);
console.log(typeof bool);

let abc;
console.log(abc); // undefined
console.log(typeof abc);

let b = null;
console.log(b); // null
console.log(typeof b); // object

let sym = Symbol("unique");
console.log(sym); // Symbol(unique)

let bigint = 14949249223434n; // represents an integer larger than the number n
console.log(bigint);

// Using let
let x = 5;
let y = 6;
let z = x + y;
console.log("The value of sum is:", z); // the comma in between automatically inserts a space

// variable naming
let _x = 4;
let _100 = 15;
console.log(_x + _100);

// Declaring multiple variables at once with their values is also possible in JS like done below
let person = "John Doe", carName = "Volvo", price = 200;
console.log(person, carName, price);

console.log(1 + "2" + 3); // converts string to number
console.log([] + {}); // Output: [object Object], because everthing is an object in JS
console.log(typeof(Null)); // undefined, kyunki Null is not a valid data type, it is a placeholder here
console.log(typeof(null)); // object
console.log(typeof(NaN)); // number
console.log(typeof(10n)); // bigint
console.log(Boolean([])); // outputs true kyunki usne object bana liya apparently
console.log(typeof(typeof(1))); // string

// Object is not a primitive data type
// symbol allows you to create unique identifiers
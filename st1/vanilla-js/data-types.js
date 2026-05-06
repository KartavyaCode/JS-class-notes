// single line comment
/* multi-line comment */

var n = 5;
var n = 20; // var ko aise redeclare kiya ja sakta hai

let a = 10;
a = 20;
console.log(typeof a);
//let a = 20; // you can't redeclare let unlike var (you'd get SyntaxError)

let float = 3.99;
console.log(typeof float);

let s = "hello"; // both single and double quotes both can be used
let anotherS = 'hello';
console.log(typeof anotherS);

// Primitive data types
let bool = true;
console.log(bool);
console.log(typeof bool);

let abc;
console.log(abc); // undefined
console.log(typeof abc);

let b = null;
console.log(b); // null
console.log(typeof b);

let sym = Symbol("unique");
console.log(sym); // Symbol(unique)
console.log(typeof sym);

let bigint = 14949249223434n; // represents an integer larger than the number n
console.log(bigint);
console.log(typeof bigint);

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
console.log([]); // []
console.log({}); // {}
console.log([] + {}); // Output: [object Object]
console.log(typeof(Null)); // undefined, kyunki Null is not a valid data type, it is a placeholder here
console.log(typeof(NaN)); // number
console.log(typeof(10n)); // bigint
console.log(Boolean([])); // outputs true kyunki humne casting kardi
console.log(typeof(typeof(1))); // string

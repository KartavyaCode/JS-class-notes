// JS operators are symbols or keywords used to perform operations on values and variables
// 12 types of operators in JS

// 1) arithmetic operators (+, -, *, /, %)
const mul = 5 * 3; // using the const keyword as a demonstration
const div = 5 / 3;

// 2) assignment operators (=, +=, -=, *=, /=) are used to assign value of operator
// += adds and assigns the result to the variables
let n = 10;
n += 5;
n *= 2;
console.log(n);

// 3) comparison operators (<, >, <=, >=) --> output is in boolean form
console.log(10 > 5); // results in true
console.log(10 === '10'); // results in false cause it checks strict equality (i.e. both type and value)

// 4) logical operators (determine the equality and difference between the value) --> Truth table ke basis pe output nikalta hai
// Logical AND, OR, NOR in sabke truth tables pata hone chahiye
const a = true, b = false;
console.log(a && b);
console.log(a || b);

// 5) BITWISE operators perform binary operations on the numbers
/*
BIWTISE AND &
BIWTISE OR |
BIWTISE XOR ^
BIWTISE NOT ~
*/

// 6) Ternary operators are shorthand for conditional statements. It takes 3 operands (returns values based on a condition)
// syntax: condition?Expression1:Expression2;
const age = 18;
const eligible = age >= 18 ? "Adult" : "Minor"; // DANG! If age>=18 then "Adult" otherwise "Minor"
console.log(eligible);

// 7) Comma operator mainly evaluates it's operands from L to R and returns the value of the rightmost operand
let n1, n2;
const abc = (n1 = 1, n2 = 2, n1 + n2); // the final expression is the rightmost value
console.log(abc);

// 8) Unary operator - operates on a single operand --> Like pre-increment, post-decrement operators

// 9) Relational operator - compare/determine the relations between the operands. It too returns in boolean
const obj = { length: 10 };
console.log("length" in obj); // in operator
console.log([] instanceof Array); // instanceof operator

// 10) Bigint operators
const big1 = 1234384834837843n;
const big2 = 38473847387483n;
console.log(big1 + big2);

// 11) String operator (for concatenation)
const s = "Hello" + " " + "world";
console.log(s);

// 12) Chaining operator (symbol - ?.) --> It allows safe access to deeply nested properties without throwing an error if the property does not exist.
const obj2 = { "name": "Amit", "address": { "city": "Delhi" } };
console.log(obj2.address?.city);
console.log(obj2.address?.phone); // undefined, does not throw an error

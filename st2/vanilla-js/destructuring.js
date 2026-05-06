/*
Destructuring is an ES6 feature
It allows unpacking values from arrays and objects into variables.
It makes code cleaner and more readable
Destructuring simplifies data extraction
*/

// Array Destructuring - used to extract values from arrays and assign them to variables in a single line
/*
values are assigned based on position and can be skipped using commas
useful for swapping variables and handling function returns
*/
let [a, b] = [10, 20];
let fruits = ['Apple', "Banana", "Mango"];
let [c, , e] = fruits; // Banana is skipped

// Object Destructuring - used to extract properties from objects into variables
/*
order does not matter
variable names must match object keys
supports default values and renaming
*/
let person = {
  name: "John",
  age: 25
}; // don't forget the semicolon

let {name, age} = person;
let {name: username} = person;

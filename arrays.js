/*
An array is a non-primitive object data type that is designed for storing the data collections.
The key characteristics of JS arrays are
1. elements: An array is a list of values known as elements,
2. ordered: Array elements are ordered based on their index,
3. zero-index: self-explanatory,
4. dynamic size: Arrays can grow or shrink as elements when elements are added or removed,
5. heterogeneous: arrays can store elements of different data types.
Arrays are used to store values in a single variable.
However, if you want to loop through the cars and find a specific one, use arrays. WHATEVER!
Assess array values through index numbers.
It is a common practice to declare an array with const keyword
In arrays, spaces and line breakups are not important in array. A declaration can span upto multiple lines (woh toh prettier thik kar deta hai).
Yes it is possible to create an empty array and provide elements later
*/

const cars = ["A", "B", "C"];
console.log(cars);
// document.getElementById("").innerHTML = cars;

// creating an empty array (this is array literal method)
const cars2 = [];
cars2[0] = "A";
cars2[1] = "B";
console.log(cars2[2]);

// using the new keyword
const cars3 = new Array("A", "B", "C");

// the above two examples do exactly the same. There is no need to use the new keyword. I doubt that
// For simplicity, execution speed and readability, use array literal method.

// assessing arrays using index number
let car = cars[0];
// changing an array element
cars[1] = "D";

// converting an array into a string
// the JS method toString(). It converts an array to a string of (separated comma array values)
console.log(cars.toString()); // A,D,C (without square brackets)

// Arrays are special type of objects. The typeof operator in js returns 'object' for an array. But JS arrays are best described as arrays (uses numbers to index elements).
  // In contrast, object uses names to assess its members
console.log(typeof(cars));

// objects
const people = {
  firstName: "Ram",
  lastName: "Sharma",
};
console.log(people.firstName); // returns "Ram"

// Array elements can be objects?
// JS variables can be objects but arrays are special kind of objects, because of this, you can have variables of different types in the same array. you can have objects, functions in array or you can have arrays in array

const obj = [];
obj[0] = Date.now; // an object
obj[1] = myFunction; // a function
obj[2] = myCars; // an array

// array properties and methods. The built-in properties and methods of arrays in js are their real strength.
// length property (returns the length of an array i.e. the number of elements in an array)
let length = cars.length; // methods ke saath () hote hai, not with properties!
// the length properties always gives value one more than the highest array index
// assessing the last element
let last = cars[cars.length - 1];

// looping the array elements
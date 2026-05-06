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

// _____________________ //

// Array properties and methods. The built-in properties and methods of arrays in js are their real strength.

const fruits = ['A', 'B', 'C', 'D']; // reference array
const games = ['G', 'H', 'I'];
const nums = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // concatenated arrays

// length property (returns the length of an array i.e. the number of elements in an array)
// methods ke saath () lagte hai, not with properties! Here length is a property
// the length properties always gives value one more than the highest array index
let length = fruits.length;

// assessing the last element
let last = cars[cars.length - 1];

// adding array elements
// The easiest way to add a new element to an array is using the push method
fruits.push('D');

// A new element can also be added to an array using the length property
fruits[fruits.length] = 'E'; // here "E" is the new value that you want to add

fruits[6] = 'D'; // 3, 4, 5 index par undefined aa jayega as waha par kuch define hi nahi kiya hai. No error.
// Adding elements with higher indexes can created undefined wholes in an array

// pop method removes last element from the array
let ab = fruits.pop();

// at() was introduced in ES2022
// the at() method returns an indexed element from an array, it returns the same as if you used []
let ac = fruits.at(1); // to get value of element at index 1

let ad = fruits[2]; // iska output kya aayega

// shift method: removes the first array element and shifts all the array elements to the lower index.
// the unshift method adds a new element to the beginning and shifts the other array elements to higher indexes
let ae = fruits.shift();
let af = fruits.unshift('D'); // here "D" is the new array element

// isArray() was introduced in ECMAScript5 which was made in 2009
// It tells whether a given object is an array or not
Array.isArray(fruits); // outputs true

// using delete() method leaves undefined holes in the array
delete fruits[0]; // ab A ki jagah undefined aa jayega, hence iske bajaye pop or shift use karna chahiye to avoid having holes

// merging the arrays (concatenation) --> makes a new array by merging other two into it
const ag = fruits.concat(cars, games);

// copyWithin() method copies array element to another position of an array. Like copy to index 2 from index 0
// The copyWithin() method overrides the existing values. It does not add items to the arrays. It does not change the length of the array.
// copy from 0 to before 2 and past at 2
fruits.copyWithin(2, 0); // matlab 0 ke baad se 2 tak copy karna hai aur 2 ke baad paste kar dena hai, maybe
fruits.copyWithin(2, 0, 2); // here the last 2 acts as a stoppage
// outputs ["A", "B", "A", "B"];

// the flat() method creates a new array with subarray elements and concatenate it to a specific length. WTF
// flat() ECMA2019 mei introduce hua tha
const ah = fruits.flat();

// flatMap() method first maps all the elements of an array then creates a new array by flattening the array
const ai = fruits.flatMap((x) => [x, x * 10]); // arrow function
// Output: [1, 10, 2, 20, 3, 30, 4, 40]

// splicing and slicing of an array
// splice adds new element into array and slice extracts pieces from an array
fruits.splice(2, 0, 'D', 'E'); // 2 defines the position of new element, 0 means how many elements should be removed. No element is removed in this case
// Output: [1, 2, "D", "E", 3, 4]
fruits.splice(2, 2, 'D', 'E');
// Output: [1, 2, "D", "E"]

// slice slices out a piece of the array into a new array
const aj = fruits.slice(1); // 1 se slice kar dega, i.e. [2, 3, 4] naya array bana dega. Picks up pieces from an existing array

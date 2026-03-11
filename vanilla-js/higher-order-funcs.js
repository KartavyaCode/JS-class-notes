/*
// map is a transformation function
// purpose: transforms each element of an array and returns a new array
const result = num.map(x=>x*2); // arrow function used
console.log(result);
// It does not modify the original array and always returns a same length array. It is used for transformation.
*/
const num = [1, 2, 3];
const result = num.map(x => x>2); // [undefined, undefined, undefined]
const another = num.filter(x => x>2);
setTimeout(() => {
  console.log("hello");
}, 1000);

/*
// filter is a selection function. It selects the element based on a condition and returns a new filtered array.
const num = [1, 2, 3, 4];
const result = num.filter(x=>x>2); // arrow function used (.map lagane se true, false type aata hai)
console.log(result);
// It returns subset of the original array.
// Output array length may differ from the initial array length
// Used for condition based selection
*/

/*
// setTimeout() --> is an asynchronous higher order function
// Purpose - it executes the function after a specified delay
setTimeout(() => {
  console.log("Hello");
}, 1000); // after 1 sec, this seems like 1000ms
// It takes a function as an argument and executes it later asynchronously and uses event loop mechanism
*/

console.log([1, 2, 3].map((x) => x + 1)); // outputs [2, 3, 4]
console.log(
  [1, 2, 3].map((x) => {
    x * 2;
  }),
); // curly braces lagne se ye function ban gaya aur iski return statement hai nahi toh returns [undefined, undefined, undefined]

console.log([5, 10, 15].filter((x) => x > 10)); // 15
// if no condition is satisfied in filter, it returns an empty array

setTimeout(() => console.log("Hello"), 0); // bhai ye toh sabse end mei execute ho raha hai
console.log("World"); // outputs "World" and then "Hello" even if delay is 0 (due to event-loop)

console.log([1, 2, 3, 4].filter((x) => x % 2 === 0).map((x) => x * 3)); // outputs [6, 12]

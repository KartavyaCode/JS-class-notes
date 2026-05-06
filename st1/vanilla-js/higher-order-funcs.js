// map
const num = [1, 2, 3];
const result = num.map((x) => x * 2); // arrow function used
console.log(result); // [2, 4, 6]

const result1 = num.map((x) => x > 2); // map is not used to check conditions, it is rather a transformation function
console.log(result1); // [false, false, false]

console.log([1, 2, 3].map((x) => x + 1)); // outputs [2, 3, 4]
console.log(
  [1, 2, 3].map((x) => {
    x * 2;
  }),
); // curly braces lagne se ye function ban gaya aur iski return statement hai nahi toh returns [undefined, undefined, undefined]

// filter
const num1 = [1, 2, 3, 4];
const result2 = num1.filter((x) => x > 2);
console.log(result2);

console.log([5, 10, 15].filter((x) => x > 10)); // 15

// setTimeout
setTimeout(() => {
  console.log('Hello');
}, 1000); // after 1 sec or 1000ms, the output is shown

setTimeout(() => console.log("Hello"), 0); // executes at the very end even if the delay time is 0ms (due to event-loop)
console.log("World"); // outputs "World" and then "Hello"


// a slightly more complex expression
console.log([1, 2, 3, 4].filter((x) => x % 2 === 0).map((x) => x * 3)); // outputs [6, 12]

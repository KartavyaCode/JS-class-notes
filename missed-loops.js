arr = ["A", "B", "C"];
for (let i in arr) { // for in returns the index value, used for iterable
  console.log(i);
}

for (let v of arr) { // for of returns the values
  console.log(v);
}

console.log(1 + "2" + 3); // converts value to number
console.log([] + {}); // Output: [object Object], because everthing is an object in JS

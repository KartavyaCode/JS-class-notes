// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
let x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

// do-while loop
x = 1;
do {
  console.log(x);
  x++
} while (x <= 10);

// for-in loop
arr = ["A", "B", "C"];
for (let i in arr) { // for in returns the index value, used for iterable
  console.log(i);
}

// for-of loop
for (let v of arr) { // for of returns the values
  console.log(v);
}

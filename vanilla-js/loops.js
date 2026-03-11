// for loop
for (let i = 1; i <= 10; i++) {
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
  x++;
} while (x <= 10);


// The upcoming loops are used with iterables
// for-in loop
arr = ["A", "B", "C"]; // let wagarah likhne ki zarurat nahi hoti by default, but it is a good practice to do it anyways. You know READABLE code
for (let i in arr) { // for in returns the index values
  console.log(i);
}

// for-of loop
for (let v of arr) { // for of returns the values themselves
  console.log(v);
}

// foreach nahi aayega shayad as per cho
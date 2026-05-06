// prog1
var student_name = "Amit";
let age = 18;
const COURSE = "Computer Science";
console.log("Student name: ", student_name);
console.log("Student age: ", age);

// prog2
let num1 = 9;
let num2 = 12;
let sum = num1 + num2;
console.log(sum);

num1 *= 5;
console.log(num1);
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 !== num2);

// prog6 (pre-increment and post-increment)
let x = 5;
console.log(x);
console.log(x++); //5
console.log(++x); //7
console.log(++x, x++); //8 8
console.log(x); //9

// prog7
let op_num = 1;
const NUM1 = 2;
const NUM2 = 6;
let result;
if (op_num == 1) {
  result = NUM1 + NUM2;
  console.log(result);
} else if (op_num == 2) { // elif nahi hota in js
  result = NUM1 - NUM2;
  console.log(result);
}

// prog8
console.log(typeof NUM1);
console.log(typeof (typeof NUM1)); // string, hence these outputs are in string format which actually makes them usable!!
console.log(typeof student_name);

// prog9 (already done somewhere)

// prog 10
// swapping using a temp variable
let a = 1;
let b = 2;
let c;
console.log(a, b);

c = b; //2
b = a; //1
a = c; //2
console.log(a, b);

// swapping without a temp variable
let a1 = 1;
let b1 = 2;
console.log(a1, b1);

a1 = a1 + b1; // 3
b1 = a1 - b1; // 1
a1 = a1 - b1; // 2
console.log(a1, b1);

// prog11
if (num1 / 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// prog14
const PI = 3.14;
const RADIUS = 5;

console.log("Area of circle is", PI * (RADIUS * RADIUS)); // wow even the colours in terminal are different!
console.log("Circumference of circle is", 2 * PI * RADIUS); // do I need to typecast it? --> doesn't look like it (does it mean that JS supports autocasting, implicit casting ig)

// prog17
let marks1 = 92;
let marks2 = 32;
let marks3 = 42;
let total_marks = marks1 + marks2 + marks3;
let average_marks = total_marks / 3;

if (marks1 > 40 && marks2 > 40 && marks3 > 40 && average_marks > 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// prog19 (looks efficient, have to verify though)
if (marks1 > marks3) {
  if (marks1 > marks2) {
    console.log(marks1);
  } else {
    console.log(marks2);
  }
} else {
  console.log(marks3);
}


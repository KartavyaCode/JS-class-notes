/*
JS conditional statements allow us to perform different actions based on different conditions
1.if
2. if else
3. if, else if, else
4. switch (for many alternate code blocks)
5. ternary operator (?:) --> shorthand for if else
*/

const num = 5;
if (num > 0) {
  console.log("Positive");
} else if (num == 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

let num1 = 5;
switch (num1) {
  case 0:
    console.log("zero");
    break;
  case 1:
    console.log("one"); // idhar break nahi diya, does it have any effect? --> yes fall-through will happen
  default:
    console.log("num is neither 0 nor 1");
    break;
}

/*
// Logical operators
if (marks > 75 && attendance > 75) {
  console.log("Pass");
} else {
  console.log("False");
}

if (age > 18 || experience > 5) {
  console.log("apply for job");
}
*/

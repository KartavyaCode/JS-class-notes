document.getElementById("output").innerHTML = add(a, b);

// BOM DOM part
document.getElementById("output").innerHTML = "var student_name" + student_name + "<br>" + "let age" + age + "<br>" + "const COURSE" + COURSE;

console.error("error");

// ye kaisa example hai hoisting ka
let count = 0;
function countVar() {
  if (count != 0) {
    count++;
    return count;
  }
  count = 5;
  return count;
}
console.log(countVar());

let obj = {name: "Amit", age: 25};

// Closures are nothing but functions that remember the environment in which they were created, they remember the variables which are declared outside of it.

// this keyword and binding context to this
// If you transfer the context, this would lose the actual context. If you want to get the context, you'll need to bind that

/*
How do you want to load your script?
At the top, at the end, you want to defer the loading, there are a lot of ways
Just before the body
DOM - Document Object Model (manipulate HTML elements)
Window object which we can manipulate using DOM, BOM and JS itself
BOM - Box Object Model (consists of the screen, navigator and location)
*/

window.outerWidth
window.outerHeight
navigator.userAgent
location.hostname
location.href
document.firstChild.firstChild
document.getElementsByTagName("h1")
// All these are WebAPIs

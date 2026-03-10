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

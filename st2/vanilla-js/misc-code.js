// window object
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(innerHeight); // window is optional

// window methods
alert('Welcome'); // shows message (alert box)
let x = confirm('Continue?'); // asks OK/Cancel and returns true/false (OK => true, Cancel => false)
console.log(x);
let name = prompt('Enter name:'); // user input
console.log('Hello ' + name);

// pop-up windows
// Syntax: window.open(url, name, specs);
let win = window.open('https://google.com');
win.close(); // to close window

window.console.log('hello'); // window is the global object
window.alert('Welcome!');
let newWin = window.open('https://www.google.com', '_blank', 'width=500, height=400');

// navigator object - for browser information
console.log(navigator.userAgent); // browser details
console.log(navigator.language); // language of browser
console.log(navigator.onLine); // internet status (true/false)
if (navigator.onLine) {
  console.log('user is online');
}

console.log(navigator.platform);

// location object - for url handling
console.log(location.href); // full URL
console.log(location.hostname); // domain name
console.log(location.pathname); // page path
location.href = 'https://google.com'; // redirection example
location.reload();

location.protocol;

// Timers
// Syntax: setTimeout(function, time);
let t = setTimeout(function () {
  console.log('hello after 2s');
}, 2000); // executes code after a delay and runs only once. The delay is written in milliseconds

// note function ke bajaye we can use arrow function as well () => {} or () => console.log("hello"), directly

clearTimeout(t); // can stop the timer before execution

// Syntax: setInterval(function, time)
let count = 0;
let id = setInterval(function () {
  console.log('Running...');
  count++;
  console.log(count);
  if(count === 5){
    clearInterval(id); // stops the repetition
  }
}, 1000); // executes code repeatedly after fixed intervals


// STORAGE
// local storage
localStorage.setItem("course", "JS"); // save/store data (key, value)
localStorage.setItem("theme", "dark");
let course = localStorage.getItem("course"); // read/retrieve data
console.log(course);

localStorage.removeItem("course"); // delete item
localStorage.clear(); // remove all data

// session storage
sessionStorage.setItem("rollNo", "wow");
let roll = sessionStorage.getItem("rollNo");
console.log(roll);

sessionStorage.removeItem("rollNo");
sessionStorage.clear();
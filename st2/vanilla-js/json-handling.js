/*
JSON stands for JS Object Notation
It is used to storage and exchange data (is lightweight and easy to read)
JSON methods help in data exchange
*/

let json = JSON.stringify(obj); // converts JS object into JSON string (used when sending data to server)
let obj = JSON.parse(json); // converts JSON string into JS object (used when receiving data from server)

// Destructuring with JSON
let {name, age} = JSON.parse(jsonData); // after parsing JSON, destructuring can extract values easily
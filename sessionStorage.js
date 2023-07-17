// Storing data in sessionStorage
sessionStorage.setItem("name", "John");
sessionStorage.setItem("age", "30");

// Retrieving data from sessionStorage
var name = sessionStorage.getItem("name");
var age = sessionStorage.getItem("age");

console.log(name); // Output: John
console.log(age); // Output: 30

// Updating data in sessionStorage
sessionStorage.setItem("age", "31");
age = sessionStorage.getItem("age");
console.log(age); // Output: 31

// Removing data from sessionStorage
sessionStorage.removeItem("age");
age = sessionStorage.getItem("age");
console.log(age); // Output: null

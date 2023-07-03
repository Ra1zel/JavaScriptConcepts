// Storing data in localStorage
localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// Retrieving data from localStorage
var name = localStorage.getItem("name");
var age = localStorage.getItem("age");

console.log(name); // Output: John
console.log(age); // Output: 30

// Updating data in localStorage
localStorage.setItem("age", "31");
age = localStorage.getItem("age");
console.log(age); // Output: 31

// Removing data from localStorage
localStorage.removeItem("age");
age = localStorage.getItem("age");
console.log(age); // Output: null

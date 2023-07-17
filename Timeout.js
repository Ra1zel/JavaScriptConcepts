// Delayed execution using setTimeout()
console.log("Before setTimeout");
setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 2000); // Executes after 2000 milliseconds (2 seconds)
console.log("After setTimeout");

// Delayed execution with function and arguments
function delayedGreeting(name) {
  console.log("Hello, " + name + "!");
}

console.log("Before setTimeout with function");
setTimeout(delayedGreeting, 3000, "Alice"); // Executes after 3000 milliseconds (3 seconds)
console.log("After setTimeout with function");

// Delayed execution with an anonymous function
console.log("Before setTimeout with anonymous function");
setTimeout(() => {
  console.log("This is an anonymous function inside setTimeout");
}, 1000); // Executes after 1000 milliseconds (1 second)
console.log("After setTimeout with anonymous function");

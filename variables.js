// Variable declaration and assignment
let myVariable = 42;
const PI = 3.14159;
var oldVariable = "Hello";

// Variable reassignment
myVariable = 99;

// Variable scoping
function myFunction() {
  let innerVariable = "Inner";
  console.log(innerVariable); // Outputs: "Inner"
}
myFunction();
console.log(typeof innerVariable); // Outputs: "undefined" (out of scope)


// Data types
let num = 42; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let arr = [1, 2, 3]; // Array
let obj = { name: "John", age: 25 }; // Object
let nullVar = null; // Null
let undefinedVar = undefined; // Undefined

// Dynamic typing
let dynamicVar = 42;
dynamicVar = "Hello";

// Scope: Global vs. Local
let globalVar = "I'm global";

function localScope() {
  let localVar = "I'm local";
  console.log(globalVar); // Outputs: "I'm global"
  console.log(localVar); // Outputs: "I'm local"
}
localScope();


// Constants
const gravity = 9.8;
gravity = 9.81; // Error: Assignment to constant variable


// Variable declaration without assignment
let uninitializedVar;
console.log(uninitializedVar); // Outputs: "undefined"

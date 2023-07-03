// Immutability with primitive types
let immutableString = "Hello";
let immutableNumber = 42;

// Attempting to modify immutable variables
immutableString[0] = 'a'; // Error: Assignment to constant variable
immutableNumber = 99; // Error: Assignment to constant variable
console.log(immutableString)
console.log(immutableNumber)
// Mutability with objects
let mutableArray = [1, 2, 3];
let mutableObject = { name: "John", age: 30 };

// Modifying mutable variables
mutableArray.push(4);
mutableObject.age = 31;

console.log(mutableArray); // Outputs: [1, 2, 3, 4]
console.log(mutableObject); // Outputs: { name: "John", age: 31 }

// Immutability with object spread operator (ES6+)
let originalObject = { x: 1, y: 2 };
let newObject = { ...originalObject, z: 3 };

console.log(originalObject); // Outputs: { x: 1, y: 2 }
console.log(newObject); // Outputs: { x: 1, y: 2, z: 3 }

// Immutability with array methods (ES5+)
let originalArray = [1, 2, 3];
let newArray = originalArray.concat(4);

console.log(originalArray); // Outputs: [1, 2, 3]
console.log(newArray); // Outputs: [1, 2, 3, 4]

// Immutability with array spread operator (ES6+)
let originalArray2 = [1, 2, 3];
let newArray2 = [...originalArray2, 4];

console.log(originalArray2); // Outputs: [1, 2, 3]
console.log(newArray2); // Outputs: [1, 2, 3, 4]

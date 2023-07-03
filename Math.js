// Generate a random number between 0 (inclusive) and 1 (exclusive)
let randomNumber = Math.random();
console.log(randomNumber); // Outputs a random decimal value between 0 and 1

// Generate a random number between 1 and 10 (inclusive)
let randomInRange = Math.floor(Math.random() * 10) + 1;
console.log(randomInRange); // Outputs a random integer between 1 and 10

// Round a value to the nearest integer
let value = 3.7;
let roundedValue = Math.round(value);
console.log(roundedValue); // Outputs: 4

// Round a value down to the nearest integer
let value2 = 6.9;
let roundedDownValue = Math.floor(value2);
console.log(roundedDownValue); // Outputs: 6

// Round a value up to the nearest integer
let value3 = 4.2;
let roundedUpValue = Math.ceil(value3);
console.log(roundedUpValue); // Outputs: 5

// Get the maximum of two values
let maxValue = Math.max(10, 5, 8);
console.log(maxValue); // Outputs: 10

// Get the minimum of two values
let minValue = Math.min(10, 5, 8);
console.log(minValue); // Outputs: 5

// Calculate the absolute value
let negativeValue = -7;
let absoluteValue = Math.abs(negativeValue);
console.log(absoluteValue); // Outputs: 7

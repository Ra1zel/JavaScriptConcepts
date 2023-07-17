// Importing Named Exports
import { sum, multiply } from './exporting.js';
console.log(sum(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6

// Importing Default Export
import divide from './exporting.js';
console.log(divide(6, 2)); // Output: 3